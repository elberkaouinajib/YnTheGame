import React from 'react';
import { Text, StyleSheet,View  } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

export default class CardElement extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    prix:PropTypes.string,
    remise:PropTypes.string,
  };

  
  render() {
    const { name, description, image,prix,remise} = this.props;
    return (
        <Card
          image={{uri: image}}
          containerStyle={{backgroundColor:Colors.secondDark,borderColor:null}}
          >
          <View  style={{alignItems: 'center',flexDirection: 'row',justifyContent: 'space-between', }}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.description}>{description.length<20?description:description.substring(0, 17)+'...' }</Text>
              <View style={styles.trapezoid}>
              < Text style={{color:Colors.textColorDarkTheme}}>{prix}€</Text>
              </View>
            </View>
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
        </Card>
    )
  }
}
const styles = StyleSheet.create({
 name:{
    color:Colors.tintColor,
    fontSize: 18,
    fontWeight: '500',
  },
  description:{
    color:Colors.textColorDarkTheme,
    fontWeight: '500',
  },
  trapezoid: {
    height: 0,
    width:60,
    borderBottomWidth: 20,
    borderBottomColor:  Colors.purpleDarkTheme,
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    paddingLeft:6
  },
});