import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import * as actions from "../../actions";
import { Expression } from "../Expression/";
import { Result } from "../Result/";
import { Controls } from "../Controls/";
import styles from "./styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxHeight: 0,
      controlsPadding: 0
    };
  }

  measureControls = e => {
    const { height } = e.nativeEvent.layout;
    const padding = height * 0.01; // 1% of height
    this.setState({ controlsPadding: padding });
  };

  measureBox = e => {
    const { height } = e.nativeEvent.layout;
    this.setState({ boxHeight: height });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Expression content={this.props.expression} />
          <Result content={this.props.result} />
          <Controls
            {...this.props}
            measureControls={this.measureControls}
            controlsPadding={this.state.controlsPadding}
            measureBox={this.measureBox}
            boxHeight={this.state.boxHeight}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ expression, result }) => ({ expression, result });

const mapDispatchToProps = dispatch => ({
  saveExpression: payload => dispatch(actions.saveExpression(payload)),
  calcResult: () => dispatch(actions.calcResult()),
  clearResult: () => dispatch(actions.clearResult()),
  togglePlusMinus: payload => dispatch(actions.togglePlusMinus(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
