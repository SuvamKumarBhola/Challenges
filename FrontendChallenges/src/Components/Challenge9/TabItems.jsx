const tabItems = [
    {
        label: 'Profile',
        content: (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Information</h2>
                <p className="text-gray-600 mb-6">Manage your personal details and preferences.</p>
                <div className="space-y-3">
                    <div className="flex items-center py-2 border-b border-gray-100">
                        <span className="font-semibold text-gray-700 w-24">Name:</span>
                        <span className="text-gray-900">John Doe</span>
                    </div>
                    <div className="flex items-center py-2 border-b border-gray-100">
                        <span className="font-semibold text-gray-700 w-24">Email:</span>
                        <span className="text-gray-900">john@example.com</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="font-semibold text-gray-700 w-24">Location:</span>
                        <span className="text-gray-900">San Francisco, CA</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        label: 'Settings',
        content: (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Settings</h2>
                <p className="text-gray-600 mb-6">Configure your application preferences.</p>
                <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
                        <span className="text-gray-700 group-hover:text-gray-900">Enable notifications</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
                        <span className="text-gray-700 group-hover:text-gray-900">Dark mode</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
                        <span className="text-gray-700 group-hover:text-gray-900">Auto-save changes</span>
                    </label>
                </div>
            </div>
        ),
    },
    {
        label: 'Messages',
        content: (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Messages</h2>
                <p className="text-gray-600 mb-6">View and manage your conversations.</p>
                <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900">Alice:</span>
                        <span className="text-gray-700 ml-2">Hey, how are you?</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900">Bob:</span>
                        <span className="text-gray-700 ml-2">Meeting at 3 PM today</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900">Carol:</span>
                        <span className="text-gray-700 ml-2">Thanks for your help!</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        label: 'Analytics',
        content: (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Performance Analytics</h2>
                <p className="text-gray-600 mb-6">Track your metrics and insights.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center border border-blue-200">
                        <div className="text-3xl font-bold text-blue-700 mb-1">2.4K</div>
                        <div className="text-sm text-blue-600 font-medium">Views</div>
                    </div>
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6 text-center border border-green-200">
                        <div className="text-3xl font-bold text-green-700 mb-1">156</div>
                        <div className="text-sm text-green-600 font-medium">Clicks</div>
                    </div>
                    <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center border border-purple-200">
                        <div className="text-3xl font-bold text-purple-700 mb-1">89%</div>
                        <div className="text-sm text-purple-600 font-medium">Engagement</div>
                    </div>
                </div>
            </div>
        ),
    },
];

export default tabItems;