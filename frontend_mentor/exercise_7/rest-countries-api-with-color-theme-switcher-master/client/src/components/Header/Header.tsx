import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    const [mode, setMode] = useState(true);

    const toggleTheme = (): void => {
        if (mode) {
            document.documentElement.classList.add('dark');
            setMode(current => current = !current);
        }
        if (!mode) {
            document.documentElement.classList.remove('dark');
            setMode(current => current = !current);
        }
    }

    return (
        <nav className="bg-white font-bold py-2 md:py-4 shadow-md dark:bg-gray-700 dark:text-white">
            <div className="container px-4 mx-auto flex justify-between items-center">
                <div>
                    <h1><Link to="/">Where in the world?</Link></h1>
                </div>

                <div>
                    <p onClick={toggleTheme} className="cursor-pointer select-none"><i style={{ marginRight: "1rem" }} className="fas fa-moon"></i>Dark mode</p>
                </div>
            </div>
        </nav>
    )
}

export default Header;
