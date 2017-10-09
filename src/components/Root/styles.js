import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#3CB6EE"
  },
  content: {
    flex: 1
  }
});

export default styles;
