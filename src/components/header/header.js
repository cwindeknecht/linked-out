import React from 'react';
import './header.css';
import logo from '../../img/logo.png';
import home from '../../img/home.png';
import job from '../../img/job.png';
import me from '../../img/me.png';
import message from '../../img/message.png';
import my from '../../img/my.png';
import notification from '../../img/notification.png';

function Header(props) {
    return (
        <div className='header'>
            <img className='logo' src={logo}/>
            <form>
                <input style={{textAlign:'center', margin:'5px'}}
                    placeholder='Search'
                    type='text'
                />
            </form>
            <img className='link' src={home}/>
            <img className='link' src={my}/>
            <img className='link' src={job}/>
            <img className='link' src={message}/>
            <img className='link' src={notification}/>
            <img className='link' src={me}/>
        </div>
    );
}

export default Header;