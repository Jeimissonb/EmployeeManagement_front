import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.instagram.com/jeimiboy/" className="navbar-brand">Employee management app</a> </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;