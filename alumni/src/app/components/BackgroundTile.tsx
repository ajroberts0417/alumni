import React, { useEffect, useState } from 'react';
// Removed image import: import bghdImage from '../img/bghd.png';

interface BackgroundTileProps {
    tileSize?: number;
    opacity?: number;
    children?: React.ReactNode;
}

const BackgroundTile: React.FC<BackgroundTileProps> = ({
    tileSize = 350,
    opacity = 0.9,
    children
}) => {
    // Add 'use client' directive
    'use client';

    const [scaledTileSize, setScaledTileSize] = useState(tileSize);

    // Adjust tile size based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) { // Small screens
                setScaledTileSize(tileSize / 1.5);
            } else if (width < 1024) { // Medium screens
                setScaledTileSize(tileSize * 0.85);
            } else { // Large screens
                setScaledTileSize(tileSize);
            }
        };

        handleResize(); // Initial setup
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [tileSize]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* The tiled background */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(/img/bghd.png)', // Updated path
                    backgroundRepeat: 'repeat',
                    backgroundSize: `${scaledTileSize}px ${scaledTileSize}px`,
                    opacity: opacity,
                }}
            />

            {/* Content overlay for readability - reduced opacity */}
            <div className="fixed inset-0 z-10 bg-black bg-opacity-65 pointer-events-none" />

            {/* Removed grid pattern overlay */}

            {/* Actual content */}
            <div className="relative z-30">
                {children}
            </div>
        </div>
    );
};

export default BackgroundTile; 