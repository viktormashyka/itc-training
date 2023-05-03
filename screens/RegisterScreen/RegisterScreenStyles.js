import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2B6B6',
  },
  inputContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: '#E5E0E0',
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
