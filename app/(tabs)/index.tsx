import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ImageViewer from "@/component/ImageViewer";

const PlaceHolderImage = require("../../assets/images/animeback.jpg");
export default function Index() {
  return (
    <View style={styles.StyleCont}>
      <View style={styles.imageConst} >
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
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
  image : {
    width : 320,
    height : 440,
    borderRadius : 18,
  },
  imageConst : {
    flex : 1,
  
}});