
import React, { Component } from 'react';
import Avatar from '../assets/Avatar1.png';
import { User, Edit3, BarChart, Settings, Home } from 'react-feather';
import './Navbar.scss';

class Navbar extends Component {
    render() {

        const navLink = [
            {
                id: 1,
                name: 'Home',
                url: '/',
            }, {
                id: 2,
                name: 'Lessons',
                url: '/lessons',
            }, {
                id: 3,
                name: 'Progress',
                url: '/progress',
            }, {
                id: 4,
                name: 'Settings',
                url: '/settings',
            },
        ]

        return (
            <div className="background">
                <img src={Avatar} id="avatar" alt="AvatarIcon"></img>
                <div className="profileButton">
                    <User size={16} style={{ paddingRight: '6px' }} />
                    Profile
                    </div>
                <div id="navLine"></div>
                <div className="navigationStack">
                    {navLink.map((link) =>
                        <div className="navLink" onClick={() => window.location = link.url} >
                            {window.location.pathname === link.url && link.id === Number('1') && <Home />}
                            {window.location.pathname === link.url && link.id === Number('2') && <Edit3 />}
                            {window.location.pathname === link.url && link.id === Number('3') && <BarChart />}
                            {window.location.pathname === link.url && link.id === Number('4') && <Settings />}
                            <div className="linkName">{link.name}</div>
                        </div>)}
                </div>

            </div>
        )
    }
}

export default Navbar;
