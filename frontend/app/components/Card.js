import React, { useState } from 'react';
import { urlFor } from '../client';

const Card = ({ title, image, year, description }) => {
    const maxWords = 75;
    const words = description.split(' ');
    const [showFullText, setShowFullText] = useState(false);

    const truncatedDescription = words.length > maxWords
        ? words.slice(0, maxWords).join(' ') + '... '
        : description;

    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-md bg-white">
            {image && (
                <img
                    src={urlFor(image).url()}
                    alt={title}
                    className="w-full h-64 mb-4 object-cover rounded-t-lg"
                />
            )}
            <h2 className="text-2xl mb-2">{title}</h2>
            <h3 className="text-md font-semibold mb-2">{year}</h3>
            <div className="relative">
                <p
                    className={`text-base mb-2 ${showFullText ? 'max-h-none' : 'max-h-[4.5em] overflow-hidden'}`}
                >
                    {showFullText ? description : truncatedDescription}
                </p>
                {words.length > maxWords && (
                    <span
                        className="text-blue-500 cursor-pointer absolute underline bottom-0 right-0 bg-white"
                        onClick={() => setShowFullText(!showFullText)}
                    >
                        {showFullText ? 'Show less' : 'Read more'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Card;
