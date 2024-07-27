import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#dddddd",
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
    borderWidth: 3,
    borderColor: "#3d3d3d3d",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    color: "#3d3d3d",
    fontWeight: "500",
  },
});
export default styles;