import { useStore } from './StoreContext';

const Navbar = () => {
    const { state } = useStore();

    return (
        <nav className="flex justify-between items-center px-8 py-5 bg-slate-900 shadow-lg border-b border-slate-700">
            <h1 className="text-2xl font-bold text-white">My Shop</h1>
            <div className="text-slate-200 text-sm">
                <span className="font-medium">Cart: {state.cart.length} items</span>
                <span className="mx-2">|</span>
                <span className="font-semibold text-white">Total: ${state.total}</span>
            </div>
        </nav>
    );
};

export default Navbar;