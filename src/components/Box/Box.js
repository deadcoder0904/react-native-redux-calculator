import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Box = ({ content, style, onPress }) => (
  <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
    <Text style={styles.text}>{content}</Text>
  </TouchableOpacity>
);

export default Box;
