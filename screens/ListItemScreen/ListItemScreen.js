import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

function ListItemScreen(props) {
  const {data} = props?.route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {data?.name}</Text>
      <Text style={styles.text}>Language: {data?.language}</Text>
      <Text style={styles.text}>Place: {data?.place}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <Button
          title="Go to My list"
          onPress={() => {
            props.navigation.navigate('MyList');
          }}
        />
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
  },
  buttonContainer: {flex: 1, gap: 10, justifyContent: 'flex-end'},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListItemScreen;
