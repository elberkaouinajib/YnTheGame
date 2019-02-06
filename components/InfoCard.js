import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import { Button,Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondDark,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#33373B',
    flexDirection: 'column',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: Colors.secondDark,
  }, trapezoid: {
    height: 0,
    width:40,
    borderBottomWidth: 20,
    borderBottomColor:  Colors.purpleDarkTheme,
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    marginBottom: 20,
    paddingLeft:6
  },title:{
    color:Colors.tintColor,
    fontSize: 18,
    fontWeight: '500',
  },subtitle:{
    color:Colors.textColorDarkTheme,
    fontWeight: '500',
  }
});

export default class InfoCard extends React.Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        remise:PropTypes.any,
      };
render() {
  const { title, subtitle, imageUrl,remise } = this.props;
  return (
  <View style={styles.container}>

    <View style={styles.leftPane}>
    <Image
          source={{uri:imageUrl}}
          style={{width: 120, height: 150}}
        />
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
      <View style={{flex:1}}>
          <View style={styles.trapezoid}>
              <Text style={{color:Colors.textColorDarkTheme}}>{remise}%</Text>
          </View>
      </View>

        <View style={{ flex: 1 }}>
        <Button
            title="Ajouter"
            buttonStyle={{backgroundColor:"#ce4538",height:32,width:100}}
            icon={<Icon
                type="materialIcons"
                name="add-shopping-cart"
                color="white"
            />}
            />  
        </View>
      </View>
    </View>

  </View>
    )
  }
}