import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Tag, BookOpen, Clock, Folder } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts, allCategories } from '@/lib/blogData';

const BlogSidebar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  const featuredPosts = blogPosts.filter(p => p.isFeatured).slice(0, 3);
  const categories = allCategories.map(cat => ({
    name: cat,
    count: blogPosts.filter(p => p.category === cat).length
  }));

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4">Search Articles</h3>
        <form onSubmit={handleSearch} className="relative">
          <Input 
            type="text" 
            placeholder="Keywords..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center">
          <Folder className="w-4 h-4 mr-2 text-blue-600" />
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
             <Link 
                to="/blog"
                className="flex items-center justify-between text-slate-600 hover:text-blue-600 group text-sm font-medium"
              >
                <span>All Articles</span>
                <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-700">
                  {blogPosts.length}
                </Badge>
              </Link>
          </li>
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link 
                to={`/blog/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between text-slate-600 hover:text-blue-600 group text-sm"
              >
                <span>{cat.name}</span>
                <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-700">
                  {cat.count}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Posts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center">
          <BookOpen className="w-4 h-4 mr-2 text-blue-600" /> 
          Pillar Guides
        </h3>
        <div className="space-y-4">
          {featuredPosts.map((post, idx) => (
            <Link key={idx} to={`/blog/${post.slug}`} className="block group border-b border-slate-100 last:border-0 pb-3 last:pb-0">
              <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">{post.category}</span>
              <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 leading-snug mb-1">
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-slate-500">
                <Clock className="w-3 h-3 mr-1" />
                {post.readingTime}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA */}
      <div className="bg-slate-900 p-6 rounded-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
        <h3 className="font-bold text-lg mb-2 relative z-10">Financial Intelligence Weekly</h3>
        <p className="text-slate-300 text-sm mb-4 relative z-10">
          Get the latest financial strategies and AI insights delivered to your inbox.
        </p>
        <form className="space-y-2 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Enter your email" className="bg-white/10 border-slate-700 text-white placeholder:text-slate-400" />
          <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
            Subscribe
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;