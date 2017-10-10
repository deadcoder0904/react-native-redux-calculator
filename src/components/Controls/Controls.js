import React from "react";
import { View, Text } from "react-native";

import { Box } from "../Box/";
import styles from "./styles";

const Controls = props => (
  <View style={styles.controls} onLayout={props.measureControls}>
    <View
      style={[
        styles.pretender,
        {
          height: props.boxHeight / 2 + props.controlsPadding
        }
      ]}
    />

    <View style={styles.row}>
      <Box
        onLayout={props.measureBox}
        style={[styles.box, styles.green]}
        content="AC"
        onPress={props.clearResult}
      />
      <Box
        style={[styles.box, styles.green]}
        content="+/-"
        onPress={props.togglePlusMinus}
      />
      <Box
        style={[styles.box, styles.green]}
        content="%"
        onPress={() => props.saveExpression("%")}
      />
      <Box
        style={[styles.box, styles.green]}
        content="/"
        onPress={() => props.saveExpression("/")}
      />
    </View>
    <View style={styles.row}>
      <Box
        style={[styles.box, styles.black]}
        content="7"
        onPress={() => props.saveExpression("7")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="8"
        onPress={() => props.saveExpression("8")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="9"
        onPress={() => props.saveExpression("9")}
      />
      <Box
        style={[styles.box, styles.green]}
        content="*"
        onPress={() => props.saveExpression("*")}
      />
    </View>
    <View style={styles.row}>
      <Box
        style={[styles.box, styles.black]}
        content="4"
        onPress={() => props.saveExpression("4")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="5"
        onPress={() => props.saveExpression("5")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="6"
        onPress={() => props.saveExpression("6")}
      />
      <Box
        style={[styles.box, styles.green]}
        content="-"
        onPress={() => props.saveExpression("-")}
      />
    </View>
    <View style={styles.row}>
      <Box
        style={[styles.box, styles.black]}
        content="1"
        onPress={() => props.saveExpression("1")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="2"
        onPress={() => props.saveExpression("2")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="3"
        onPress={() => props.saveExpression("3")}
      />
      <Box
        style={[styles.box, styles.green]}
        content="+"
        onPress={() => props.saveExpression("+")}
      />
    </View>
    <View style={styles.row}>
      <Box
        style={[styles.box, styles.double, styles.black]}
        content="0"
        onPress={() => props.saveExpression("0")}
      />
      <Box
        style={[styles.box, styles.black]}
        content="."
        onPress={() => props.saveExpression(".")}
      />
      <Box
        style={[styles.box, styles.orange]}
        content="="
        onPress={props.calcResult}
      />
    </View>
  </View>
);

export default Controls;
