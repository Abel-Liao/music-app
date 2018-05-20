import React from 'react'
const MusicSearch=(props)=>{
    return (
        <div className="list-top">
            <div className="list-srarch">
                <i className="iconfont icon-search" />
                <input type="text" placeholder="Search"/>
            </div>
            <h2>Music Name</h2>
        </div>
    );
}

export default MusicSearch