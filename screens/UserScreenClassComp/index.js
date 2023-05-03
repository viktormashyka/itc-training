import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
// import {UserDetails} from '../../components';
import {UserDetailsFunc} from '../../components';
import _ from 'lodash';

class UserScreen extends React.Component {
  constructor(props) {
    console.log('userscreen > constructor');
    super(props);

    this.state = {
      user: {
        firstName: 'Viktor',
        lastName: 'Mashyka',
        gender: 'Male',
        age: '42',
        dob: '1/1/80',
        contactNumber: '+44444444',
        homePhone: '+55555555',
        education: 'MS',
        degree: 'CIS',
        // celcius: '30',
      },
      sampleTextinput: '',
    };
  }

  componentDidMount() {
    console.log('userscreen > componentdidmount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('userscreen > componentDidUpdate');
  }

  onSubmitBtnPress = () => {
    this.setState({
      user: {
        firstName: 'Firdous',
        lastName: 'Ali',
        gender: 'Male',
        age: '30',
        dob: '1/1/82',
        contactNumber: '+444444442',
        homePhone: '+555555552',
        education: 'MS2',
        degree: 'CIS2',
      },
    });
  };

  render() {
    console.log('usercreen > render');

    const {user} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#ECA1A1'}}>
        <ScrollView>
          {/* <UserDetails user={user} /> */}
          <UserDetailsFunc
            user={user}
            celcius={45}
            onSubmitBtnPress={this.onSubmitBtnPress}
          />
          {/* <Button
            title="Change celcius on 45"
            onPress={() => {
              this.setState(prevState => {
                return {...prevState, celcius: '45'};
              });
            }}
          /> */}
          <Button
            title="Change text on Ali"
            onPress={() => {
              this.onSubmitBtnPress;
            }}
          />
          <Button
            title="Change text on Viktor"
            onPress={() => {
              this.setState({
                user: {
                  firstName: 'Viktor',
                  lastName: 'Mashyka',
                  gender: 'Male',
                  age: '42',
                  dob: '1/1/80',
                  contactNumber: '+44444444',
                  homePhone: '+55555555',
                  education: 'MS',
                  degree: 'CIS',
                },
              });
            }}
          />

          <TextInput
            style={{
              margin: 20,
              backgroundColor: 'white',
              height: 40,
              paddingHorizontal: 10,
            }}
            onChangeText={changedText => {
              this.setState({sampleTextinput: changedText});
            }}
            value={this.state.sampleTextinput}
            placeholder="TextInput on userscreen"
          />
        </ScrollView>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default UserScreen;
