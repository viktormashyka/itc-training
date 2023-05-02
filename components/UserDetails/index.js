import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import _ from 'lodash';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props?.user?.firstName,
      lastName: props?.user?.lastName,
      gender: props?.user?.gender,
      // age: props?.user?.age,
      // dob: props?.user?.dob,
      // contactNumber: props?.user?.contactNumber,
      // homePhone: props?.user?.homePhone,
      // education: props?.user?.education,
      // degree: props?.user?.degree,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('userdetails > shouldComponentDidUpdate');
  //   return (
  //     !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
  //   );
  // }

  // PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate in PureComponent');
  //   return (
  //     !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
  //   );
  // }

  // //Component
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //   console.log('userdetails > shouldcomponentupdate');
  //   return !_.isEqual(nextProps, this.props);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('userdetails > componentDidUpdate');

    if (!_.isEqual(prevProps, this.props)) {
      // this.state.firstName = this.props.user.firstName;
      // this.state.lastName = this.props.user.lastName;
      // this.state.gender = this.props.user.gender;
      this.setState({
        firstName: this.props?.user?.firstName,
        lastName: this.props?.user?.lastName,
        gender: this.props?.user?.gender,
      });
    }

    //
    // shouldComponentUpdate(prevProps, prevState) {
    //   console.log('userdetails > shouldComponentUpdate');

    //   if (!_.isEqual(prevProps, this.props)) {
    //     this.state.firstName = this.props.user.firstName;
    //     this.state.lastName = this.props.user.lastName;
    //     this.state.gender = this.props.user.gender;
    //   }

    // this.setState({
    //   firstName: this.props?.user?.firstName,
    //   lastName: this.props?.user?.lastName,
    //   gender: this.props?.user?.gender,
    //   age: this.props?.user?.age,
    //   dob: this.props?.user?.dob,
    //   contactNumber: this.props?.user?.contactNumber,
    //   homePhone: this.props?.user?.homePhone,
    //   education: this.props?.user?.education,
    //   degree: this.props?.user?.degree,
    // });

    // console.log(this.props);
  }

  renderPersonalFields = () => {
    const {firstName, lastName, gender} = this.state;

    return (
      <>
        <TextInput
          style={[styles.inputField]}
          onChangeText={changedText => {
            this.setState({firstName: changedText});
          }}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            this.setState({lastName: changedText});
          }}
          value={lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            this.setState({gender: changedText});
          }}
          value={gender}
          placeholder="Gender"
        />
      </>
    );
  };

  render() {
    console.log('userdetails > render');

    return <View style={{flex: 1}}>{this.renderPersonalFields()}</View>;
  }
}

export default UserDetails;
