
import React, { useContext, useEffect } from 'react';
import Avatar from '../assets/Avatar1.png';
import { User, Edit3, BarChart, Settings, Home } from 'react-feather';
import { GlobalContext } from "../context/GlobalState";
import './Navbar.scss';

function Navbar() {
    const {
        updateScreen
    } = useContext(GlobalContext);

    useEffect(() => {

    });

    const navLink = [
        {
            id: 1,
            name: 'Home',
            url: '/home',
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

    function findIcon(url) {
        if (url == "/lessons") {
            return <Edit3 />;
        } else if (url == "/progress") {
            return <BarChart />;
        } else if (url == "/settings") {
            return <Settings />;
        } else if (url === "/home") {
            return <Home />;
        }
    }

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
                    <div className="navLink" onClick={() => { updateScreen(link.name); window.location = link.url }} >
                        {window.location.href.includes(link.url) && findIcon(link.url)}
                        <div className="linkName">{link.name}</div>
                    </div>)}
            </div>

        </div>
    )
}

export default Navbar;
