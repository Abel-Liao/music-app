import React from 'react'
function PlayerInfo(props){
    return (
        <div>
            <h4>{props.songName}</h4>
            <p className="player-singer">陈奕迅</p>
            <div>
                进度条
            </div>
        </div>
    );
}

export default PlayerInfo