import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    backgroundColor: "#333E52"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative"
  },
  first: { top: -25 },
  second: { top: -20 },
  third: { top: -15 },
  fourth: { top: -10 },
  fifth: { top: -5 },
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
