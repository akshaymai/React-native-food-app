import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealsItem from "../component/MealsList/mealItem";
import { MealsList } from "../component/MealsList/mealsList";
import { CATEGORIES, MEALS } from "../data/dummry-data";

const MealsOverviewScreen = ({ route ,navigation}) => {
  const catID=route.params.categoryId
  const renderMealsItem = MEALS.filter(
    (item) => item.categoryIds.indexOf(route.params.categoryId) >= 0
  );

 
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:CATEGORIES.find((category)=>category.id === route.params.categoryId).title
    })
  },[navigation,catID])

  
return <MealsList items={renderMealsItem}/>
};
export default MealsOverviewScreen;

