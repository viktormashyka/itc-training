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

import {UserForm} from '../../components';

import {ModalForm} from '../../components';

const windowWidth = Dimensions.get('window').width;

const data = [
  {name: 'Edward', language: 'English', place: 'England'},
  {name: 'Viktor', language: 'Ukrainian', place: 'Scotland'},
  {name: 'Anusha', language: 'Hindi', place: 'India'},
  {name: 'Lakshmiravali', language: 'Tamil', place: 'India'},
];

function MyListScreen(props) {
  const [listData, setListData] = useState(data);

  const [jumpText, setJumpText] = useState('');

  useEffect(() => {
    if (props?.route?.params?.owner) {
      setJumpText(props?.route?.params?.owner);
    }
  }, [props]);

  const renderCellItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderItem}
        onPress={() => props.navigation.navigate('List item', {data: item})}>
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

  const renderFlatList = () => {
    return (
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
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {renderFlatList()}
        <UserForm
          onFormSubmit={userObject => {
            setListData([...listData, userObject]);
          }}
        />
        <ModalForm />
      </View>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
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
});

export default MyListScreen;
