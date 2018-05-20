import React from 'react';

const MusicList=(props)=>{
    return (
        <ul className="music-list">
            {props.list.map((i,idx)=>
                <li key={idx}>
                    <i />
                    {
                        props.name===i.songName ?
                            (<img src={`require(${i.coverPicture})`} alt="封面图"/>) : (<span className="pic-span" />)
                    }
                    <span className="music-information" onClick={()=>props.onClick(i.songName)}>
                        <span>{i.songName}</span>
                        <span className="small-size">{i.author}</span>
                    </span>
                    <b className="iconfont icon-more" />
                </li>
            )}
        </ul>
    );
}

export default MusicList