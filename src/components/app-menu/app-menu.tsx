import * as React from 'react';
import './app-menu.css';

export const AppMenu = () => {
    const content =  false
        ? <div>Menu</div>
        : <i className="far fa-user-circle"></i>
    return (
        <span className="App-menu">
            { content }
        </span>
    )

}