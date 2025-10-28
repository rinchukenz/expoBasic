import { StyleSheet, Text, View } from "react-native";

export default function AboutHome() {
  return (
    <View
      style={styles.StyleCont}
    >
      <Text style={styles.did}>About Me</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  StyleCont : {   
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : 'grey',
  },
  did : {
    fontSize: 20,
    fontWeight: "bold",
    color : 'white',
  }
 
})