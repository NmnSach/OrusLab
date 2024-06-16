"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../client';
import Card from './Card';

const CompletedProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const query = `*[_type == "completedProjects"]`;
            try {
                const result = await client.fetch(query);
                setProjects(result);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Card
                        key={project._id}
                        title={project.title}
                        image={project.image}
                        year={project.year}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompletedProjects;
