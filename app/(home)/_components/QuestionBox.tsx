import React from 'react';
import {Check} from "lucide-react";

const QuestionBox = () => {
    const messages = [
        "Will you be my valentine?"
    ];

    return (
        <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl text-center">
            <h1 className="space-y-6 text-pink-600 font-dancing text-3xl font-bold mb-8">
                {messages[0]}
            </h1>
            <div className="flex fleex-col items-center justify-center">
                <button className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 shadow-lg">
                    Yes <Check className="inline ml-2" />
                </button>
                <button className="px-8 py-4 bg-gray-300 text-white rounded-full hover:bg-gray-600 shadow-lg">

                </button>
            </div>
        </div>
    );
};

export default QuestionBox;