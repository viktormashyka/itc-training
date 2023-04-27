import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const data = [
  {name: 'Edward', language: 'English', place: 'England'},
  {name: 'Viktor', language: 'Ukrainian', place: 'Scotland'},
  {name: 'Anusha', language: 'Hindi', place: 'India'},
  {name: 'Lakshmiravali', language: 'Tamil', place: 'India'},
];

function MyListScreen({navigation}) {
  const [listData, setListData] = useState(data);
  const [userName, setUserName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userPlace, setUserPlace] = useState('');
  const [modalVisible, setModalVible] = useState(false);

  useEffect(() => {
    console.log('navigation: ', navigation);
  }, [navigation]);

  const renderCellItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderItem}
        onPress={() => navigation.navigate('List item', {data: item})}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyListMessage = () => {
    return (
      <View style={styles.listEmpty}>
        <Text style={styles.text}>No data found</Text>
      </View>
    );
  };

  const renderSeparatorItem = () => {
    return <View style={{backgroundColor: 'grey', height: 5}}></View>;
  };

  const renderHeaderList = () => {
    return <View style={{backgroundColor: 'black', height: 5}}></View>;
  };

  const renderFooterList = () => {
    return <View style={{backgroundColor: 'black', height: 5}}></View>;
  };

  const userInputView = () => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Input User data:</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={changeText => setUserName(changeText)}
          value={userName}
          placeholder="User name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changeText => setUserLanguage(changeText)}
          value={userLanguage}
          placeholder="User language"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changeText => setUserPlace(changeText)}
          value={userPlace}
          placeholder="User place"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!userName || !userLanguage || !userPlace) {
              return;
            }
            const newUserRecord = {
              name: userName,
              language: userLanguage,
              place: userPlace,
            };
            console.log(newUserRecord);
            setListData([...listData, newUserRecord]);
            setUserName('');
            setUserLanguage('');
            setUserPlace('');
          }}>
          <Text style={styles.buttonText}>Insert</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.outputContainer}>
          <Text style={styles.labelText}>My list</Text>
          <FlatList
            data={listData}
            renderItem={renderCellItem}
            ListEmptyComponent={renderEmptyListMessage}
            ItemSeparatorComponent={renderSeparatorItem}
            ListHeaderComponent={renderHeaderList}
            ListFooterComponent={renderFooterList}
          />
        </View>
        {userInputView()}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  outputContainer: {
    flex: 1,
    gap: 10,
    // backgroundColor: '#F5F5F2',
    backgroundColor: 'lightgreen',
    paddingHorizontal: 40,
  },
  inputContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: 'lightgreen',
  },
  inputField: {
    borderRadius: 4,
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'blue',
    // backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Georgia',
  },
  labelText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Georgia',
  },
  text: {fontSize: 16, fontWeight: 'bold', fontFamily: 'Georgia'},
  renderItem: {
    height: 40,
    width: windowWidth,
    borderBottomWidth: 0.5,
  },
  listEmpty: {height: 50, justifyContent: 'center', alignItems: 'center'},

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyListScreen;
