import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
   label : string;
}

export default function Button( { label } : Props) {
    return (
      <View style={styles.buttonCont} >
        <Pressable 
        style={styles.button}
        onPress={() => alert("You pressed")}
        >
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
        </View>

         
    );
}

const styles = StyleSheet.create({
  buttonCont: {
    width: 320,
    height : 68,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    padding : 3,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonIcon: {
    paddingRight: 8,   
  },
  buttonLabel: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center", 
  },
});