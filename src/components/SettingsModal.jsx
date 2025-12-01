import React from 'react';
import { useSettings } from '../context/SettingsContext';

const SettingsModal = ({ isOpen, onClose }) => {
    const { theme, setTheme, alignment, setAlignment, density, setDensity } = useSettings();

    if (!isOpen) return null;

    return (
        <div className="settings-modal-backdrop" onClick={onClose}>
            <div className="settings-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="settings-header">
                    <h2>Settings</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <div className="settings-section">
                    <h3>Theme</h3>
                    <div className="settings-options">
                        <button
                            className={`settings-option ${theme === 'system' ? 'active' : ''}`}
                            onClick={() => setTheme('system')}
                        >
                            System
                        </button>
                        <button
                            className={`settings-option ${theme === 'light' ? 'active' : ''}`}
                            onClick={() => setTheme('light')}
                        >
                            Light
                        </button>
                        <button
                            className={`settings-option ${theme === 'dark' ? 'active' : ''}`}
                            onClick={() => setTheme('dark')}
                        >
                            Dark
                        </button>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Alignment</h3>
                    <div className="settings-options">
                        <button
                            className={`settings-option ${alignment === 'left' ? 'active' : ''}`}
                            onClick={() => setAlignment('left')}
                        >
                            Left
                        </button>
                        <button
                            className={`settings-option ${alignment === 'center' ? 'active' : ''}`}
                            onClick={() => setAlignment('center')}
                        >
                            Center
                        </button>
                        <button
                            className={`settings-option ${alignment === 'right' ? 'active' : ''}`}
                            onClick={() => setAlignment('right')}
                        >
                            Right
                        </button>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Density</h3>
                    <div className="settings-options">
                        <button
                            className={`settings-option ${density === 'normal' ? 'active' : ''}`}
                            onClick={() => setDensity('normal')}
                        >
                            Normal
                        </button>
                        <button
                            className={`settings-option ${density === 'compact' ? 'active' : ''}`}
                            onClick={() => setDensity('compact')}
                        >
                            Compact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
