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

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };
//
//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState({ showText: !this.state.showText });
//     }, 1000);
//   }
//
//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
//
// class nativeTrip extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('nativeTrip', () => nativeTrip);


//样式

// import React, {Component} from 'React';
// import {AppRegistry, Text ,View, StyleSheet} from 'react-native';
//
// class nativeTrip extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { showText: true };
//
//       setTimeout(()=>{
//         this.setState({showText:!this.state.showText})
//       },3000)
//     }
//
//   render(){
//     let display = this.state.showText?'rewrewrew':'';
//     return (
//       <View>
//       <Text style={style.deepBlue}>dsadssa</Text>
//       <Text>dsadssa</Text>
//       <Text>dsadssa</Text>
//       <Text>dsadssa</Text>
//       <Text>dsadssa</Text>
//       <Text style={style.deepBlue}>{display}</Text>
//       </View>
//     )
//   }
// }
//
// const style = StyleSheet.create({
//    deepBlue:{
//      fontSize:20,
//      color:'blue'
//    }
// })
//
// AppRegistry.registerComponent('nativeTrip',()=>nativeTrip);


//宽度和高度

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('nativeTrip', () => FixedDimensionsBasics);


//flex 弹性盒模型
//
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
//
// AppRegistry.registerComponent('nativeTrip', () => FlexDimensionsBasics);


//flexbox布局 flexDirection alignItems justifyContent

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'column',justifyContent:'space-between'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
//
// AppRegistry.registerComponent('nativeTrip', () => FlexDirectionBasics);

//处理文本输入

// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
//
// class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text:text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('nativeTrip', () => PizzaTranslator);

//scrollView

// import React, { Component } from 'react';
// import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'
//
// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//     let pic = {
//           uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//       return(
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Image source={pic} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
//
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent(
//   'nativeTrip',
//   () => IScrolledDownAndWhatHappenedNextShockedMe);


//listView

// import React, { Component } from 'react';
// import { AppRegistry, ListView, Text, View } from 'react-native';
//
// class ListViewBasics extends Component {
//   // 初始化模拟数据
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//   render() {
//     return (
//       <View style={{flex: 1, paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('nativeTrip', () => ListViewBasics);

//引入组件
// import React, { Component } from 'react';
// import { AppRegistry, Navigator } from 'react-native';
//
// // ./MyScene表示的是当前目录下的MyScene.js文件，也就是我们刚刚创建的文件
// // 注意即便当前文件和MyScene.js在同一个目录中，"./"两个符号也是不能省略的！
// // 但是.js后缀是可以省略的
//
// import MyScene from './app/MyScene';
//
// class YoDawgApp extends Component {
//   render() {
//     return (
//     <Navigator
//       initialRoute={{ title: 'My Initial Scene', index: 0 }}
//       renderScene={(route, navigator) => {
//         return <MyScene title={route.title} />
//       }}
//     />
//   );
//   }
// }
//
// AppRegistry.registerComponent('nativeTrip', () => YoDawgApp);

//导航器

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import MyScene from './app/MyScene';

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('nativeTrip', () => SimpleNavigationApp);
