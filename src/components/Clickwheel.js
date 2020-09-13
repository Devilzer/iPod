import React from 'react';

class Clickwheel extends React.Component{
    render(){
        return (
                <div id="clickwheel" className="clickwheelDark" draggable="false"  onMouseDown={() =>{this.props.onRotate();}}>
                    <div>
                        <div>
                        </div>
                        <div id="menu" onClick={() =>{this.props.onMenuClick();}}>
                        <p>
                        MENU
                        </p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <div id="backward" onClick={()=>{this.props.onBackwardClick();}}>
                            <i className="fas fa-fast-backward"></i>
                        </div>
                        <div id="centerBtn" className="centerBtnDark" onClick={()=>{this.props.onCenterClick();}}>
                        </div>
                        <div id="forward" onClick={()=>{this.props.onForwardClick();}}>
                            <i className="fas fa-fast-forward"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                        </div>
                        <div id="playPause" onClick={()=>{this.props.onPlayPauseClick();}}>
                            <div>
                            <i className="fas fa-play"></i>
                            <i className="fas fa-pause"></i>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Clickwheel;
