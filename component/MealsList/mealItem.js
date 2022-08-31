import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native'
const MealsItem = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  id
}) => {

const navigation=useNavigation();

  const mealsDetailsHandler=()=>{
 navigation.navigate('MealsDetails',{
  mealId:id
 })

  }

  return (
    <View style={style.mealsITem}>
      <Pressable 
      onPress={mealsDetailsHandler}
       style={({pressed})=>(pressed?style.buttonPressed : null)}
      android_ripple={{ color: "#ccc" }}>
        <View>
          <Image style={style.image} source={{ uri: imageUrl }} />
          <Text style={style.title}>{title}</Text>
        </View>
        <View style={style.details}>
          <Text style={style.detailsItem}> {duration}</Text>
          <Text style={style.detailsItem}>{affordability.toUpperCase()}</Text>
          <Text style={style.detailsItem}>{complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default MealsItem;

const style = StyleSheet.create({
  mealsITem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
