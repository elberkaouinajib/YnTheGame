import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import { colors } from 'react-native-elements';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 8,
    height:40,
    backgroundColor:Colors.defaultDarkTheme,
    backgroundColor:Colors.defaultDarkTheme,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor:Colors.textColorDarkTheme
  },
  paris: {
    marginLeft: 12,
    fontSize: 16,
    color:Colors.tintColor,
  },
  critere: {
    marginLeft: 12,
    fontSize: 16,
    color:Colors.textColorDarkTheme
  },
});
export default class ParisRow extends React.Component {
  static propTypes = {
    paris: PropTypes.string.isRequired,
    critere: PropTypes.string.isRequired,
  };

  render() {
    const { critere,paris} = this.props;
    return (
    <View style={styles.container}>
        <Text style={styles.critere}>
          {`${critere}`}
        </Text>
        <Text style={styles.paris}>
          {`${paris}`}
        </Text>
    </View>
    )
  }
}