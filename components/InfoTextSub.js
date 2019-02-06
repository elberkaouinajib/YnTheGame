import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors';
import { colors } from 'react-native-elements';

const styles = StyleSheet.create({
  trapezoid: {
    height: 0,
    width:200,
    borderBottomWidth: 20,
    borderBottomColor: Colors.purpleDarkTheme,
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    marginBottom: 15,
    alignItems: 'center',
  },
  infoText:{
    fontSize: 16,
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