import React from 'react';

const TopBar = () => {
    return (
        <div className='topBar'>
            <ul className='topBarUL'>
                <li className='topBarLI'><i class="fa-solid fa-euro-sign"></i></li>
                <li className='topBarLI'><i class="fa-solid fa-language"></i></li>
                <li className='topBarLI'><i class="fa-solid fa-message"></i></li>
                <li className='topBarLI'><i class="fa-solid fa-cart-shopping"></i></li>
                <li className='topBarLI'><i class="fa-solid fa-user"></i></li>
            </ul>
        </div>
    );
};

export default TopBar;