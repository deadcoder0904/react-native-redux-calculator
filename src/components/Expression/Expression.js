import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const Expression = ({ content }) => (
  <Text numberOfLines={1} style={styles.question}>
    {content}
  </Text>
);

export default Expression;
