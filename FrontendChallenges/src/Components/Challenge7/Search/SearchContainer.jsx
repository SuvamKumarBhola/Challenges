import  {useState} from 'react'
import DATA_LIST from '../data/Data'
import SearchBar from './SearchBar'
import ResultList from './ResultList'
import useDebounce from '../hooks/useDebounce'
import Search from 'lucide-react';

function SearchContainer() {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300);

    const filteredItems = DATA_LIST.filter(item =>
        item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Search className="text-blue-600" size={28} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800">Instant Search</h1>
                            <p className="text-slate-500">Search through fruits with real-time highlighting</p>
                        </div>
                    </div>

                    <SearchBar
                        value={query}
                        onChange={setQuery}
                        debouncedValue={debouncedQuery}
                    />

                    <ResultList
                        items={filteredItems}
                        highlightTerm={debouncedQuery}
                    />
                </div>

                {/* Info Footer */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-500">
                        Debounced search with 300ms delay for better performance
                    </p>
                </div>
            </div>
        </div>
    );
}


export default SearchContainer