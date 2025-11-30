# BookmarkTab

A Chrome extension that replaces your new tab page with an organized bookmark view.

## Demo

![BookmarkTab Demo](image_demo.png)

*Organize your bookmarks with nested folders, dark mode, and a clean interface*


## Features

- **Modern Bookmark Layout**:
    - Top-level folders from the "Bookmarks Bar" are displayed as distinct groups.
    - Loose bookmarks in the "Bookmarks Bar" are grouped together.
    - "Other Bookmarks" are shown in a separate group, but only if they contain items.
- **Dark Mode**: Automatic dark mode support based on system preference.
- **Performance**: Fast loading with optimized rendering.

## Installation

### From Chrome Web Store
Coming soon - extension is currently in review.

### Manual Installation
1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Open Chrome and go to `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist` folder

## Development

```bash
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Build for production
```

## Tech Stack

- React + Vite
- Chrome Extension APIs
- CSS Variables for theming

## Privacy

BookmarkTab does not collect or transmit any data. All bookmark information stays on your device.

## License

MIT

---



