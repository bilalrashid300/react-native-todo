import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import Form from "../components/form";
import Header from "../components/header";

const Home = (props) => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
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

  const getRandomNumber = () => {
    return Math.random().toString
  }

  const addPerson = (person,) => {
    setPersons([{ ...person, id: getRandomNumber() }, ...persons]);
    setModal(false);
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          
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

          <Button title="Add more" onPress={() => setModal(!modal) }/>

          <Modal visible={modal} animationType="slider">
              <View style={styles.container}>
                  <Form addPerson={addPerson} />
              </View>
          </Modal>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#fff",
    alignItems: "center",
    height: "100%",
    paddingTop: 40,
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
    flex: 1,
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
    borderBottomWidth: 1,
    borderColor: "#f5f5f5",
    marginBottom: 10,
    padding: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#f5f5f5",
    color: "#333",
    height: 30,
    padding: 10,
  },
  viewList: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    padding: 20,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
  },
});
