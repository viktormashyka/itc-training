import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  outputContainer: {
    flex: 1,
    gap: 10,
    // backgroundColor: 'lightgreen',
    paddingHorizontal: 40,
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
