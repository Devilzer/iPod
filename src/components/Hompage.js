import React from 'react';

class Homepage extends React.Component{
    render(){
        return (
            <div id="homemenu">
                <div className="active" id="Music">
                    Music
                </div>
                <div id="Videos">
                    Videos
                </div>
                <div id="Photos">
                    Photos
                </div>
                <div id="Games">
                    Games
                </div>
                <div id="Settings">
                    Settings
                </div>
            </div>
        )
    }
}

export default Homepage;