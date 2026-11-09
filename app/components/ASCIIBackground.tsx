'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise';

const CHARACTER_SET = '.,:;-+=08#&$%@';
const CELL_SIZE = 16;
const MOBILE_CELL_SIZE = 24;
const FONT_SIZE = 16;
const NOISE_ZOOM = 0.03;
const NOISE_SPEED = 0.03;
const OPACITY_MULTIPLIER = 0.9;
const BACKGROUND_COLOR = '#0a0a0a';
const OPACITY_LEVELS = Array.from({ length: 32 }, (_, index) =>
    `rgba(0, 119, 182, ${(index / 31) * OPACITY_MULTIPLIER})`
);
const MAX_PIXEL_RATIO = 1.5;
const FRAME_INTERVAL = 1000 / 30;

const AsciiBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | undefined>(undefined);
    const noise3D = useRef(createNoise3D());

    const draw = useCallback((
        ctx: CanvasRenderingContext2D,
        time: number,
        width: number,
        height: number,
        cellSize: number
    ) => {
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${FONT_SIZE}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * cellSize;
                const y = j * cellSize;
                const noiseVal = noise3D.current(i * NOISE_ZOOM, j * NOISE_ZOOM, time * NOISE_SPEED);
                const normalizedNoise = (noiseVal + 1) / 2;
                const charIndex = Math.min(
                    Math.floor(normalizedNoise * CHARACTER_SET.length),
                    CHARACTER_SET.length - 1
                );
                const opacityLevel = Math.round(normalizedNoise * normalizedNoise * 31);

                ctx.fillStyle = OPACITY_LEVELS[opacityLevel];
                ctx.fillText(CHARACTER_SET[charIndex], x + cellSize / 2, y + cellSize / 2);
            }
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const mobileViewport = window.matchMedia('(max-width: 767px)');
        let pixelRatio = 1;
        let lastFrameTime = 0;

        const resizeCanvas = () => {
            pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
            canvas.width = Math.round(window.innerWidth * pixelRatio);
            canvas.height = Math.round(window.innerHeight * pixelRatio);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        };

        const drawFrame = (time: number) => {
            draw(
                ctx,
                time,
                window.innerWidth,
                window.innerHeight,
                mobileViewport.matches ? MOBILE_CELL_SIZE : CELL_SIZE
            );
        };

        const render = (timestamp: number) => {
            if (timestamp - lastFrameTime >= FRAME_INTERVAL) {
                lastFrameTime = timestamp;
                drawFrame(timestamp / 1000);
            }
            animationFrameRef.current = requestAnimationFrame(render);
        };

        const startAnimation = () => {
            if (
                !reducedMotion.matches &&
                document.visibilityState === 'visible' &&
                animationFrameRef.current === undefined
            ) {
                animationFrameRef.current = requestAnimationFrame(render);
            }
        };

        const stopAnimation = () => {
            if (animationFrameRef.current !== undefined) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = undefined;
            }
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                startAnimation();
            } else {
                stopAnimation();
            }
        };

        const handleMotionPreferenceChange = () => {
            stopAnimation();
            if (reducedMotion.matches) {
                drawFrame(performance.now() / 1000);
            } else {
                startAnimation();
            }
        };

        const handleResize = () => {
            resizeCanvas();
            if (reducedMotion.matches) {
                drawFrame(performance.now() / 1000);
            }
        };

        resizeCanvas();
        drawFrame(performance.now() / 1000);
        startAnimation();
        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        reducedMotion.addEventListener('change', handleMotionPreferenceChange);

        return () => {
            stopAnimation();
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            reducedMotion.removeEventListener('change', handleMotionPreferenceChange);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                pointerEvents: 'none',
                display: 'block',
            }}
        />
    );
};

export default AsciiBackground;
