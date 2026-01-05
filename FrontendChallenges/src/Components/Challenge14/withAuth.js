import { useAuth } from "./AuthContext";

const withAuth = (WrappedComponent, allowedRoles) => {
    return (props) => {
        const { user } = useAuth();

        if (!user) {
            return (
                <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-red-400 font-semibold text-lg">
                        Access denied: Please login again
                    </p>
                </div>
            );
        }

        if (allowedRoles && !allowedRoles.includes(user.role)) {
            return (
                <div className="bg-orange-500/10 border-2 border-orange-500 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-orange-400 mb-3">
                        Unauthorized Access
                    </h3>
                    <p className="text-gray-300 mb-2">
                        You are a <strong className="text-orange-300">{user.role}</strong>
                    </p>
                    <p className="text-gray-300">
                        This page requires: <strong className="text-orange-300">{allowedRoles.join(' or ')}</strong>
                    </p>
                </div>
            );
        }

        return <WrappedComponent {...props} />;
    }
}

export default withAuth;