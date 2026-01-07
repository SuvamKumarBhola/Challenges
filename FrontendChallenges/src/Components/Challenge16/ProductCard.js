import { useStore } from './StoreContext';

const ProductCard = ({ product }) => {
    const { dispatch } = useStore();

    const handleAdd = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: product
        });
    };

    return (
        <div className="border border-slate-700 rounded-lg p-5 w-56 bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
            <p className="text-slate-300 text-xl font-bold mb-4">${product.price}</p>
            <button
                onClick={handleAdd}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;