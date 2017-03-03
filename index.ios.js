//import React, { Component } from 'react';
//import { AppRegistry, Image,Text,View } from 'react-native';


//插入图片

// class nativeTrip extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110,marginTop:300}} />
//     );
//   }
// }

// AppRegistry.registerComponent('nativeTrip', () => nativeTrip);



//props 属性的传输
// import React, {Component} from 'React';
// import { AppRegistry,Text,View } from 'react-native';
// class Greeting extends Component {
//   render(){
//     return (
//       <Text>{this.props,name}</Text>
//     )
//   }
// }

// import React, { Component } from 'react';
// import { AppRegistry, Image,Text,View } from 'react-native';
// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// class nativeTrip extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
// AppRegistry.registerComponent('nativeTrip', () => nativeTrip);


//state（状态）

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class nativeTrip extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

AppRegistry.registerComponent('nativeTrip', () => nativeTrip);
