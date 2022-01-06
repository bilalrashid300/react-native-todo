import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Tab
} from "react-native";

const About = (props) => {
  const [count, setCount] = useState(1);
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <Button
          onPress={() => setCount(count => count + 1)}
          title="Update count"
          color="#333"
        />
      ),
    })
  }, [navigation]);

  return (
      <View style={styles.container}>
        <Text style={styles.boldText}>{route?.name}</Text>
        <Text style={styles.boldText}>{count}</Text>
        <Text style={styles.boldText}>{isFocused ? 'focused' : 'unfocused'}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Go Back" color="black" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={styles.buttonContainer} >
          <Button title="Update title" color="black" onPress={() => navigation.setOptions({title: 'Updated'})}/>
        </View>
      </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#fff",
    alignItems: "center",
    width: '100%',
    paddingTop: 40,
    padding: 15,
  },
  boldText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 5,
    width: '100%'
  }
});
