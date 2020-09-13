import React from 'react';
import Homepage from './Hompage';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import Videos from './Videos';
import Photos from './Photos';

class Screen extends React.Component{
    render(){
        return (
                <div className="screen">
                    <div className="header">
                        <div id="apple">
                            <i className="fab fa-apple"></i>
                        </div>
                        <div id="headerText">
                            {/* getting the title value for props */}
                            {this.props.title}  
                        </div> 
                        <div id="battery">
                            <i className="fas fa-battery-three-quarters"></i>
                        </div> 
                    </div>
                        {(this.props.title==="Ipod")&&<Homepage/>}
                        {(this.props.title==="Music")&&<Music/>}
                        {(this.props.title==="Games")&&<Games/>}
                        {(this.props.title==="Settings")&&<Settings/>}
                        {(this.props.title==="Videos")&&<Videos/>}
                        {(this.props.title==="Photos")&&<Photos/>}
                </div>
        )
    }
}

export default Screen;