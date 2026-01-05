import { useAuth } from "./AuthContext";
import { protectedUserList as ProtectedUserList, protectedAdminSettings as ProtectedAdminSettings } from "./Dashboard";

const AppContent = () => {
    const { user, login } = useAuth();

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
                    <h1 className="text-4xl font-bold text-white mb-2 text-center">
                        RBAC Demo (HOC Pattern)
                    </h1>

                    <div className="text-center mb-8">
                        <span className="text-gray-300 text-lg">Current User: </span>
                        <span className="text-purple-300 font-semibold text-lg">
                            {user ? user.role : 'Logged Out'}
                        </span>
                    </div>

                    <div className="flex gap-4 justify-center mb-8">
                        <button
                            onClick={() => login('viewer')}
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                        >
                            Login as Viewer
                        </button>
                        <button
                            onClick={() => login('admin')}
                            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                        >
                            Login as Admin
                        </button>
                    </div>

                    <div className="space-y-6">
                        <ProtectedUserList />
                        <ProtectedAdminSettings />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppContent;