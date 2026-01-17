export const fileSystem = {
    id: 'root',
    name: 'my-project',
    isFolder: true,
    children: [
        {
            id: 'src',
            name: 'src',
            isFolder: true,
            children: [
                {
                    id: 'components',
                    name: 'components',
                    isFolder: true,
                    children: [
                        { id: 'Button.js', name: 'Button.js', isFolder: false },
                        { id: 'Header.js', name: 'Header.js', isFolder: false },
                    ]
                },
                { id: 'App.js', name: 'App.js', isFolder: false },
                { id: 'index.js', name: 'index.js', isFolder: false },
            ]
        },
        {
            id: 'public',
            name: 'public',
            isFolder: true,
            children: [
                { id: 'index.html', name: 'index.html', isFolder: false },
                { id: 'favicon.ico', name: 'favicon.ico', isFolder: false },
            ]
        },
        { id: 'package.json', name: 'package.json', isFolder: false },
        { id: 'README.md', name: 'README.md', isFolder: false },
    ]
};