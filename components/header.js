import { StyleSheet, Text, View, Image, Button } from "react-native";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/favicon.png")}
        />
        <Text style={styles.boldText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },  
  header: {
    padding: 20,
    width: "100%",
  },
  boldText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Header;
