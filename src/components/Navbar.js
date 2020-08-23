import React, { Component } from 'react';
import Avatar from '../assets/Avatar1.png';
import { User } from 'react-feather';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        const { location: { window.location.pathname } } = this.props;

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
                name: 'Progress',
                url: '',  // TBD
            }, {
                id: 4,
<<<<<<< HEAD
                name: '????',
=======
                name: 'Settings',
>>>>>>> almost done nav bar
                url: '',  // TBD
            },


        ]


        return (
            <div className="background">
                {console.log(pathname)}
                <img src={Avatar} id="avatar" alt="AvatarIcon"></img>
                <div className="profileButton">
                    <User size={16} style={{ paddingRight: '6px' }} />
                    Profile
                    </div>
                <div id="navLine"></div>
                <div className="navigationStack">
                    {navLink.map((link) =>
                        <div className="navLink" key={link.name} onClick={() => window.location = link.url} > {link.name}</div>)}
                </div>
            </div >
        )
    }
}


export default Navbar;