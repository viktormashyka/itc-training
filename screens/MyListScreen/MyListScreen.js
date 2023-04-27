import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const data = [
  {name: 'Edward', language: 'English', place: 'Uk'},
  {name: 'Viktor', language: 'Ukrainian', place: 'Scotland'},
  {name: 'Anusha', language: 'Hindi', place: 'India'},
  {name: 'Lakshmi', language: 'Tamil', place: 'India'},
];

function MyListScreen({navigation}) {
  const [listData, setListData] = useState(data);
  const [userName, setUserName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userPlace, setUserPlace] = useState('');

  const renderCellItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderItem}
        onPress={() => navigation.navigate('ListItem', {data: item})}>
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
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputContainer: {flex: 1, gap: 10, backgroundColor: '#F5F5F2'},
  inputContainer: {
    flex: 1,
    gap: 10,
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
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {fontSize: 16, fontWeight: 'bold'},
  renderItem: {
    height: 40,
    width: windowWidth,
    borderBottomWidth: 0.5,
  },
  listEmpty: {height: 50, justifyContent: 'center', alignItems: 'center'},
});

export default MyListScreen;
