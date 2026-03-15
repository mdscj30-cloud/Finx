import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Building, Mail, Phone, DollarSign, TrendingDown, TrendingUp, Clock, FileText, MessageSquare, Loader2, FileUp, Folder, Trash2, Eye, FileImage, FileArchive, FolderPlus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const getFileIcon = (fileType, className = "w-8 h-8") => {
  if (!fileType) return <FileText className={cn("text-slate-500", className)} />;
  if (fileType.startsWith('image/')) return <FileImage className={cn("text-indigo-500", className)} />;
  if (fileType === 'application/pdf') return <FileText className={cn("text-red-500", className)} />;
  if (fileType.includes('zip') || fileType.includes('archive')) return <FileArchive className={cn("text-yellow-500", className)} />;
  return <FileText className={cn("text-slate-500", className)} />;
};

const CreateFolderModal = ({ open, onOpenChange, onFolderCreated, parentFolderId, userId }) => {
  const [folderName, setFolderName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!folderName.trim()) {
      toast({ title: 'Folder name cannot be empty', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('folders')
      .insert({ name: folderName, parent_folder_id: parentFolderId, user_id: userId })
      .select();
    
    setLoading(false);
    if (error) {
      toast({ title: 'Error creating folder', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Folder created!' });
      onFolderCreated(data[0]);
      onOpenChange(false);
      setFolderName('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Folder</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <Label htmlFor="folder-name">Folder Name</Label>
            <Input id="folder-name" value={folderName} onChange={(e) => setFolderName(e.target.value)} autoFocus />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const ClientDocuments = ({ client, user }) => {
  const [documents, setDocuments] = useState([]);
  const [folders, setFolders] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([{ id: null, name: 'Root' }]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const fetchData = useCallback(async () => {
    if (!user || !client?.user_id) return;
    setLoading(true);
    
    const [docsRes, foldersRes] = await Promise.all([
      supabase.from('documents').select('*').eq('user_id', client.user_id).eq('folder_id', currentFolderId),
      supabase.from('folders').select('*').eq('user_id', client.user_id).eq('parent_folder_id', currentFolderId)
    ]);

    if (docsRes.error) toast({ title: 'Error fetching documents', variant: 'destructive' });
    else setDocuments(docsRes.data);

    if (foldersRes.error) toast({ title: 'Error fetching folders', variant: 'destructive' });
    else setFolders(foldersRes.data);

    setLoading(false);
  }, [user, client, currentFolderId]);

  useEffect(() => {
    if (client && client.user_id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [client, fetchData]);

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !client.user_id) return;

    setUploading(true);
    const filePath = `${client.user_id}/${currentFolderId || 'root'}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage.from('documents').upload(filePath, file);

    if (uploadError) {
      toast({ title: 'Upload failed', variant: 'destructive' });
      setUploading(false);
      return;
    }

    await supabase.from('documents').insert({
      user_id: client.user_id,
      name: file.name,
      storage_path: filePath,
      file_type: file.type,
      status: 'Uploaded',
      folder_id: currentFolderId,
    });

    toast({ title: 'Document uploaded successfully!' });
    setUploading(false);
    fetchData();
  };

  const handleDeleteDoc = async (docId, storagePath) => {
    await supabase.storage.from('documents').remove([storagePath]);
    await supabase.from('documents').delete().match({ id: docId });
    toast({ title: 'Document deleted' });
    fetchData();
  };

  const handleView = (storagePath) => {
    const { data } = supabase.storage.from('documents').getPublicUrl(storagePath);
    window.open(data.publicUrl, '_blank');
  };

  const handleFolderClick = (folder) => {
    setCurrentFolderId(folder.id);
    setBreadcrumbs([...breadcrumbs, folder]);
  };

  const handleBreadcrumbClick = (folderId, index) => {
    setCurrentFolderId(folderId);
    setBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  if (!client.user_id) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">This client is not linked to a user account for document storage.</p>
        <p className="text-xs text-slate-400 mt-2">You can link an account when adding a new client.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div className="flex items-center text-sm text-slate-500">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.id || 'root'} className="flex items-center">
              <button onClick={() => handleBreadcrumbClick(crumb.id, index)} className="hover:underline disabled:no-underline disabled:cursor-default" disabled={index === breadcrumbs.length - 1}>
                {crumb.name}
              </button>
              {index < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 mx-1" />}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" disabled={uploading} />
          <Button variant="outline" onClick={() => setIsFolderModalOpen(true)}>
            <FolderPlus className="mr-2 h-4 w-4" /> Create Folder
          </Button>
          <Button onClick={handleUploadClick} disabled={uploading}>
            {uploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileUp className="mr-2 h-4 w-4" />}
            Upload
          </Button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>
      ) : (folders.length === 0 && documents.length === 0) ? (
        <div className="text-center py-12 border-2 border-dashed rounded-xl">
          <Folder className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-2 text-sm font-medium text-slate-900">This folder is empty</h3>
          <p className="mt-1 text-sm text-slate-500">Upload a file or create a new folder.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {folders.map(folder => (
            <motion.div key={folder.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => handleFolderClick(folder)}>
              <Folder className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <p className="font-semibold text-sm text-blue-800 break-all">{folder.name}</p>
            </motion.div>
          ))}
          {documents.map(doc => (
            <motion.div key={doc.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border rounded-xl p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                {getFileIcon(doc.file_type, "w-6 h-6")}
                <div className="flex-1">
                  <p className="font-semibold text-sm text-slate-800 break-all">{doc.name}</p>
                  <p className="text-xs text-slate-500">{new Date(doc.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleView(doc.storage_path)}><Eye className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8" onClick={() => handleDeleteDoc(doc.id, doc.storage_path)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <CreateFolderModal open={isFolderModalOpen} onOpenChange={setIsFolderModalOpen} onFolderCreated={fetchData} parentFolderId={currentFolderId} userId={client.user_id} />
    </div>
  );
};

const CpaClientDetailPage = () => {
  const { clientId } = useParams();
  const { user } = useAuth();
  const [client, setClient] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !clientId) return;
      setLoading(true);
      const [clientRes, tasksRes] = await Promise.all([
        supabase.from('cpa_clients').select('*').eq('id', clientId).single(),
        supabase.from('cpa_tasks').select('*').eq('client_id', clientId)
      ]);

      if (clientRes.error) toast({ title: 'Error fetching client', variant: 'destructive' });
      else setClient(clientRes.data);

      if (tasksRes.error) toast({ title: 'Error fetching tasks', variant: 'destructive' });
      else setTasks(tasksRes.data);
      
      setLoading(false);
    };
    fetchData();
  }, [clientId, user]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Loader2 className="w-12 h-12 animate-spin text-blue-600" /></div>;
  }

  if (!client) {
    return <div className="p-8 text-center">Client not found.</div>;
  }

  const metrics = [
    { icon: TrendingUp, title: 'Monthly Revenue', value: '$85k' },
    { icon: TrendingDown, title: 'Monthly Expenses', value: '$40k' },
    { icon: DollarSign, title: 'Profit/Loss', value: '$45k' },
    { icon: TrendingDown, title: 'Burn Rate', value: '$15k' },
    { icon: Clock, title: 'Cash Runway', value: '18 months' },
  ];

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>{client.name} - Client Details</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <Link to="/cpa/clients" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline mb-6">
          <ArrowLeft size={16} /> Back to All Clients
        </Link>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{client.name}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mt-2">
              <span className="flex items-center gap-1.5"><Building size={14} /> {client.industry}</span>
              <span className="flex items-center gap-1.5"><Mail size={14} /> {client.email}</span>
              <span className="flex items-center gap-1.5"><Phone size={14} /> {client.phone}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline"><MessageSquare size={16} className="mr-2" /> Message Client</Button>
            <Button><FileText size={16} className="mr-2" /> View Reports</Button>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-sm border"
            >
              <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5"><metric.icon size={14} /> {metric.title}</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="documents" className="w-full">
          <TabsList>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="tasks">Pending Items</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="documents" className="bg-slate-50/80 p-6 rounded-b-lg rounded-tr-lg border">
            <ClientDocuments client={client} user={user} />
          </TabsContent>
          <TabsContent value="tasks" className="bg-white p-6 rounded-b-lg rounded-tr-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Task Tracker</h3>
            <div className="space-y-3">
              {tasks.length > 0 ? tasks.map(task => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-800">{task.title}</p>
                  <Button variant="ghost" size="sm">Details</Button>
                </div>
              )) : <p className="text-slate-500 text-center py-8">No tasks for this client.</p>}
            </div>
          </TabsContent>
          <TabsContent value="activity" className="bg-white p-6 rounded-b-lg rounded-tr-lg shadow-sm border text-center">
            <h3 className="font-bold text-lg mb-2 text-slate-800">Work Activity</h3>
            <p className="text-slate-500">Time tracking and activity log coming soon.</p>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default CpaClientDetailPage;