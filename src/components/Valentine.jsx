import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FUNNY_NO_TEXTS = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Pls don't do this to me 🥺",
    "I'm gonna cry...",
    "You're breaking my heart 💔",
    "I'm already picking out outfits!",
    "Think about the chocolates 🍫",
    "Fine, I'll ask your mom instead",
    "She said yes btw",
    "Ok but like... seriously?",
    "PLEASE 🙏🙏🙏",
    "I'll learn to cook for you!",
    "I'll even watch your boring shows",
    "Last chance... 👀",
    "You're really clicking this again?",
    "My therapist warned me about this",
    "I'm running out of things to say",
    "Ok I'll just wait here then... 🧍",
];

const FloatingHeart = ({ delay, left, size, duration }) => (
    <motion.div
        className="absolute text-red-400 pointer-events-none select-none"
        style={{ left: `${left}%`, fontSize: `${size}rem`, bottom: '-10%' }}
        initial={{ y: 0, opacity: 0, rotate: 0 }}
        animate={{
            y: '-110vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, 15, -15, 0],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: 'linear',
        }}
    >
        ❤️
    </motion.div>
);

const Confetti = () => {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6eb4', '#c084fc', '#fb923c'];
    const pieces = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        duration: Math.random() * 2 + 2,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {pieces.map((piece) => (
                <motion.div
                    key={piece.id}
                    className="absolute rounded-sm"
                    style={{
                        left: `${piece.left}%`,
                        top: '-5%',
                        width: piece.size,
                        height: piece.size,
                        backgroundColor: piece.color,
                    }}
                    initial={{ y: 0, rotate: 0, opacity: 1 }}
                    animate={{
                        y: '110vh',
                        rotate: piece.rotation + 720,
                        opacity: [1, 1, 0.8, 0],
                    }}
                    transition={{
                        duration: piece.duration,
                        delay: piece.delay,
                        ease: 'easeIn',
                    }}
                />
            ))}
        </div>
    );
};

