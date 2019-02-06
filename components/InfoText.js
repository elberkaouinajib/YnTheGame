import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors';
import { colors } from 'react-native-elements';

const styles = StyleSheet.create({
  trapezoid: {
    height: 0,
    borderBottomWidth: 30,
    borderBottomColor: Colors.tintColor,
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    marginBottom: 10,
    marginTop: 15,
  },
  infoText:{
    fontSize: 23,
    marginLeft: 20,
    color: Colors.textColorDarkTheme,
    fontWeight: '500',
  }
})
const InfoText = ({ text }) => (
  <View style={styles.trapezoid}>
        <Text style={styles.infoText}>{text}</Text>
  </View>
)

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InfoText