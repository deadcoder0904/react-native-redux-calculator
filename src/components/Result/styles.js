import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  result: {
    color: "white",
    fontSize: 72,
    fontWeight: "300",
    padding: Platform.OS === "ios" ? 50 : 4,
    textAlign: "center",
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowColor: "#333333",
    textShadowRadius: 10
  }
});

export default styles;
