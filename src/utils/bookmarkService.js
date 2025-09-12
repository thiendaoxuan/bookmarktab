/**
 * Fetches the bookmark tree.
 * Uses chrome.bookmarks API if available, otherwise returns mock data.
 */
export const getBookmarksTree = async () => {
    if (typeof chrome !== 'undefined' && chrome.bookmarks) {
        return new Promise((resolve) => {
            chrome.bookmarks.getTree((tree) => {
                resolve(tree);
            });
        });
    } else {
        console.warn('Chrome Bookmarks API not available. Using mock data.');
        return getMockBookmarks();
    }
};

const getMockBookmarks = () => {
    return [
        {
            id: '0',
            title: '',
            children: [
                {
                    id: '1',
                    title: 'Bookmarks Bar',
                    children: [
                        { id: '101', title: 'Google', url: 'https://google.com' },
                        { id: '102', title: 'GitHub', url: 'https://github.com' },
                        { id: '103', title: 'Gmail', url: 'https://mail.google.com' },
                        {
                            id: '104',
                            title: 'Development',
                            children: [
                                { id: '1041', title: 'Stack Overflow', url: 'https://stackoverflow.com' },
                                { id: '1042', title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
                                { id: '1043', title: 'React', url: 'https://reactjs.org' },
                                { id: '1044', title: 'Vite', url: 'https://vitejs.dev' },
                                {
                                    id: '1045',
                                    title: 'Tools',
                                    children: [
                                        { id: '10451', title: 'Figma', url: 'https://figma.com' },
                                        { id: '10452', title: 'VS Code', url: 'https://code.visualstudio.com' },
                                        { id: '10453', title: 'Docker', url: 'https://www.docker.com' },
                                        { id: '10454', title: 'Postman', url: 'https://www.postman.com' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '105',
                            title: 'News & Reading',
                            children: [
                                { id: '1051', title: 'Hacker News', url: 'https://news.ycombinator.com' },
                                { id: '1052', title: 'The Verge', url: 'https://www.theverge.com' },
                                { id: '1053', title: 'TechCrunch', url: 'https://techcrunch.com' },
                                { id: '1054', title: 'Ars Technica', url: 'https://arstechnica.com' }
                            ]
                        },
                        { id: '106', title: 'YouTube', url: 'https://youtube.com' },
                        { id: '107', title: 'Twitter', url: 'https://twitter.com' },
                        { id: '108', title: 'Reddit', url: 'https://reddit.com' }
                    ]
                },
                {
                    id: '2',
                    title: 'Other Bookmarks',
                    children: [
                        {
                            id: '201',
                            title: 'Recipes',
                            children: [
                                { id: '2011', title: 'Serious Eats', url: 'https://www.seriouseats.com' },
                                { id: '2012', title: 'Bon Appetit', url: 'https://www.bonappetit.com' },
                                { id: '2013', title: 'AllRecipes', url: 'https://www.allrecipes.com' }
                            ]
                        },
                        {
                            id: '202',
                            title: 'Travel',
                            children: [
                                { id: '2021', title: 'Airbnb', url: 'https://airbnb.com' },
                                { id: '2022', title: 'Booking.com', url: 'https://booking.com' },
                                { id: '2023', title: 'TripAdvisor', url: 'https://tripadvisor.com' },
                                {
                                    id: '2024',
                                    title: 'Destinations',
                                    children: [
                                        { id: '20241', title: 'Japan', url: 'https://www.japan-guide.com' },
                                        { id: '20242', title: 'Italy', url: 'https://www.italia.it' },
                                        { id: '20243', title: 'France', url: 'https://www.france.fr' }
                                    ]
                                }
                            ]
                        },
                        { id: '203', title: 'Amazon', url: 'https://amazon.com' },
                        { id: '204', title: 'Netflix', url: 'https://netflix.com' }
                    ]
                }
            ]
        }
    ];
};
