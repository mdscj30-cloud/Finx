import React, { useState, useEffect } from 'react';
import { Search, Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { glossaryTerms } from '@/lib/glossaryTermsData';

const GlossarySearch = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [filteredCount, setFilteredCount] = useState(glossaryTerms.length);

  // Extract unique categories
  const categories = ['All', ...new Set(glossaryTerms.map(t => t.category))].sort();

  useEffect(() => {
    // Debounce search
    const timer = setTimeout(() => {
      filterAndSortTerms();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, sortOrder]);

  const filterAndSortTerms = () => {
    let filtered = glossaryTerms.filter(term => {
      const matchesSearch = 
        term.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    setFilteredCount(filtered.length);
    onFilterChange(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortOrder('asc');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
      <div className="grid md:grid-cols-12 gap-6 items-end">
        {/* Search Input */}
        <div className="md:col-span-5 relative">
          <label className="text-sm font-medium text-slate-500 mb-2 block">Search Terms</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="E.g., EBITDA, Accrual..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="md:col-span-4">
          <label className="text-sm font-medium text-slate-500 mb-2 block">Category</label>
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort & Stats */}
        <div className="md:col-span-3 flex items-center justify-between gap-4">
          <div className="flex-1">
             <label className="text-sm font-medium text-slate-500 mb-2 block">Sort</label>
             <Button
                variant="outline"
                className="w-full justify-between"
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              >
                {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4 ml-2" /> : <SortDesc className="w-4 h-4 ml-2" />}
              </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
        <span>Showing <strong>{filteredCount}</strong> terms</span>
        {(searchTerm || selectedCategory !== 'All') && (
          <button 
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            Clear all filters
            <X className="w-3 h-3 ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default GlossarySearch;