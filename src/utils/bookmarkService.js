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
                                },
                                {
                                    id: '1046',
                                    title: 'Backend',
                                    children: [
                                        { id: '10461', title: 'Node.js', url: 'https://nodejs.org' },
                                        { id: '10462', title: 'Express', url: 'https://expressjs.com' },
                                        { id: '10463', title: 'MongoDB', url: 'https://www.mongodb.com' },
                                        { id: '10464', title: 'PostgreSQL', url: 'https://www.postgresql.org' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '105',
                            title: 'Productivity',
                            children: [
                                { id: '1051', title: 'Notion', url: 'https://notion.so' },
                                { id: '1052', title: 'Trello', url: 'https://trello.com' },
                                { id: '1053', title: 'Slack', url: 'https://slack.com' },
                                {
                                    id: '1054',
                                    title: 'Design',
                                    children: [
                                        { id: '10541', title: 'Dribbble', url: 'https://dribbble.com' },
                                        { id: '10542', title: 'Behance', url: 'https://behance.net' },
                                        { id: '10543', title: 'Awwwards', url: 'https://awwwards.com' },
                                        {
                                            id: '10544',
                                            title: 'Resources',
                                            children: [
                                                { id: '105441', title: 'Unsplash', url: 'https://unsplash.com' },
                                                { id: '105442', title: 'Pexels', url: 'https://pexels.com' },
                                                { id: '105443', title: 'Font Awesome', url: 'https://fontawesome.com' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { id: '106', title: 'YouTube', url: 'https://youtube.com' },
                        { id: '107', title: 'Twitter', url: 'https://twitter.com' }
                    ]
                },
                {
                    id: '2',
                    title: 'Other Bookmarks',
                    children: [
                        {
                            id: '201',
                            title: 'Learning',
                            children: [
                                { id: '2011', title: 'Coursera', url: 'https://coursera.org' },
                                { id: '2012', title: 'Udemy', url: 'https://udemy.com' },
                                { id: '2013', title: 'freeCodeCamp', url: 'https://freecodecamp.org' },
                                {
                                    id: '2014',
                                    title: 'Documentation',
                                    children: [
                                        { id: '20141', title: 'DevDocs', url: 'https://devdocs.io' },
                                        { id: '20142', title: 'W3Schools', url: 'https://w3schools.com' },
                                        { id: '20143', title: 'CSS-Tricks', url: 'https://css-tricks.com' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '202',
                            title: 'Entertainment',
                            children: [
                                { id: '2021', title: 'Netflix', url: 'https://netflix.com' },
                                { id: '2022', title: 'Spotify', url: 'https://spotify.com' },
                                { id: '2023', title: 'Twitch', url: 'https://twitch.tv' },
                                {
                                    id: '2024',
                                    title: 'Gaming',
                                    children: [
                                        { id: '20241', title: 'Steam', url: 'https://store.steampowered.com' },
                                        { id: '20242', title: 'Epic Games', url: 'https://epicgames.com' },
                                        {
                                            id: '20243',
                                            title: 'News',
                                            children: [
                                                { id: '202431', title: 'IGN', url: 'https://ign.com' },
                                                { id: '202432', title: 'GameSpot', url: 'https://gamespot.com' },
                                                { id: '202433', title: 'Polygon', url: 'https://polygon.com' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '203',
                            title: 'Shopping',
                            children: [
                                { id: '2031', title: 'Amazon', url: 'https://amazon.com' },
                                { id: '2032', title: 'eBay', url: 'https://ebay.com' },
                                {
                                    id: '2033',
                                    title: 'Tech',
                                    children: [
                                        { id: '20331', title: 'Newegg', url: 'https://newegg.com' },
                                        { id: '20332', title: 'Best Buy', url: 'https://bestbuy.com' },
                                        { id: '20333', title: 'B&H Photo', url: 'https://bhphotovideo.com' }
                                    ]
                                }
                            ]
                        },
                        { id: '204', title: 'Reddit', url: 'https://reddit.com' },
                        { id: '205', title: 'LinkedIn', url: 'https://linkedin.com' }
                    ]
                }
            ]
        }
    ];
};
