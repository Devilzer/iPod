import React from 'react';
import video from '../video/COSTA RICA IN 4K 60fps HDR (ULTRA HD).mp4';

class Videos extends React.Component{
    render(){
        return (
            <div id="video">
                {/* <ReactPlayer id="video_player" width='320px' height='192.5px' url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playing={true}/> */}
                <video autoPlay loop>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
        )
    }
}
export default Videos;