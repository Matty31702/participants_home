import React, { useState } from 'react';

interface CardSliderProps {
    cards: { title: string; description: string; image: string }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevious = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
    setCurrentIndex(index);
};

const handleNext = () => {
    const index = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
};

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {cards.map((card, index) => (
                        <div key={index} className="min-w-full p-4">
                            <div className="bg-white rounded-lg shadow-md">
                                <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold">{card.title}</h2>
                                    <p className="mt-2">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            >
                &#8594;
            </button>
        </div>
    );
};

export default CardSlider;
