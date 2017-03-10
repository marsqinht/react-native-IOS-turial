import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import Indicator from './Indicator';
import DatePicker from './DatePicker';

export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  constructor(props){
    super(props);
    this.state = {
      isDisabled: false,
    }
  }

  pressBtn = (e)=>{
    console.log(this);
    this.setState({isDisabled: !this.state.isDisabled});
    setTimeout(()=>{
      this.setState({isDisabled: !this.state.isDisabled});
    },1000)
  }

  render() {
    return (
      <View style={{marginTop:20}}>
    
        <Button
        title="Learn More"
        color="#841584"
        disabled = {this.state.isDisabled}
        onPress = {this.pressBtn}
        />
        <Indicator />
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
