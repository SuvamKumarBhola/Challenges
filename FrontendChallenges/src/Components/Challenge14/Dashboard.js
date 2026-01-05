import withAuth from "./withAuth";

const UserList = ({ title }) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            <ul className="space-y-2">
                <li className="text-gray-300 bg-white/5 px-4 py-2 rounded-lg">Alice</li>
                <li className="text-gray-300 bg-white/5 px-4 py-2 rounded-lg">Bob</li>
            </ul>
        </div>
    );
};

const AdminSettings = () => {
    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Nuclear Codes</h2>
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95">
                Delete Database
            </button>
        </div>
    );
};

export const protectedUserList = withAuth(UserList, ['admin']);
export const protectedAdminSettings = withAuth(AdminSettings, ['admin']);