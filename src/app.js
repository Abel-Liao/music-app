import React from 'react'
import { Route } from 'react-router-dom'

// import Music from './container/music/music'
import MusicPlayer from './container/musicPlayer/musicPlayer'
import MusicPlaylist from './container/musicPlaylist/musicPlaylist'

class App extends React.Component {
    render () {
        return (
            <div>
                {/* <Route component={Music}></Route> */}
                <Route path="/music" component={MusicPlayer}></Route>
                <Route path="/musiclist" component={MusicPlaylist}></Route>
            </div>
        )
    }
}

export default App