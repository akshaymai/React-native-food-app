import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoriesGridTitle = ({ title, color,onPress }) => {
  return (
    <View style={style.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[style.textContainer, { backgroundColor: color }]}>
          <Text style={style.textStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTitle;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 16,
    elevation: 4,
    borderRadius: 8,
    height: 150,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    flex: 1,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
});
