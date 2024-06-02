// components/Card.js
import React from 'react';
import { urlFor } from '../client';

const Card = ({ title, image, subtitle, description, timestamp }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-md">
            <h2 className="text-2xl mb-2">{title}</h2>
            {image && (
                <img
                    src={urlFor(image).url()}
                    alt={title}
                    className="w-full h-64 mb-4 object-cover"
                />
            )}
            <h3 className="text-xl mb-2">{subtitle}</h3>
            <p className="text-base mb-2">{description}</p>
            <time className="text-sm text-gray-600">{new Date(timestamp).toLocaleDateString()}</time>
        </div>
    );
};

export default Card;
