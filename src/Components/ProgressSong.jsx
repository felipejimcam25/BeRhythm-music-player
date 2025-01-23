import React from 'react';

// Componente Progress
const Progress = ({ color, percentage, size, strokeWidth }) => {
    const lineLength = size - 20;
    const strokePct = (percentage / 100) * lineLength;

    return (
        <svg width={size} height={20}>
            {/* Línea de fondo (base) */}
            <line
                x1={10}
                y1={10}
                x2={size - 10}
                y2={10}
                stroke="#fff"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            {/* Línea de progreso */}
            <line
                x1={10}
                y1={10}
                x2={10 + strokePct}
                y2={10}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};

// Componente ProgressSong
export default function ProgressSong({ percentage, isPlaying, image, size = 300, color = '#00AFFF' }) {
    return (
        <div>
            <Progress
                color={color}
                percentage={percentage}
                size={size}
                strokeWidth={5}
            />
        </div>
    );
}
