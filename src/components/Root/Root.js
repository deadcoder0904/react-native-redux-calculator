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
    this.state = { top: 0 };
  }

  _onLayout = ({ nativeEvent: { layout: { y } } }) => this.setState({ top: y });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Expression content={this.props.expression} />
          <Result content={this.props.result} />
          <Controls
            {...this.props}
            onLayout={this._onLayout}
            top={this.state.top}
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
