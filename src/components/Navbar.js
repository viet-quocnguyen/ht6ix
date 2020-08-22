import React, { Component } from 'react';
import Avatar from '../assets/Avatar.png';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        const navLink = [
            {
                name: 'Home',
                url: '/',
            }, {
                id: 2,
                name: 'Lessons',
                url: '/lessons',
            }, {
                id: 3,
                name: '???',
                url: '',  // TBD
            }, {
                id: 4,
                name: '????',
                url: '',  // TBD
            },


        ]

        return (
            <div className="background">
                <div className="navigationStack">
                    <img src={Avatar} id="avatar" alt="AvatarIcon"></img>
                    {navLink.map((link) =>
                        <div className="navLink" key={link.name} onClick={() => window.location = link.url} > {link.name}</div>)}
                </div>
            </div >
        )
    }
}


export default Navbar;