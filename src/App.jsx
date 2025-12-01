import React, { useEffect, useState } from 'react';
import { getBookmarksTree } from './utils/bookmarkService';
import BookmarkTree from './components/BookmarkTree';
import Clock from './components/Clock';
import AddBookmark from './components/AddBookmark';
import { SettingsProvider } from './context/SettingsContext';
import SettingsModal from './components/SettingsModal';
import './App.css';

function AppContent() {
  const [bookmarks, setBookmarks] = useState([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const loadBookmarks = async () => {
    const tree = await getBookmarksTree();
    setBookmarks(tree);
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-title">
          <img src="/icon.svg" alt="Logo" className="app-logo" />
          <h1>BookmarkTab</h1>
        </div>
        <div className="header-actions">
          <AddBookmark />
          <button className="settings-button" onClick={() => setIsSettingsOpen(true)}>
            ⚙️
          </button>
        </div>
      </header>
      <div className="app-main">
        <aside className="app-sidebar">
          <Clock />
        </aside>
        <main className="app-content">
          <BookmarkTree bookmarks={bookmarks} />
        </main>
      </div>
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

export default App;
