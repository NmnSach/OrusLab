import React from 'react';
import './timeline.css';

const Timeline = () => {
    return (
        <div className="timeline-container mt-20">

            <ul>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#41516C" }}>
                    <div className="date">2002</div>
                    <div className="title">Title 1</div>
                    <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div>
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#FBCA3E" }}>
                    <div className="date">2007</div>
                    <div className="title">Title 2</div>
                    <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#E24A68" }}>
                    <div className="date">2012</div>
                    <div className="title">Title 3</div>
                    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#1B5F8C" }}>
                    <div className="date">2017</div>
                    <div className="title">Title 4</div>
                    <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#4CADAD" }}>
                    <div className="date">2022</div>
                    <div className="title">Title 5</div>
                    <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                </li>
            </ul>
        </div>
    )
}

export default Timeline;
