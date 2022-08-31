

import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { MealsList } from '../component/MealsList/mealsList';
import { MEALS } from '../data/dummry-data';
import { FavoritesContext } from '../store/context/fabouriteContext';

function FavoritesScreen() {
  // const favoritesMealCtx=useContext(FavoritesContext)
   
  const favoritesMeal=useSelector((state)=>state.favoritesMeals.ids)
  const FavoritesMeals=MEALS.filter((meal)=>{
    return favoritesMeal.includes(meal.id)
  })

  if(FavoritesMeals.length === 0){
    return(
      <View style={style.rootContainer}>
        <Text style={style.text}>You have no favorites Item</Text>
      </View>
    )
  }
  return  <MealsList items={FavoritesMeals}/>
}

export default FavoritesScreen;

const style=StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})