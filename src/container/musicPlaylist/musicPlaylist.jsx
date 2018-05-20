import React from 'react'

import "./musicPlaylist.css"
class MusicPlaylist extends React.Component {
    render() {
        return (
            <div>
                <div className="list-top">
                    <div className="list-srarch">
                        <i />
                        <input type="text" placeholder="Search"/>
                    </div>
                    <h2>Music Name</h2>
                </div>
                <ul>
                    <li>
                        <i></i>
                        music name
                        <b></b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MusicPlaylist