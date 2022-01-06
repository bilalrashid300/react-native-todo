import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text, Alert } from "react-native";

const Form = (props) => {
  const [person, setPerson] = useState({});

  const handleForm = () => {
    if (Object.keys(person)?.length > 0) {
      props?.addPerson(person);
      setPerson({});
    } else {
      Alert.alert("Feild is empty", "", [
        {
          text: "Close",
          onPress: () => console.log("no"),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter input here</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPerson({ ...person, name: value })}
      />
      <Button
        style={styles.button}
        title="Submit"
        color="black"
        onPress={() => handleForm()}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#fff",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: 40,
    padding: 15,
  },
  text: {
    color: "#fff",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#f5f5f5",
    marginBottom: 10,
    padding: 5,
    color: "#fff",
    width: "100%",
  },
  button: {
    backgroundColor: "#f5f5f5",
    color: "#333",
    height: 30,
    padding: 10,
    width: "100%",
  },
});
