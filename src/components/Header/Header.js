import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            menuOpen: false
        }
    }
    toggleMenu = () => {
        const { menuOpen } = this.state;
        menuOpen ?
            this.setState({ menuOpen: false })
            : this.setState({ menuOpen: true })
    }
    render() {
        return (
            <div className='header-cont'>
                <div>
                    <h1>DevHats</h1>
                    <i onClick={this.toggleMenu} className='material-icons'>menu</i>
                </div>
                {
                    this.state.menuOpen ?
                        (
                            <nav>
                                <div>
                                    <p>Login / Register</p>
                                    <p>Cart</p>
                                </div>
                            </nav>
                        ) : null
                }

            </div>
        )
    }
}