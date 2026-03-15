import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const SchemaValidator = ({ debug = false }) => {
  const [schemas, setSchemas] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!debug) return;

    // Wait for schemas to be injected
    const timer = setTimeout(() => {
      const scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
      const foundSchemas = [];
      
      scriptTags.forEach((tag, idx) => {
        try {
          const json = JSON.parse(tag.innerText);
          foundSchemas.push({
            id: idx,
            type: json['@type'],
            valid: !!json['@context'], // Simple check
            data: json
          });
        } catch (e) {
          foundSchemas.push({
            id: idx,
            type: 'Invalid JSON',
            valid: false,
            error: e.message
          });
        }
      });
      
      setSchemas(foundSchemas);
      if (import.meta.env.DEV) console.log('Schema Validation:', foundSchemas);
    }, 2000);

    return () => clearTimeout(timer);
  }, [debug]);

  if (!debug || schemas.length === 0) return null;

  return (
    <div className={`fixed bottom-4 right-4 bg-slate-900 text-white p-4 rounded-xl shadow-2xl z-50 max-w-sm transition-all ${visible ? 'translate-y-0' : 'translate-y-[calc(100%-3rem)]'}`}>
      <div 
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <h3 className="font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          Schema Validator ({schemas.length})
        </h3>
        <span className="text-xs bg-slate-700 px-2 py-1 rounded">Debug</span>
      </div>
      
      {visible && (
        <div className="space-y-2 mt-2 max-h-60 overflow-y-auto text-xs">
          {schemas.map(s => (
            <div key={s.id} className={`p-2 rounded border ${s.valid ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-rose-500/30 bg-rose-500/10'}`}>
              <div className="font-bold">{s.type}</div>
              {!s.valid && <div className="text-rose-400">{s.error}</div>}
              {s.valid && <div className="text-slate-400 truncate">{JSON.stringify(s.data).substring(0, 50)}...</div>}
            </div>
          ))}
          <a 
            href="https://validator.schema.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded mt-2"
          >
            Validate on Schema.org
          </a>
        </div>
      )}
    </div>
  );
};

export default SchemaValidator;