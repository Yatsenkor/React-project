import React from 'react';
import './app-header.css';

const AppHeader = props =>{
    console.log(props)
    return (
        <div className="app-header d-flex">
            <h1>
                Yatsenko Rimma
            </h1>
            <h2>
                {props.allPosts} записей, из них понравилось {props.liked}
            </h2>
        </div>
    )
}

export  default AppHeader;