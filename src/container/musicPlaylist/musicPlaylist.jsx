import React from 'react'

import "./musicPlaylist.css"

import MusicSearch from '../../component/musicSearch/musicSearch'
import MusicList from '../../component/musicList/musicList'
class MusicPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songName:null
        }
        this.handleClickPlay = this.handleClickPlay.bind(this);
    }
    handleClickPlay(name){
        this.setState({songName:name});
        this.props.history.push(`/music?name=${name}`)
    }
    render() {
        const list = [
            {
                songName:"十年",
                author:"陈奕迅",
                coverPicture:"../ass/images/musicList/cover_picture.png"
            },
            {
                songName:"红玫瑰",
                author:"陈奕迅",
                coverPicture:"../ass/images/musicList/cover_picture.png"
            }
        ];
        return (
            <div>
                <MusicSearch {...this.props} />
                <MusicList
                    {...this.props} 
                    list={list} 
                    onClick={this.handleClickPlay}
                    name={this.state.songName}
                />
            </div>
        );
    }
}

export default MusicPlaylist