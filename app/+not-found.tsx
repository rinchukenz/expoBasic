import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    
    <View
      style={styles.StyleCont}
    >
      <Text style={styles.text}>Not FOFFFF</Text>
      <Link href={"/"} style={styles.button}>Back to Home Screen</Link>
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
  text : {
    fontSize: 20,
    fontWeight: "bold",
    color : 'white',
  },
  button : {
    marginTop : 20,
    fontSize : 18,
    color : 'blue',
  }
 
});
