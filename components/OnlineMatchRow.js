import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginLeft: 15,
    marginRight: 15,
    height:40,
    backgroundColor:Colors.secondDark,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color:Colors.textColorDarkTheme
  },
  photo: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default class OnlineMatchRow extends React.Component {
  static propTypes = {
    imageTeam1: PropTypes.string.isRequired,
    imageTeam2: PropTypes.string.isRequired,
    nameTeam1: PropTypes.string.isRequired,
    nameTeam2: PropTypes.string.isRequired,
  };

  render() {
    const { imageTeam1, imageTeam2,nameTeam1,nameTeam2} = this.props;
    return (
    <View style={styles.container}>
        <Image source={imageTeam1} style={styles.photo} />
        <Text style={styles.text}>
          {`${nameTeam1}`}
        </Text>
        <Text style={{color:Colors.tintColor}}>VS </Text>
        <Text style={styles.text}>
          {`${nameTeam2}`}
        </Text>
        <Image source={imageTeam2} style={styles.photo} />
    </View>
    )
  }
}