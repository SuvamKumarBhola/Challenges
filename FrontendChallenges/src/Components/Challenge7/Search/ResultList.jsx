import HighlightedText from '../UI/HighlightedText';
import { Package} from 'lucide-react';

function ResultList({ items, highlightTerm }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <Package className="text-slate-400" size={32} />
        </div>
        <p className="text-slate-500 font-medium">No results found</p>
        <p className="text-sm text-slate-400 mt-1">Try searching with different keywords</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 text-sm text-slate-600">
        Found <span className="font-semibold text-slate-800">{items.length}</span> result{items.length !== 1 ? 's' : ''}
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 text-slate-700 font-medium">
                <HighlightedText text={item} highlight={highlightTerm} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ResultList