const Valentine = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const [countdown, setCountdown] = useState(null); // null = not started, 3/2/1/0 = counting
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const containerRef = useRef(null);

    useEffect(() => {
        if (countdown === null) return;
        if (countdown === 0) {
            // Use a temporary anchor to open in new tab without popup blocker
            const a = document.createElement('a');
            a.href = 'https://www.shefalisaini.com';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            return;
        }
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown]);

    const handleViewGift = () => {
        setCountdown(3);
    };

    const yesButtonSize = Math.min(noCount * 20 + 16, 80);
    const noButtonSize = Math.max(16 - noCount * 1.5, 6);

    const hearts = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: i * 1.2,
        left: Math.random() * 90 + 5,
        size: Math.random() * 1.5 + 1,
        duration: Math.random() * 6 + 6,
    }));

    const handleNoClick = () => {
        setNoCount(noCount + 1);

        // After a few clicks, make the No button run away
        if (noCount >= 3) {
            const container = containerRef.current;
            if (container) {
                const rect = container.getBoundingClientRect();
                const randomX = Math.random() * (rect.width - 100);
                const randomY = Math.random() * (rect.height - 50);
                setNoButtonStyle({
                    position: 'absolute',
                    left: `${randomX}px`,
                    top: `${randomY}px`,
                    transition: 'all 0.3s ease',
                });
            }
        }
    };

    const getNoButtonText = () => {
        return FUNNY_NO_TEXTS[Math.min(noCount, FUNNY_NO_TEXTS.length - 1)];
    };

    const getEmoji = () => {
        if (noCount === 0) return '🥰';
        if (noCount <= 2) return '🥺';
        if (noCount <= 5) return '😢';
        if (noCount <= 8) return '😭';
        if (noCount <= 12) return '💀';
        return '🫠';
    };

    if (yesPressed) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-rose-500 flex items-center justify-center relative overflow-hidden">
                <Confetti />

                {/* Background pulsing hearts */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/20 select-none pointer-events-none"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${Math.random() * 3 + 1}rem`,
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}

                <motion.div
                    className="text-center z-10 px-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                    <motion.div
                        className="text-8xl md:text-9xl mb-6"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        🎉
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        YAYYY!!
                    </motion.h1>

                  

                    <motion.p
                        className="text-lg md:text-xl text-white/70 mt-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        Now let's go get some chocolate 🍫🌹
                    </motion.p>

                    <motion.div
                        className="mt-8 flex justify-center gap-4 text-5xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {['💝', '🌹', '💘', '🧸', '💐'].map((emoji, i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* View My Gift Button */}
                    <AnimatePresence>
                        {countdown === null && (
                            <motion.button
                                className="mt-10 px-8 py-4 bg-white/20 backdrop-blur-md text-white text-xl font-bold rounded-full border-2 border-white/40 cursor-pointer shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    boxShadow: [
                                        '0 0 20px rgba(255,255,255,0.2)',
                                        '0 0 40px rgba(255,255,255,0.4)',
                                        '0 0 20px rgba(255,255,255,0.2)',
                                    ],
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                    opacity: { delay: 1.8 },
                                    y: { delay: 1.8 },
                                    boxShadow: { duration: 2, repeat: Infinity },
                                }}
                                whileHover={{ scale: 1.08, backgroundColor: 'rgba(255,255,255,0.35)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleViewGift}
                            >
                                View My Gift 🎁
                            </motion.button>
                        )}
                    </AnimatePresence>

                    {/* Countdown */}
                    <AnimatePresence>
                        {countdown !== null && countdown > 0 && (
                            <motion.div
                                className="mt-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.p
                                    className="text-white/70 text-lg mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Your gift is loading... 🥁
                                </motion.p>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={countdown}
                                        className="text-8xl md:text-9xl font-black text-white drop-shadow-lg"
                                        initial={{ scale: 3, opacity: 0, rotate: -20 }}
                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                        exit={{ scale: 0, opacity: 0, rotate: 20 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                    >
                                        {countdown}
                                    </motion.div>
                                </AnimatePresence>
                                <motion.p
                                    className="text-white/50 text-sm mt-4"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    {countdown === 3 ? "Get ready... 👀" : countdown === 2 ? "Almost there... 😍" : "HERE IT COMES! 🎉"}
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* After countdown finishes */}
                    <AnimatePresence>
                        {countdown === 0 && (
                            <motion.p
                                className="mt-10 text-white/80 text-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                🎁 Gift opened in a new tab! 💕
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0025] to-[#0d001a] flex items-center justify-center relative overflow-hidden"
        >
            {/* Floating hearts background */}
            {hearts.map((heart) => (
                <FloatingHeart key={heart.id} {...heart} />
            ))}

            {/* Ambient glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <motion.div
                className="relative z-10 text-center px-6 py-12 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Emoji face */}
                <motion.div
                    className="text-7xl md:text-8xl mb-6"
                    animate={{
                        scale: noCount > 5 ? [1, 0.9, 1] : [1, 1.1, 1],
                        rotate: noCount > 8 ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    {getEmoji()}
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-3xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    layout
                >
                    Will you be my Valentine?
                </motion.h1>

                {/* Subtitle that changes */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={noCount}
                        className="text-white/60 text-lg mb-10 min-h-[28px]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {noCount === 0
                            ? "Pretty please? 🥺👉👈"
                            : noCount <= 3
                                ? "Wrong button!! Try again 😤"
                                : noCount <= 8
                                    ? "The Yes button is RIGHT THERE ➡️"
                                    : noCount <= 14
                                        ? "I'm literally begging at this point 🧎"
                                        : "You're a menace and I love it 😩"}
                    </motion.p>
                </AnimatePresence>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative min-h-[120px]">
                    <motion.button
                        className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 cursor-pointer border-none"
                        style={{
                            fontSize: `${yesButtonSize}px`,
                            padding: `${yesButtonSize * 0.5}px ${yesButtonSize * 1.2}px`,
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setYesPressed(true)}
                        layout
                    >
                        Yes 💖
                    </motion.button>

                    <motion.button
                        className="bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full shadow-md cursor-pointer border-none hover:from-gray-500 hover:to-gray-600"
                        style={{
                            fontSize: `${noButtonSize}px`,
                            padding: `${noButtonSize * 0.5}px ${noButtonSize * 1.2}px`,
                            ...noButtonStyle,
                        }}
                        whileHover={noCount < 3 ? { scale: 1.05 } : { x: Math.random() > 0.5 ? 100 : -100 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNoClick}
                        layout
                    >
                        {getNoButtonText()}
                    </motion.button>
                </div>

                {/* Click counter (appears after 3 clicks) */}
                <AnimatePresence>
                    {noCount >= 3 && (
                        <motion.p
                            className="text-white/30 text-sm mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            you clicked no {noCount} times... the audacity 😤
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Valentine;
