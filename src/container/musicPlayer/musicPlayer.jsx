import React from 'react'

import "./musicPlayer.css";
class MusicPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            play: true,
            down: true
        };
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }
    handleClickPlay() {
        this.setState({play:!this.state.play})
    }
    handleClickDown(){
        this.setState({down:!this.state.down})
    }
    render() {
        const songName = this.props.location.search.split("=")[1];
        return (
            <div className="music-player">
                <div className="player-top">
                    <div className="player-title">
                        <span
                            className={`player-down ${this.state.down?"":"click "}`}
                            onClick={this.handleClickDown}
                        >
                            <i
                                className="iconfont icon-xiangxia"
                                
                            />
                        </span>
                        <p className="player-status">PLAYLIST</p>
                        <h4>{songName}</h4>
                    </div>
                    <div className="player-banner">
                        <img src={require("../../ass/images/musicPlayer/banner_01.jpg")} alt=""/>
                    </div>
                    <img className="avatar" src={require("../../ass/images/musicPlayer/user_icon.png")} alt=""/>
                </div>
                <div className="player-content">
                    <h4>{songName}</h4>
                    <p className="player-singer">陈奕迅</p>
                    <div>
                        进度条
                    </div>
                    <div className="player-playStop">
                        <i className="iconfont icon-ai-rew-left" />
                        <span className="play-stop" onClick={this.handleClickPlay}>
                            <span>
                                <i className={`iconfont ${this.state.play?"icon-bofang":"icon-zanting"}`} />
                            </span>
                        </span>
                        <i className="iconfont icon-ai-rew-right" />
                    </div>
                    <div className="player-icon">
                        <span><i className="iconfont icon-biaoqian" /></span>
                        <span><i className="iconfont icon-suijibofang" /></span>
                        <span><i className="iconfont icon-xunhuan1" /></span>
                        <span><i className="iconfont icon-htmal5icon35" /></span>
                    </div>
                </div>
            </div>
        );
    }
}
export default MusicPlayer