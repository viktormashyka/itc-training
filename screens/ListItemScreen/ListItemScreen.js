import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

function ListItemScreen(props) {
  const {data} = props?.route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>User data:</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name: {data?.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Language: {data?.language}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Place: {data?.place}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        {/* <Button
          title="Go to My list"
          onPress={() => {
            props.navigation.navigate('MyList');
          }}
        /> */}
      </View>
    </View>
  );
}

ListItemScreen.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  place: PropTypes.isRequired,
};

ListItemScreen.default = {
  name: '',
  language: '',
  place: '',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'lightgreen',
  },
  buttonContainer: {flex: 1, gap: 10, justifyContent: 'flex-end'},
  labelText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Georgia',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'lightblue',
    borderRadius: 4,
    borderWidth: 5,
    width: 300,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
  },
});

export default ListItemScreen;
