// Mock Database
const users = [{ id: 1, name: 'Dev', role: 'admin' }];

exports.getUserById = async (id) => {
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};