import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState({});

    const toggleSection = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="sidebar">
            <h2 onClick={() => toggleSection('section1')}>Section 1</h2>
            {isOpen.section1 && <div className="content">Content for Section 1</div>}

            <h2 onClick={() => toggleSection('section2')}>Section 2</h2>
            {isOpen.section2 && <div className="content">Content for Section 2</div>}

            <h2 onClick={() => toggleSection('section3')}>Section 3</h2>
            {isOpen.section3 && <div className="content">Content for Section 3</div>}
        </div>
    );
};

export default Sidebar;