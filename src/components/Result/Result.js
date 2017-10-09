import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const Result = ({ content }) => (
  <Text numberOfLines={1} style={styles.result}>
    {content}
  </Text>
);

export default Result;
