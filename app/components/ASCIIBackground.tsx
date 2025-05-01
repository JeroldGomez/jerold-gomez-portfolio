// src/components/AsciiBackground.tsx
'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise'; // Use 3D noise for better flow over time
// .,:;-=+#0&$%@
// --- Configuration ---
const CHARACTER_SET = '.,:;-+=08#&$%@'; // Characters from sparse to dense (adjust!)
// Or try different sets: ' .,:;i1tfLCG08@' or just binary ' #' etc.
const CELL_SIZE = 16;        // Pixel size of each grid cell
const FONT_SIZE = 16;        // Font size in pixels (should be close to CELL_SIZE)
const NOISE_ZOOM = 0.03;     // Lower = larger noise patterns (more 'zoomed out')
const NOISE_SPEED = 0.03;    // How fast the noise pattern evolves
const OPACITY_MULTIPLIER = 0.9; // Overall opacity adjustment (0 to 1)
const BACKGROUND_COLOR = '#0a0a0a'; // Slightly off-black can look nice
// const CHARACTER_COLOR = 'rgba(0, 255, 100, '; // Base color (greenish), alpha added later
const CHARACTER_COLOR = 'rgba(0, 119, 182, '; 

const AsciiBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | undefined>(undefined);
    // Initialize noise function - createNoise3D returns a function noise3D(x, y, z)
    const noise3D = useRef(createNoise3D());

    // --- Drawing Function ---
    const draw = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas with background color

        ctx.font = `${FONT_SIZE}px monospace`; // Use a monospace font for grid alignment
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const cols = Math.ceil(ctx.canvas.width / CELL_SIZE);
        const rows = Math.ceil(ctx.canvas.height / CELL_SIZE);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * CELL_SIZE;
                const y = j * CELL_SIZE;

                // Get noise value for this cell position and time
                // noise3D returns a value roughly between -1 and 1
                const noiseVal = noise3D.current(i * NOISE_ZOOM, j * NOISE_ZOOM, time * NOISE_SPEED);

                // Map noise value from [-1, 1] to [0, 1]
                const normalizedNoise = (noiseVal + 1) / 2;

                // Map normalized noise to an index in the character set
                const charIndex = Math.min(
                    Math.floor(normalizedNoise * CHARACTER_SET.length),
                    CHARACTER_SET.length - 1 // Ensure index stays within bounds
                );
                const character = CHARACTER_SET[charIndex];

                // Map noise to opacity (optional: make brighter areas more opaque)
                // Squaring the noise value can increase contrast
                const opacity = normalizedNoise * normalizedNoise * OPACITY_MULTIPLIER;

                // Set color with calculated opacity
                ctx.fillStyle = `${CHARACTER_COLOR}${opacity})`;

                // Draw the character centered in the cell
                ctx.fillText(character, x + CELL_SIZE / 2, y + CELL_SIZE / 2);
            }
        }
    }, []); // No dependencies needed here as noise function instance is stable via useRef

    // --- Effect for Setup and Animation Loop ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let frameCount = 0; // Use frame count or Date.now() for time

        const resizeCanvas = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio; // Adjust for device pixel ratio
            canvas.height = window.innerHeight * window.devicePixelRatio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
             // Clear/redraw immediately after resize if needed, otherwise the loop will handle it
             // const currentTime = performance.now() / 1000; // Get time in seconds
             // draw(ctx, currentTime);
        };

        const render = () => {
             // Using performance.now() for smoother time progression
             const currentTime = performance.now() / 1000; // Convert ms to seconds
             draw(ctx, currentTime);
             animationFrameRef.current = requestAnimationFrame(render);
        };

        // Initial setup
        resizeCanvas(); // Set initial size considering pixel ratio
        render();       // Start animation loop

        // Add resize listener
        window.addEventListener('resize', resizeCanvas);

        // Cleanup function
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
     }, [draw]); // Include draw in dependency array (useCallback ensures stability)

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                display: 'block',
                // Width/height styles are set in JS now for pixel ratio handling
            }}
        />
    );
};

export default AsciiBackground;