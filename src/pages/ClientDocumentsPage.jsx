import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { FileUp, CheckCircle, Clock, AlertCircle, Eye, Edit, Trash2, Loader2, FileText, FileImage, FileArchive, Folder, FolderPlus, ArrowUpAZ, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';

const StatusBadge = ({ status }) => {
  const baseClasses = "px-2.5 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 w-fit";
  const statusMap = {
    'Signed': { icon: CheckCircle, classes: 'bg-blue-100/80 text-blue-700 border border-blue-200/80' },
    'Verified': { icon: CheckCircle, classes: 'bg-green-100/80 text-green-700 border border-green-200/80' },
    'Pending Signature': { icon: Clock, classes: 'bg-yellow-100/80 text-yellow-700 border border-yellow-200/80' },
    'Uploaded': { icon: FileUp, classes: 'bg-gray-100/80 text-gray-700 border border-gray-200/80' },
    'Action Required': { icon: AlertCircle, classes: 'bg-red-100/80 text-red-700 border border-red-200/80' },
  };
  const currentStatus = statusMap[status] || statusMap['Action Required'];
  const Icon = currentStatus.icon;
  return <span className={cn(baseClasses, currentStatus.classes)}><Icon size={12} /> {status}</span>;
};

const getFileIcon = (fileType, className = "w-8 h-8") => {
  if (!fileType) return <FileText className={cn("text-slate-500", className)} />;
  if (fileType.startsWith('image/')) return <FileImage className={cn("text-indigo-500", className)} />;
  if (fileType === 'application/pdf') return <FileText className={cn("text-red-500", className)} />;
  if (fileType.includes('zip') || fileType.includes('archive')) return <FileArchive className={cn("text-yellow-500", className)} />;
  return <FileText className={cn("text-slate-500", className)} />;
};

const SigningDialog = ({ documentName, onSign }) => (
  <DialogContent className="sm:max-w-[625px] bg-white/80 backdrop-blur-lg border-white/20 shadow-xl">
    <DialogHeader>
      <DialogTitle className="gradient-text">Sign Document: {documentName}</DialogTitle>
      <DialogDescription>
        Please review the document below and affix your digital signature.
      </DialogDescription>
    </DialogHeader>
    <div className="my-4 p-4 border rounded-lg h-64 bg-slate-50/50 flex items-center justify-center">
      <p className="text-slate-400">Document preview would appear here.</p>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button onClick={onSign} className="w-full btn-primary">
          <Edit className="mr-2 h-4 w-4" /> Sign and Submit
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
);

const DocumentCard = ({ doc, onDelete, onSign, onView }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-start gap-4 mb-4">
      {getFileIcon(doc.file_type)}
      <div className="flex-1">
        <p className="font-semibold text-slate-800 break-all">{doc.name}</p>
        <p className="text-xs text-slate-500">
          {new Date(doc.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
    <div className="mt-auto space-y-4">
      <StatusBadge status={doc.status} />
      <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-200/80">
        {doc.status === 'Pending Signature' ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="sm">
                <Edit className="mr-2 h-4 w-4" /> Sign
              </Button>
            </DialogTrigger>
            <SigningDialog documentName={doc.name} onSign={() => onSign(doc.id)} />
          </Dialog>
        ) : (
          <Button variant="outline" size="sm" className="bg-white/80" onClick={() => onView(doc.storage_path)}>
            <Eye className="mr-2 h-4 w-4" /> View
          </Button>
        )}
        <Button variant="destructive" size="icon" className="bg-red-500/10 text-red-600 hover:bg-red-500/20" onClick={() => onDelete(doc.id, doc.storage_path)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </motion.div>
);

const FolderCard = ({ folder, onOpen, onDelete }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      onDoubleClick={() => onOpen(folder)}
    >
      <div className="flex items-start gap-4 mb-4">
        <Folder className="w-8 h-8 text-yellow-500" />
        <div className="flex-1">
          <p className="font-semibold text-slate-800 break-all">{folder.name}</p>
          <p className="text-xs text-slate-500">
            {new Date(folder.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-end space-x-2 pt-2 border-t border-slate-200/80">
        <Button variant="outline" size="sm" className="bg-white/80" onClick={() => onOpen(folder)}>
          Open
        </Button>
        <Button variant="destructive" size="icon" className="bg-red-500/10 text-red-600 hover:bg-red-500/20" onClick={(e) => { e.stopPropagation(); onDelete(folder.id); }}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );

const CreateFolderDialog = ({ open, onOpenChange, currentFolderId, onFolderCreated }) => {
  const [folderName, setFolderName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const { user } = useAuth();

  const handleCreate = async () => {
    if (!folderName.trim() || !user) return;
    setIsCreating(true);
    const { data, error } = await supabase
      .from('folders')
      .insert({
        name: folderName,
        user_id: user.id,
        parent_folder_id: currentFolderId,
      })
      .select();

    setIsCreating(false);
    if (error) {
      toast({ title: 'Error creating folder', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Folder created successfully!' });
      onFolderCreated(data[0]);
      setFolderName('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white/80 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>Create New Folder</DialogTitle>
          <DialogDescription>Enter a name for your new folder.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="e.g., Tax Returns 2024"
            disabled={isCreating}
          />
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleCreate} disabled={isCreating || !folderName.trim()}>
            {isCreating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create Folder'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const RecentDocumentCard = ({ doc, onView }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-shrink-0 w-64 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/90"
      onClick={() => onView(doc.storage_path)}
    >
      {getFileIcon(doc.file_type, "w-6 h-6")}
      <div className="flex-1 overflow-hidden">
        <p className="font-medium text-sm text-slate-800 truncate">{doc.name}</p>
        <p className="text-xs text-slate-500">
          {new Date(doc.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </p>
      </div>
    </motion.div>
  );

const ClientDocumentsPage = () => {
  const { user } = useAuth();
  const [documents, setDocuments] = useState([]);
  const [allDocuments, setAllDocuments] = useState([]);
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [folderPath, setFolderPath] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);

  const fetchContents = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    const folderId = currentFolder ? currentFolder.id : null;

    const folderQuery = supabase
      .from('folders')
      .select('*')
      .eq('user_id', user.id);

    if (folderId) {
      folderQuery.eq('parent_folder_id', folderId);
    } else {
      folderQuery.is('parent_folder_id', null);
    }

    const { data: foldersData, error: foldersError } = await folderQuery;

    const docQuery = supabase
      .from('documents')
      .select('*')
      .eq('user_id', user.id);
    
    if (folderId) {
        docQuery.eq('folder_id', folderId);
    } else {
        docQuery.is('folder_id', null);
    }

    const { data: documentsData, error: documentsError } = await docQuery;
    
    const { data: allDocsData, error: allDocsError } = await supabase
      .from('documents')
      .select('*')
      .eq('user_id', user.id);

    if (foldersError || documentsError || allDocsError) {
      toast({ title: 'Error fetching contents', description: foldersError?.message || documentsError?.message || allDocsError?.message, variant: 'destructive' });
    } else {
      setFolders(foldersData || []);
      setDocuments(documentsData || []);
      setAllDocuments(allDocsData || []);
    }
    setLoading(false);
  }, [user, currentFolder]);

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !user) return;

    setUploading(true);
    const filePath = `${user.id}/${currentFolder ? currentFolder.id + '/' : ''}${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage.from('documents').upload(filePath, file);

    if (uploadError) {
      toast({ title: 'Upload failed', description: uploadError.message, variant: 'destructive' });
      setUploading(false);
      return;
    }

    const { error: insertError } = await supabase.from('documents').insert({
      user_id: user.id,
      name: file.name,
      storage_path: filePath,
      file_type: file.type,
      status: 'Uploaded',
      folder_id: currentFolder ? currentFolder.id : null,
    });

    if (insertError) {
      toast({ title: 'Failed to save document record', description: insertError.message, variant: 'destructive' });
    } else {
      toast({ title: 'Document uploaded successfully!' });
      fetchContents();
    }
    setUploading(false);
  };

  const handleDeleteDoc = async (docId, storagePath) => {
    setDocuments(docs => docs.filter(d => d.id !== docId));
    await supabase.storage.from('documents').remove([storagePath]);
    await supabase.from('documents').delete().match({ id: docId });
    toast({ title: 'Document deleted' });
    fetchContents();
  };

  const handleDeleteFolder = async (folderId) => {
    const { error } = await supabase.from('folders').delete().match({ id: folderId });
    if (error) {
      toast({ title: 'Error deleting folder', description: "Make sure the folder is empty.", variant: 'destructive' });
    } else {
      toast({ title: 'Folder deleted' });
      fetchContents();
    }
  };

  const handleSign = async (docId) => {
    const { error } = await supabase.from('documents').update({ status: 'Signed' }).match({ id: docId });
    if (error) {
      toast({ title: 'Failed to sign', variant: 'destructive' });
    } else {
      toast({ title: 'Document signed!' });
      fetchContents();
    }
  };

  const handleView = async (storagePath) => {
    const { data } = supabase.storage.from('documents').getPublicUrl(storagePath);
    if (data.publicUrl) {
      window.open(data.publicUrl, '_blank');
    } else {
      toast({ title: 'Could not get public URL', variant: 'destructive' });
    }
  };

  const handleOpenFolder = (folder) => {
    setCurrentFolder(folder);
    setFolderPath(prev => [...prev, folder]);
  };

  const handleNavigateToFolder = (folder, index) => {
    if (folder === null) {
      setCurrentFolder(null);
      setFolderPath([]);
    } else {
      setCurrentFolder(folder);
      setFolderPath(prev => prev.slice(0, index + 1));
    }
  };

  const sortedItems = [...folders, ...documents].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const recentDocuments = allDocuments.filter(doc => new Date(doc.created_at) > sevenDaysAgo);

  return (
    <>
      <Helmet><title>Documents - FinxisAI</title></Helmet>
      <main className="flex-grow p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold font-display gradient-text">Documents Center</h1>
            <p className="text-slate-500 mt-1">Manage your secure files and signatures.</p>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <Button variant="outline" onClick={() => setIsCreateFolderOpen(true)}>
              <FolderPlus className="mr-2 h-4 w-4" /> New Folder
            </Button>
            <CreateFolderDialog 
              open={isCreateFolderOpen} 
              onOpenChange={setIsCreateFolderOpen}
              currentFolderId={currentFolder?.id} 
              onFolderCreated={fetchContents} 
            />
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" disabled={uploading} />
            <Button onClick={handleUploadClick} disabled={uploading} className="btn-primary">
              {uploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileUp className="mr-2 h-4 w-4" />}
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </div>

        {recentDocuments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Recently Added</h2>
            <div className="flex gap-4 pb-4 overflow-x-auto">
              {recentDocuments.map(doc => (
                <RecentDocumentCard key={doc.id} doc={doc} onView={handleView} />
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-slate-600 flex items-center gap-1.5 flex-wrap">
                <span onClick={() => handleNavigateToFolder(null)} className="cursor-pointer hover:underline">Root</span>
                {folderPath.map((folder, index) => (
                    <React.Fragment key={folder.id}>
                    <span>/</span>
                    <span onClick={() => handleNavigateToFolder(folder, index)} className="cursor-pointer hover:underline font-medium">{folder.name}</span>
                    </React.Fragment>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => { setSortBy('name'); setSortOrder(p => p === 'asc' ? 'desc' : 'asc')}}>
                    <ArrowUpAZ className="h-4 w-4 mr-1" /> Name
                </Button>
                <Button variant="ghost" size="sm" onClick={() => { setSortBy('created_at'); setSortOrder(p => p === 'asc' ? 'desc' : 'asc')}}>
                    <Calendar className="h-4 w-4 mr-1" /> Date
                </Button>
            </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64"><Loader2 className="w-12 h-12 animate-spin text-blue-600" /></div>
        ) : (
          <AnimatePresence>
            {sortedItems.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedItems.map((item) =>
                  item.storage_path ? ( // It's a document
                    <DocumentCard key={item.id} doc={item} onDelete={handleDeleteDoc} onSign={handleSign} onView={handleView} />
                  ) : ( // It's a folder
                    <FolderCard key={item.id} folder={item} onOpen={handleOpenFolder} onDelete={handleDeleteFolder} />
                  )
                )}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20 px-6 bg-white/50 rounded-2xl border border-dashed">
                <Folder className="mx-auto h-16 w-16 text-slate-400" />
                <h3 className="mt-4 text-lg font-semibold text-slate-800">This folder is empty</h3>
                <p className="mt-1 text-sm text-slate-500">Upload a file or create a new folder to get started.</p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>
    </>
  );
};

export default ClientDocumentsPage;