"use client"
import React, {useState} from 'react';
import {Check, HeartCrack, Heart} from "lucide-react";

export const ValentinesPage = () => {
    const [position, setPosition] = useState({x:0,y:0});
    const [count, setCount] = useState(0);
    const [stage, setStage] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [hearts, setHearts] = useState([]);

    const messages = [
        "will you be my Valentine?",
        "are you really sure you wanna say no? 🥺",
        "really really sure? 😢",
        "i'm gonna cry.. 😭",
        "pretty pleaseeeee? 😿",
        "don't go breaking my heartttt ;-;",
        "WAAAAAAAAAAA ;-;",
        "i won't give upppppp >.<",
        "i'll keep asking >:C",
        "please? please? pleaseeee?",
        "MEANIEEEEEE 😭",
        "i'm gonna haunt you tonight 😼"
    ];


    const moveButton = () => {
        const newX = Math.random() * (window.innerWidth / 2) - 100;
        const newY = Math.random() * (window.innerHeight / 2) - 100;
        setPosition({x: newX,y: newY});
        setCount(prev => prev + 1);
        setStage(prev => Math.min(prev + 1, messages.length - 1));
        // addHeart({x: newX,y: newY});
    }

    // const addHeart = ({x, y} : {x: number, y: number}) => {
    //     const newHeart = {
    //         id: Date.now(),
    //         x: x,
    //         y: y,
    //         color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
    //     };
    //     setHearts(prev => [...prev, newHeart]);
    //
    // }

    const handleYes = () => {
        setStage(messages.length)
        setShowConfetti(true)
    }

    const getNoButtonSize = () => {
        // const baseSize = "text-lg";
        const sizes = [
            "text-lg",
            "text-base",
            "text-sm",
            "text-xs"
        ]
        return sizes[Math.min(count, sizes.length - 1)];
    }

    const getYesButtonSize = () => {
        const sizes = [
            "text-lg",
            "text-xl",
            "text-2xl",
            "text-3xl"
        ]
        return sizes[Math.min(count, sizes.length - 1)];
    }

    const successMessages = [
        "yayyyy!! I knew you'd say yes~ 🩷",
        "you made me the happiest person EVERRR~",
        "so.. where are you taking me to for Valentine's Day? :3"
    ]

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4">
            {showConfetti && (
                <div className="fixed inset-0 z-50">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-confetti"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-5%`,
                                animationDelay: `${Math.random() * 3}s`,
                                backgroundColor: ['#ff69b4', '#ff1493', '#ff69b4', '#dda0dd'][Math.floor(Math.random() * 4)]
                            }}
                        />
                    ))}
                </div>
            )}
            <div
                className="md:max-w-[600px] w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl text-center p-8 font-indie">
                {(stage === messages.length) ? (
                    <div className="space-y-6">
                        <div className="text-4xl">🎊✨💖🎊</div>
                        <h1 className="text-3xl font-bold text-pink-400">{successMessages[0]}</h1>
                        <h1 className="text-2xl font-bold text-gray-600">{successMessages[1]}</h1>
                        <h1 className="text-1xl font-bold text-gray-500">{successMessages[2]}</h1>
                        <Heart className="w-20 h-20 text-pink-400 mx-auto animate-bounce"/>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <h1 className="text-pink-600 text-3xl font-bold mb-8">
                            {messages[stage]}
                        </h1>
                        <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={handleYes}
                                className={`${getYesButtonSize()} px-8 py-4 bg-pink-500 text-white rounded-full transform hover:scale-110 transition-all hover:bg-pink-600 shadow-lg`}>
                                Yes <Check className="inline ml-2"/>
                            </button>
                            <button
                                onClick={moveButton}
                                onMouseEnter={moveButton}
                                className={`${getNoButtonSize()} px-8 py-4 bg-gray-300 text-white rounded-full hover:bg-gray-600 shadow-lg transition-all`}
                                style={{
                                    transform: `translate(${position.x}px,${position.y}px)`,
                                    transition: 'all 0.2s ease'
                                }}>
                                No <HeartCrack className="inline ml-2"/>
                            </button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};