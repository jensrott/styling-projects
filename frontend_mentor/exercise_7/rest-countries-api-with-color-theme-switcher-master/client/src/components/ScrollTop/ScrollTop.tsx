import React from 'react';

const ScrollTopButton = () => {
    const scrollTop = () => {
        return window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }

    return (
        <div className="fixed bg-red" style={{ position: 'fixed', bottom: '7.5%', right: '5%' }}>
            <button className="w-12 h-12 border-none rounded-full bg-white shadow-md focus:outline-none cursor-pointer 
            dark:bg-gray-700 dark:text-white" onClick={scrollTop}>
                <i className="fas fa-arrow-up text-black"></i>
            </button>
        </div>
    )
}

export default ScrollTopButton