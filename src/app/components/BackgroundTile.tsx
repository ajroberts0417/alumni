'use client';
import React, { useEffect, useState } from 'react';

interface BackgroundTileProps {
    tileSize?: number;
    opacity?: number;
    children?: React.ReactNode;
}

const BackgroundTile: React.FC<BackgroundTileProps> = ({
    tileSize = 350,
    children
}) => {
    const [scaledTileSize, setScaledTileSize] = useState(tileSize);
    const [imageLoaded, setImageLoaded] = useState(false);

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

        // Check if image exists
        const img = new Image();
        img.onload = () => {
            console.log('Background image loaded successfully');
            setImageLoaded(true);
        };
        img.onerror = () => {
            console.error('Failed to load background image');
        };
        img.src = '/img/bghd.png';

        return () => window.removeEventListener('resize', handleResize);
    }, [tileSize]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* The tiled background */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(/img/bghd.png)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: `${scaledTileSize}px ${scaledTileSize}px`,
                    opacity: 1,
                }}
            />

            {/* Removed the black overlay completely */}            {/* Content overlay for readability - reduced opacity */}
            <div className="fixed inset-0 z-10 bg-black opacity-30 pointer-events-none" />

            {/* Actual content */}
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
};

export default BackgroundTile; 