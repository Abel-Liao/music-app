import React from 'react'
import IconFun from '../iconFun/iconFun'
function PlayerHeader(props){
    return (
        <div className="player-title">
            <IconFun 
                spanClass="player-return" 
                handleClickIcon={props.handleClickReturn}
                iconName="icon-xiangxia"
            />
            <p className="player-status">PLAYLIST</p>
            <h4>{props.songName}</h4>
            <IconFun 
                spanClass={`player-down ${props.down?"":"click "}`}
                handleClickIcon={props.handleClickDown}
                iconName="icon-xiangxia"
            />
        </div>
    );
}

export default PlayerHeader