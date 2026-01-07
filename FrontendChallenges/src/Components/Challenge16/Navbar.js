import { useStore } from './StoreContext';

const Navbar = () => {
    const { state } = useStore();

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#333', color: 'white' }}>
            <h1>My Shop</h1>
            <div>
                Cart: {state.cart.length} items | Total: ${state.total}
            </div>
        </nav>
    );
};

export default Navbar;