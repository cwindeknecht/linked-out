import React from 'react';
import './header.css'

function Header(props) {
    return (
        <div className='header'>
            <form>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default Header;