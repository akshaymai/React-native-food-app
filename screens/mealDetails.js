import { View, Text, Pressable, Image, StyleSheet } from "react-native";
 const MealDetails = ({ textStyle,style,affordability, complexity, duration }) => {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailsItem,textStyle]}> {duration}</Text>

      <Text style={[styles.detailsItem,textStyle]}>{affordability.toUpperCase()}</Text>
      <Text style={[styles.detailsItem,textStyle]}>{complexity.toUpperCase()}</Text>
    </View>
  );
};
export default MealDetails;

const styles = StyleSheet.create({
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
