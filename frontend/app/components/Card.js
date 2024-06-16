// components/Card.js
import React from 'react';
import { urlFor } from '../client';

const Card = ({ title, image, year, description }) => {
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
            <p className="text-base mb-2">{description}</p>
        </div>
    );
};

export default Card;
