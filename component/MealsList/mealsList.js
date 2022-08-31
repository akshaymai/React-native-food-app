import { FlatList, StyleSheet, View } from "react-native";
import MealsItem from "./mealItem";

export const MealsList=({items})=>{
    const handelMealsOverView = (itemData) => {

        const item=itemData.item;
        const mealItemProps={
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,
            id:item.id
        }
        return <MealsItem  {...mealItemProps}/>;
      };
      return (
        <View style={style.rootContainer}>
          {/* <Text>Meals OVerview screens-{route.params.categoryId}</Text> */}
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={handelMealsOverView}
          />
        </View>
      );    
}
const style = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 20,
    },
  });
  