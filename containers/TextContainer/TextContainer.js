import React from 'react';
import {Text} from 'react-native';

class TextContainer extends React.Component {
  render() {
    return (
      <>
        <Text>{this.props.children}</Text>
      </>
    );
  }
}

export default TextContainer;
