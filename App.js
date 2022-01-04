import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

export default function App() {
  const [name, setName] = useState("Bilal Rashid");
  const [age, setAge] = useState(23);
  const [person, setPerson] = useState({});
  const [persons, setPersons] = useState([
    {
      name: "John",
      id: 1,
    },
    {
      name: "Bilal",
      id: 2,
    },
    {
      name: "John",
      id: 3,
    },
    {
      name: "Ali",
      id: 4,
    },
    {
      name: "Shahzaib",
      id: 5,
    },
  ]);

  const addPerson = () => {
    setPersons([{ ...person, id: Math.random().toString }, ...persons]);
  };

  const deletePerson = (id) => {
    Alert.alert("Are you sure you want to delete this?", "", [
      {
        text: "Yes",
        onPress: () =>
          setPersons((prePerson) => {
            return prePerson.filter((item) => id !== item.id);
          }),
      },
      {
        text: "No",
        onPress: () => console.log("no"),
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.boldText}>List & Scroll View</Text>
          {/* NAME & AGE INPUT FEILDS */}

          {/* <Text style={styles.boldText}>
          Hello, {name ? name : "Bilal Rashid"}
        </Text>
        <Text style={styles.boldText}>
          Are you sure you are {age ? age : "23"}?
        </Text>
        <Text style={styles.headerText}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setName(value)}
        />
        <Text style={styles.headerText}>Age</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(value) => setAge(value)}
        />
        <Button style={styles.button} title="Submit" /> */}
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setPerson({ ...person, name: value })}
          />
          <Button
            style={styles.button}
            title="Submit"
            color="black"
            onPress={() => addPerson()}
          />
          <FlatList
            keyExtractor={(item) => item.id}
            data={persons}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => deletePerson(item.id)}>
                <View style={styles.viewList}>
                  <Text style={styles.text}>Name: {item?.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            style={styles.scrollContainer}
          />

          {/* Scroll view component */}

          {/* <ScrollView style={styles.scrollContainer}>
          {persons.map((person) => {
            return (
              <View style={styles.viewList}>
                <Text style={styles.text} key={person.id}>
                  Name: {person?.name}
                </Text>
              </View>
            );
          })}
        </ScrollView> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  header: {
    padding: 20,
    width: "100%",
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
  },
  body: {
    padding: 20,
    width: "100%",
  },
  bodyText: {
    color: "#333",
    fontSize: 14,
  },
  boldText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#f5f5f5",
    marginBottom: 10,
    padding: 10,
    color: "#fff",
    borderRadius: 30,
  },
  button: {
    backgroundColor: "#f5f5f5",
    color: "#333",
    height: 30,
    padding: 10,
  },
  viewList: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    padding: 20,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 18,
  },
  scrollContainer: {
    height: 400,
  },
});
