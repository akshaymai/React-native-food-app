// import { useContext, useLayoutEffect } from "react";
// import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
// import Icon from "../component/Icon";
// import List from "../component/MealDetails/List";
// import Subtitle from "../component/MealDetails/Subtitle";
// import { MEALS } from "../data/dummry-data";
// import { FavoritesContext } from "../store/context/fabouriteContext";
// import MealDetails from "./mealDetails";

// const MaalDetailsScreen = ({ route, navigation }) => {
//   const mealId = route.params.mealId;
//   const favoritesMealCtx=useContext(FavoritesContext)
//   const mealsFaborites=favoritesMealCtx.ids.includes(mealId)





//   const seletedMeal = MEALS.find((item) => item.id === mealId);


//   const onpressHandler=()=>{
 
//     if(mealsFaborites){
//       favoritesMealCtx.removeFaoritues(mealId)
//     }else{
//       favoritesMealCtx.addFabourites(mealId)
//     }
//   }

// useLayoutEffect(()=>{

//   navigation.setOptions({

//     headerRight:()=>{  
//       return <Icon icon={mealsFaborites ? "star":'star-outline'} color="white" onPress={onpressHandler} />
//     }
//   })
// },[navigation,onpressHandler])



//   return (
//     <ScrollView style={{ marginBottom: 30 }}>
//       <Image style={style.image} source={{ uri: seletedMeal.imageUrl }} />
//       <Text style={style.title}>{seletedMeal.title}</Text>
//       <MealDetails
//         duration={seletedMeal.duration}
//         complexity={seletedMeal.complexity}
//         affordability={seletedMeal.affordability}
//         textStyle={style.detailsText}
//       />
//       <View style={style.listContainerOuter}>
//         <View style={style.listContainer}>
//           <Subtitle>Ingredients</Subtitle>

//           <List data={seletedMeal.ingredients} />

//           <Subtitle>Steps</Subtitle>
//           <List data={seletedMeal.steps} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
// export default MaalDetailsScreen;
// const style = StyleSheet.create({
//   image: {
//     width: "100%",
//     height: 350,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 24,
//     margin: 8,
//     textAlign: "center",
//     color: "white",
//   },
//   detailsText: {
//     color: "white",
//   },
//   listContainer: {
//     width: "80%",
//   },
//   listContainerOuter: {
//     alignItems: "center",
//   },
// });











import { useContext, useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "../component/Icon";
import List from "../component/MealDetails/List";
import Subtitle from "../component/MealDetails/Subtitle";
import { MEALS } from "../data/dummry-data";
import { FavoritesContext } from "../store/context/fabouriteContext";
import MealDetails from "./mealDetails";
import { useSelector, useDispatch } from 'react-redux'
import { addFaborites, removeFaborites } from "../store/redux/fabourites";

const MaalDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId; 
  const dispatch=useDispatch()
  const FavoritesIDs = useSelector((state) => state.favoritesMeals.ids)

  const mealsFaborites=FavoritesIDs.includes(mealId)


  const seletedMeal = MEALS.find((item) => item.id === mealId);


  const onpressHandler=()=>{
 
    if(mealsFaborites){
      // favoritesMealCtx.removeFaoritues(mealId)
      dispatch(removeFaborites({id:mealId}))
    }else{ 
      dispatch(addFaborites({id:mealId}))
    }
  }

useLayoutEffect(()=>{

  navigation.setOptions({

    headerRight:()=>{  
      return <Icon icon={mealsFaborites ? "star":'star-outline'} color="white" onPress={onpressHandler} />
    }
  })
},[navigation,onpressHandler])



  return (
    <ScrollView style={{ marginBottom: 30 }}>
      <Image style={style.image} source={{ uri: seletedMeal.imageUrl }} />
      <Text style={style.title}>{seletedMeal.title}</Text>
      <MealDetails
        duration={seletedMeal.duration}
        complexity={seletedMeal.complexity}
        affordability={seletedMeal.affordability}
        textStyle={style.detailsText}
      />
      <View style={style.listContainerOuter}>
        <View style={style.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List data={seletedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={seletedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MaalDetailsScreen;
const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listContainerOuter: {
    alignItems: "center",
  },
});













