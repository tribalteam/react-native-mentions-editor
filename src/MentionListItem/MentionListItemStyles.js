import { StyleSheet } from "react-native";

export default StyleSheet.create({
  suggestionItem: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
   //  color: "rgba(0, 0, 0, 0.1)",
    height: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)"
  },
  text: {
    alignSelf: "center",
    marginLeft: 12
  },
  thumbnailWrapper: {
    width: 35,
    height: 35
  },
  thumbnailChar: {
    fontSize: 16
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15
  }
});
