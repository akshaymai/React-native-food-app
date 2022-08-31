import { FlatList } from "react-native";
import CategoriesGridTitle from "../component/categoriesGridTitle";
import { CATEGORIES } from "../data/dummry-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoriesItems = ({ item }) => {
    const handleOnpress = () => {
      navigation.navigate("MealsOverview",{
        categoryId:item.id
      });
    };

    return (
      <CategoriesGridTitle
        color={item.color}
        title={item.title}
        onPress={handleOnpress}
      />
    );
  };

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCategoriesItems}
        numColumns={2}
      />
    </>
  );
};
export default CategoriesScreen;
