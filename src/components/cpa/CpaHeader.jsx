import React from 'react';
import { Search, Bell, Sun, Moon, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CpaHeader = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast({
      title: `🌙 Dark mode is a future feature!`,
      description: "You'll be able to switch themes soon. Request it in your next prompt! 🚀",
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white/80 backdrop-blur-lg px-6 shadow-sm">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <Input
          type="search"
          placeholder="Search clients, tasks, or documents..."
          className="w-full max-w-md pl-10 bg-slate-50 border-slate-200"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => toast({ title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀' })}>
          <Bell className="h-5 w-5" />
          <span className="sr-only">View notifications</span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            AJ
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <span className="text-sm font-semibold text-slate-700">Alex Johnson</span>
            <span className="text-xs text-slate-500">CPA</span>
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default CpaHeader;