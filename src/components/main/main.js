import React from 'react';
import './main.css';

function main() {
    return (
        <div className="imgList">
            <div className="left">
                <div className="box top">
                    <a href="">
                        <img src="https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg" alt=""/>
                    </a>
                </div>
                <div className="box bottom">
                    <a href="">
                        <img src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" alt=""/>
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="box">
                    <a href="">
                        <img src="https://cdn.pixabay.com/photo/2017/08/08/14/05/flowers-2611474_1280.jpg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default main;