// import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from 'react-native';
// import CategoriesScreen from "./screens/categoriesScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MealsOverviewScreen from "./screens/mealsOverviewScreen";
// import MaalDetailsScreen from "./screens/mealsDetailsScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import FavoritesScreen from "./screens/favoritesScreen";

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#351401" },
//         headerTintColor: "white",
//         sceneContainerStyle: { backgroundColor: "#3f2f25" },
//       }}
//     >
//       <Drawer.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           title: "All Categories",
//         }}
//       />
//       <Drawer.Screen name="Favorites" component={FavoritesScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <StatusBar style="dark" />
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: "#351401" },
//             headerTintColor: "white",
//             contentStyle: { backgroundColor: "#3f2f25" },
//           }}
//         >
//           <Stack.Screen
//             name="Drawer"
//             component={DrawerNavigator}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
//           <Stack.Screen name="MealsDetails" component={MaalDetailsScreen} options={{
//             title:"About the meal"
//           }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }











import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/categoriesScreen';
import MealsOverviewScreen from './screens/mealsOverviewScreen';
import MealDetailScreen from './screens/mealsDetailsScreen';
import FavoritesScreen from './screens/favoritesScreen';
import FavoritesContextProvider from './store/context/fabouriteContext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <FavoritesContextProvider  >
    <Provider store={store}>
       <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
                     <Stack.Screen name="MealsDetails" component={MealDetailScreen} options={{
            title:"About the meal"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
     
      
    // </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});