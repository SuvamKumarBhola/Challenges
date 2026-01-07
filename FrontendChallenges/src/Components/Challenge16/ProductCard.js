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
        <div style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;