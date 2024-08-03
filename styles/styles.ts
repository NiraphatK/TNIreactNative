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
const stylesPractice = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },

  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
  },
});
export { styles, stylesPractice };
