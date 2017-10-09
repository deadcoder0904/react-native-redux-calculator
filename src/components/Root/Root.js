import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import * as actions from "../../actions";
import { Expression } from "../Expression/";
import { Result } from "../Result/";
import { Controls } from "../Controls/";
import styles from "./styles";

const App = props => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.content}>
      <Expression content={props.expression} />
      <Result content={props.result} />
      <Controls {...props} />
    </View>
  </View>
);

const mapStateToProps = ({ expression, result }) => ({ expression, result });

const mapDispatchToProps = dispatch => ({
  saveExpression: payload => dispatch(actions.saveExpression(payload)),
  calcResult: () => dispatch(actions.calcResult()),
  clearResult: () => dispatch(actions.clearResult()),
  togglePlusMinus: payload => dispatch(actions.togglePlusMinus(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
