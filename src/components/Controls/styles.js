import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    backgroundColor: "#333E52",
    padding: "1%"
  },
  pretender: {
    backgroundColor: "#3CB6EE",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: "23%",
    margin: "1%"
  },
  double: {
    width: "48%"
  },
  black: {
    backgroundColor: "#414758"
  },
  green: {
    backgroundColor: "#73DB6D"
  },
  orange: {
    backgroundColor: "#F5A623"
  }
});

export default styles;
