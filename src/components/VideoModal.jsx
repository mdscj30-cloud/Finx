import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-black border-0">
        <DialogHeader className="p-4 flex flex-row items-center justify-between">
          <DialogTitle className="text-white">{title}</DialogTitle>
          <DialogClose asChild>
            <button className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={isOpen ? `${videoUrl}?autoplay=1` : ''}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;