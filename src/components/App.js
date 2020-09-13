import React from 'react';
import '../style/app.scss';
import ZingTouch from 'zingtouch';
import anime from "animejs";
import {Howl} from 'howler';
import Screen from './Screen';
import Clickwheel from './Clickwheel';
import friends from '../audio/I_will_be_there_for_you.webm';
import badguy from '../audio/BadGuy.webm';
import kunFayaKun from '../audio/Kun_Faya_Kun.webm';
import khairiyat from '../audio/Khairiyat.webm';
import laembadgini from '../audio/Laembadgini.webm';

let previousDistance=0; // reference distance for clickwheel
let songs=["I'll be there for you","Bad Guy","Kun Faya Kun","Khairiyat","Laembadgini "];

let singers=["The Rembrandts","Billie Eilish","A.R. Rahman","Arijit Singh","Diljit Dosanjh"];
let elements = [".wrapper-one",".wrapper-two",".wrapper-three",".wrapper-four",".wrapper-five"];

let songNumber = 2;
let themeToggle = true;
let isPlaying=false;
let imageNumber = 0;

let song1 = new Howl({
  src:[friends],
  volume: 1,
  html5:true
});
let song2 = new Howl({
  src:[badguy],
  volume: 1,
  html5:true
});
let song3 = new Howl({
  src:[kunFayaKun],
  volume: 1,
  html5:true
});
let song4 = new Howl({
  src:[khairiyat],
  volume: 1,
  html5:true
});
let song5 = new Howl({
  src:[laembadgini],
  volume: 1,
  html5:true
});
let songAddress=[song1,song2,song3,song4,song5];

 class App extends React.Component{
  constructor (){
    super();
    this.state={
      currentPage:"Ipod",
      active:"Music"
    }
  }
  
  // play pause buttn handler......................
  handllePlayPauseClick=() =>{
    if(this.state.currentPage==="Music"){
      if(isPlaying===false){
        isPlaying=true;
        songAddress[songNumber].play();
        document.querySelector("#playPause").classList.remove('pp_btn_play');
        document.querySelector("#playPause").classList.add('pp_btn_pause');
      }
      else if(isPlaying===true){
        songAddress[songNumber].stop();
        isPlaying=false;
        document.querySelector("#playPause").classList.remove('pp_btn_pause');
        document.querySelector("#playPause").classList.add('pp_btn_play');
      }
    } 
  }
  
  // apply current active class................
  applyActive= () => {
    const currentActive = this.state.active;
    if(this.state.currentPage==="Ipod"){
      if(currentActive==="Music"){
        document.getElementById('Music').classList.add('active');
        document.getElementById('Videos').classList.remove('active');
        document.getElementById('Photos').classList.remove('active');
        document.getElementById('Games').classList.remove('active');
        document.getElementById('Settings').classList.remove('active');
      }
      else if(currentActive==="Videos"){
        document.getElementById('Music').classList.remove('active');
        document.getElementById('Videos').classList.add('active');
        document.getElementById('Photos').classList.remove('active');
        document.getElementById('Games').classList.remove('active');
        document.getElementById('Settings').classList.remove('active');
      }
      else if(currentActive==="Photos"){
        document.getElementById('Music').classList.remove('active');
        document.getElementById('Videos').classList.remove('active');
        document.getElementById('Photos').classList.add('active');
        document.getElementById('Games').classList.remove('active');
        document.getElementById('Settings').classList.remove('active');
      }
      else if(currentActive==="Games"){
        document.getElementById('Music').classList.remove('active');
        document.getElementById('Videos').classList.remove('active');
        document.getElementById('Photos').classList.remove('active');
        document.getElementById('Games').classList.add('active');
        document.getElementById('Settings').classList.remove('active');
      }
      else if(currentActive==="Settings"){
        document.getElementById('Music').classList.remove('active');
        document.getElementById('Videos').classList.remove('active');
        document.getElementById('Photos').classList.remove('active');
        document.getElementById('Games').classList.remove('active');
        document.getElementById('Settings').classList.add('active');
      }
    }
  }
 
  //for setting the next active in menulist
  activeNext = ()=>{
    const currentActive = this.state.active;
    if(this.state.currentPage==="Ipod"){
      if(currentActive==="Music"){
        this.setState({ 
          active :"Videos"
        });
      }
      else if(currentActive==="Videos"){
        this.setState({ 
          active :"Photos"
        });
      }
      else if(currentActive==="Photos"){
        this.setState({ 
          active :"Games"
        });
      }
      else if(currentActive==="Games"){
        this.setState({ 
          active :"Settings"
        });
      }
      else if(currentActive==="Settings"){
        this.setState({ 
          active :"Music"
        });
      }
    }
    this.applyActive();
  }

  //for setting the previous active in menulist
  activePrevious = ()=>{
    const currentActive = this.state.active;
    if(this.state.currentPage==="Ipod")
    {
      if(currentActive==="Music"){
        this.setState({ 
          active :"Settings"
        });
      }
      else if(currentActive==="Settings"){
        this.setState({ 
          active :"Games"
        });
      }
      else if(currentActive==="Games"){
        this.setState({ 
          active :"Photos"
        });
      }
      else if(currentActive==="Photos"){
        this.setState({ 
          active :"Videos"
        });
      }
      else if(currentActive==="Videos"){
        this.setState({ 
          active :"Music"
        });
      }
    }
    this.applyActive();
  }


  // function to handle clickwheel events........................................
  handleRotation = () =>{
    let wheelArea = document.getElementById("clickwheel");
    let myRegion = new ZingTouch.Region(wheelArea);
    myRegion.bind(wheelArea,'rotate',(e)=>{
      const currentDistance = (Math.floor(e.detail.distanceFromOrigin))%360;
      // getting and updating the initial distance from origin
      if(previousDistance===0 || !e.detail.distanceFromOrigin)
      {
        previousDistance = currentDistance;
      }
      else{
        const distanceChanged = currentDistance-previousDistance;
        if(Math.abs(distanceChanged)>20){
          
          if(this.state.currentPage==="Ipod"){
            if(distanceChanged>20)
            {
             this.activeNext();
            }
            else if(distanceChanged<-20){
              this.activePrevious();
            }
          }
          else if(this.state.currentPage==="Music" ||this.state.currentPage==="Photos")
          {
            if(distanceChanged>20)
            {
              this.handleForwardCllick();
            }
            else if(distanceChanged<-20){
              this.handleBackwardCllick();
            } 
          }
        previousDistance = currentDistance;
        }
      }
    });
  }

  //centerBtn click handler............................................................
  handleCenterClick = ()=>{
    if(this.state.currentPage==="Ipod")
    {let currentActive = this.state.active;
      this.setState({
       currentPage : currentActive
      });
    }
    else if(this.state.currentPage==="Settings"){
      if(themeToggle===true){
        themeToggle=false;
        document.querySelector("#sToggle").classList.remove('onToggleO');
        document.querySelector("#sToggle").classList.add('offToggleO');
        document.querySelector("#sToggle div").classList.remove('onToggleC');
        document.querySelector("#sToggle div").classList.add('offToggleC');
        document.querySelector(".container").classList.remove('ipodDark');
        document.querySelector(".container").classList.add('ipodLight');
        document.querySelector("#clickwheel").classList.remove('clickwheelDark');
        document.querySelector("#clickwheel").classList.add('clickwheelLight');
        document.querySelector("#centerBtn").classList.remove('centerBtnDark');
        document.querySelector("#centerBtn").classList.add('centerBtnLight');
      }
      else if(themeToggle===false){
        themeToggle=true;
        document.querySelector("#sToggle").classList.add('onToggleO');
        document.querySelector("#sToggle").classList.remove('offToggleO');
        document.querySelector("#sToggle div").classList.add('onToggleC');
        document.querySelector("#sToggle div").classList.remove('offToggleC');
        document.querySelector(".container").classList.add('ipodDark');
        document.querySelector(".container").classList.remove('ipodLight');
        document.querySelector("#clickwheel").classList.add('clickwheelDark');
        document.querySelector("#clickwheel").classList.remove('clickwheelLight');
        document.querySelector("#centerBtn").classList.add('centerBtnDark');
        document.querySelector("#centerBtn").classList.remove('centerBtnLight');
      }
    }
  }

  //menuBtn click handler................................................................
  handleMenuClick = ()=>{
    let currentPage = this.state.currentPage;
    if(currentPage==="Music" || currentPage==="Videos" || currentPage==="Photos"||currentPage==="Games"||currentPage==="Settings"){
      this.setState({
        currentPage : "Ipod",
        active : "Music"
      });
      songAddress[songNumber].stop();
      isPlaying = false;
      songNumber =2;
      imageNumber=0;
    }
  }

  //forward btn click handler...............................
  handleForwardCllick=()=>{
    if(this.state.currentPage==="Music"){
      if(songNumber===4){
        // animate to first song if last song is reached
          songNumber=0;
        this.setSong();
        anime({
          targets: '.cover_flow',
          translateX: '210px',
          easing: 'easeOutExpo'
        });
        anime({
          targets: elements[4],
          scale: 1,
          easing: 'easeOutExpo'
        });
        songAddress[4].stop();
      } else {
          songNumber=songNumber+1;
        this.setSong();
        this.scaleDownCurrentNext();
        //animate to next song
        anime({
          targets: '.cover_flow',
          translateX: '-=105px',
          easing: 'easeOutExpo'
        });
        songAddress[songNumber-1].stop();
      }
      isPlaying=false;
      document.querySelector("#playPause").classList.remove('pp_btn_pause');
      document.querySelector("#playPause").classList.add('pp_btn_play');
    }
    else if(this.state.currentPage==="Photos"){
      if(imageNumber===4){
        imageNumber=0;
        anime({
          targets: '#photo',
          translateX: '0px',
          easing: 'easeOutExpo'
        });
      }
      else{
        imageNumber=imageNumber+1;
        anime({
          targets: '#photo',
          translateX: '-=320px',
          easing: 'easeOutExpo'
        });
      }
    }
  }

  //backward btn click handler...............................
  handleBackwardCllick=()=>{
    if(this.state.currentPage==="Music"){
    if(songNumber===0){
      songNumber=4;
      this.setSong();
      anime({
        targets: '.cover_flow',
        translateX: '-210px',
        easing: 'easeOutExpo'
      });
      anime({
        targets: elements[0],
        scale: 1,
        easing: 'easeOutExpo'
      });
      songAddress[0].stop();
    }
    else{
      songNumber=songNumber-1;
      this.setSong();
      this.scaleDownCurrentPrev();
      anime({
        targets: '.cover_flow',
        translateX: '+=105px',
        easing: 'easeOutExpo'
      });
      songAddress[songNumber+1].stop();
    }
    isPlaying=false;
      document.querySelector("#playPause").classList.remove('pp_btn_pause');
      document.querySelector("#playPause").classList.add('pp_btn_play');
  }
    else if(this.state.currentPage==="Photos"){
      if(imageNumber===0){
        imageNumber=4;
        anime({
          targets: '#photo',
          translateX: '-1280px',
          easing: 'easeOutExpo'
        });
      }
      else{
        imageNumber=imageNumber-1;
        anime({
          targets: '#photo',
          translateX: '+=320px',
          easing: 'easeOutExpo'
        });
      }
    }
  }

  // setting the current song and song information
  setSong=()=>{
    document.querySelector("#songName").innerHTML= songs[songNumber];
    document.querySelector("#artist").innerHTML= singers[songNumber];
    anime({
			targets: elements[songNumber],
			scale: 1.3,
			easing: 'easeOutExpo'
		});
  }
  // scale down current song so that next song be scaled
  scaleDownCurrentNext = ()=>{
    let currentSong =songNumber-1;
    anime({
			targets:elements[currentSong],
			scale: 1,
			easing: 'easeOutExpo'
		})
  }

    // scale down current song so that previous song be scaled
    scaleDownCurrentPrev = ()=>{
      let currentSong =songNumber+1;
      anime({
        targets:elements[currentSong],
        scale: 1,
        easing: 'easeOutExpo'
      })
  
    }
  
  render(){
      return (
        <div className="App">
        <div className="container ipodDark">
          <div className="top">
          <Screen
            title= {this.state.currentPage}//passing the current page data
          />
          </div>
          <div className="bottom">
            <Clickwheel
              onRotate={this.handleRotation}   //passing the clickwheel function in props
              onCenterClick ={this.handleCenterClick}
              onMenuClick={this.handleMenuClick}
              onForwardClick={this.handleForwardCllick}
              onBackwardClick={this.handleBackwardCllick}
              onPlayPauseClick={this.handllePlayPauseClick}
            />
          </div>
        </div>
      </div>
      )
  }
}

export default App;
