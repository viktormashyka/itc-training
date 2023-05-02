import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
});
