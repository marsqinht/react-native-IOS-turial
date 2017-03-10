import React, { Component } from 'react';
import { Image,Animated } from 'react-native';

 export default  class PlayGround extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      bounceValue:new Animated.value(0),
    }
   }
   componentDidMount(){
     this.state.bounceValue.setValue(1.5);     // Start large
      Animated.spring(                          // Base: spring, decay, timing
        this.state.bounceValue,                 // Animate `bounceValue`
        {
          toValue: 0.8,                         // Animate to smaller size
          friction: 1,                          // Bouncier spring
        }
      ).start();
   }
   render(){
     return (
       <Animated.Image
       source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
       style={{
          flex: 1,
          transform: [
            {scale: this.state.bounceValue},
          ]
        }}
       />
     )
   }
 }
