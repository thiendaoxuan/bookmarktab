import React, { useState } from 'react';
import { flattenBookmarks } from '../utils/bookmarkUtils';

const BookmarkNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false); // Default closed for inner folders
    const hasChildren = node.children && node.children.length > 0;
    const isFolder = !node.url;

    const toggleOpen = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const getFaviconUrl = (url) => {
        try {
            const u = new URL(url);
            return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=32`;
        } catch (e) {
            return '';
        }
    };

    return (
        <div className="bookmark-node">
            <div
                className={`bookmark-item ${isFolder ? 'folder' : 'link'}`}
                onClick={isFolder ? toggleOpen : undefined}
            >
                {isFolder && (
                    <span className={`arrow ${isOpen ? 'open' : ''}`}>▶</span>
                )}
                {!isFolder && (
                    <img
                        src={getFaviconUrl(node.url)}
                        alt=""
                        className="favicon"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                )}
                {isFolder ? (
                    <span className="folder-title">{node.title}</span>
                ) : (
                    <a href={node.url} className="bookmark-link">{node.title}</a>
                )}
            </div>

            {isFolder && isOpen && hasChildren && (
                <div className="bookmark-children">
                    {node.children.map((child) => (
                        <BookmarkNode key={child.id} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const BookmarkTree = ({ bookmarks }) => {
    if (!bookmarks || bookmarks.length === 0) {
        return <div className="loading">Loading bookmarks...</div>;
    }

    const groups = flattenBookmarks(bookmarks);

    return (
        <div className="bookmark-groups-container">
            {groups.map((group) => (
                <div key={group.id} className="bookmark-group">
                    <div className="group-header">
                        <h3>{group.title}</h3>
                    </div>
                    <div className="group-items">
                        {group.children && group.children.map((child) => (
                            <BookmarkNode key={child.id} node={child} />
                        ))}
                        {(!group.children || group.children.length === 0) && (
                            <div className="empty-group">No bookmarks</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookmarkTree;
