import React from 'react';

class Music extends React.Component{
    render(){
        return (
            <div id="music">
                <div className="cover_flow">
                    <div className="wrapper-one">
                        <div className="cover-one">
                        </div>
                    </div>
                    
                    <div className="wrapper-two">
                        <div className="cover-two">
                        </div>
                    </div>

                    <div className="wrapper-three">
                        <div className="cover-three">
                        </div>
                    </div>

                    <div className="wrapper-four">
                        <div className="cover-four">
                        </div>
                    </div>

                    <div className="wrapper-five">
                        <div className="cover-five">
                        </div>
                    </div>
                </div>

                <div className="status">
                    <div className="pp_btn_play" id="playPause">
                    </div>
                    <div className="song_info">
                        <h3 id="songName">Kun Faya Kun</h3>
                        <p id="artist">A.R. Rahman</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music;