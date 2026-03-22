import React, { memo, useEffect, useState } from 'react';

export const Snowfall = memo(() => {
  const [flakes, setFlakes] = useState<Array<{ id: number; left: number; duration: number; delay: number; opacity: number; size: number }>>([]);

  useEffect(() => {
    const count = 50;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.2,
      size: Math.random() * 0.3 + 0.1
    }));
    setFlakes(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0); }
          50% { transform: translateY(55vh) translateX(20px); }
          100% { transform: translateY(110vh) translateX(-20px); }
        }
        .snowflake {
          animation: snowfall linear infinite;
          will-change: transform;
        }
      `}</style>
      {flakes.map((f) => (
        <div
          key={f.id}
          className="snowflake absolute top-0 bg-white rounded-full blur-[1px]"
          style={{
            left: `${f.left}%`,
            width: `${f.size}rem`,
            height: `${f.size}rem`,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `-${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
});