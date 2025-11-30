/**
 * Flattens the bookmark tree for display.
 * 
 * Logic:
 * 1. Identify "Bookmarks Bar" (id '1') and "Other Bookmarks" (id '2').
 * 2. Extract all sub-folders of "Bookmarks Bar" as independent groups.
 * 3. Collect any loose bookmarks in "Bookmarks Bar" into a preserved "Bookmarks Bar" group.
 * 4. Include "Other Bookmarks" as a group only if it has children.
 * 
 * @param {Array} bookmarks - The raw bookmark tree from chrome.bookmarks.getTree()
 * @returns {Array} - The flattened list of groups for display.
 */
export const flattenBookmarks = (bookmarks) => {
    if (!bookmarks || bookmarks.length === 0) {
        return [];
    }

    // Find the root node (usually id '0')
    const rootNode = bookmarks.find(b => b.id === '0') || bookmarks[0];

    // Process groups
    const groups = [];

    if (rootNode && rootNode.children) {
        // 1. Handle Bookmarks Bar (usually id '1')
        const bookmarksBar = rootNode.children.find(c => c.id === '1');
        if (bookmarksBar && bookmarksBar.children) {
            // Separate folders and loose bookmarks
            const folders = bookmarksBar.children.filter(c => !c.url && c.children);
            const looseBookmarks = bookmarksBar.children.filter(c => c.url || !c.children);

            // Add loose bookmarks as the first group "Bookmarks Bar"
            if (looseBookmarks.length > 0) {
                groups.push({
                    ...bookmarksBar,
                    children: looseBookmarks,
                    title: 'Bookmarks Bar' // Ensure title is set
                });
            }

            // Add folders as top-level groups
            folders.forEach(folder => {
                groups.push(folder);
            });
        }

        // 2. Handle Other Bookmarks (usually id '2')
        const otherBookmarks = rootNode.children.find(c => c.id === '2');
        if (otherBookmarks && otherBookmarks.children && otherBookmarks.children.length > 0) {
            groups.push(otherBookmarks);
        }
    }

    return groups;
};
