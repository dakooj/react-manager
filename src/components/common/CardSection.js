import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const style = Object.assign({}, styles.containerStyle, props.style);
  return (
    <View style={style}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
