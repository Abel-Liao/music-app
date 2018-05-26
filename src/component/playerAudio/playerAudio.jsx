import React from 'react'
import IconFun from '../iconFun/iconFun'
function PlayerAudio(props){
    return (
        <div className="player-playStop">
            <i className="iconfont icon-ai-rew-left" />
            <span className="play-stop" onClick={()=>props.handleClickPlay(true)}>
                <IconFun 
                    spanClass={null}
                    handleClickIcon={props.handleClickPlay}
                    iconName={props.play?"icon-bofang":"icon-zanting"}
                />
            </span>
            <i className="iconfont icon-ai-rew-right" />
        </div>
    );
}

export default PlayerAudio