import React from 'react';
import './header.css'

function Header(props) {
    return (
        <div className='header'>
            <img src='../../../img/logo.png' />
            <form>
                <input style={{textAlign:'center'}}
                    placeholder='Search'
                    type='text'
                />
            </form>
        </div>
    );
}

export default Header;