import React from 'react';
import { Card, ListItem,Button,Icon } from 'react-native-elements'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import PropTypes from 'prop-types'
import Cardelement from '../components/Card'
import InfoCard from '../components/InfoCard'
import Colors from '../constants/Colors';
import Carousel from 'react-native-snap-carousel';
import InfoText from '../components/InfoText'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  

  state = {
    pushNotifications: true,
    slideHeight : viewportHeight * 0.36,
    slideWidth : wp(75),
   itemHorizontalMargin : wp(2),
   
   sliderWidth : viewportWidth,
   itemWidth :  wp(75) + wp(2) * 2,
  }

  _renderItem ({item, index}) {
    return (
      <Cardelement
      key={index}
      image={item.image}
      name={item.name}
      description={item.description}
      prix={item.prix}
      remise={item.remise}
      />
      
    );
}

 static Products = [
  {
     name: 'Product 1',
     image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
     description: "This is the description of product 1",
     prix:115,
     remise : 15
  },
  {
    name: 'Product 2',
    image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
    description: "This is the description of product 2",
    prix:200,
    remise : 20
 },
 {
  name: 'Product 3',
  image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
  description: "This is the description of product 3",
  prix:60,
  remise : 13
},
{
  name: 'Product 4',
  image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
  description: "This is the description of product 4",
  prix:800,
  remise : 11
},
{
  name: 'Product 5',
  image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
  description: "This is the description of product 5",
  prix:43,
  remise : 12
},
{
  name: 'Product 6',
  image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
  description: "This is the description of product 6",
  prix:28,
  remise : 18
},
{
  name: 'Product 7',
  image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
  description: "This is the description of product 7",
  prix:1000,
  remise : 22
},
{
  name: 'Product 8',
  image:"https://images.yourstory.com/2016/08/125-fall-in-love.png",
  description: "This is the description of product 8",
  prix:80,
  remise : 30
},
 ];

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
            <InfoText text="Bons plans" />
            <View style={styles.userRow}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ShopScreen.Products}
              renderItem={this._renderItem}
              sliderWidth={this.state.slideWidth}
              itemWidth={this.state.itemWidth}
            />
             </View>
          </View>
          <InfoText text="Reductions" />
          <View  > 
          <FlatList
          data={ShopScreen.Products}
          renderItem={({item}) => 

          <InfoCard 
              imageUrl={item.image}
              title={item.name}
              subtitle={item.description}
              remise={item.remise}
          />}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultDarkTheme,
  },
  contentContainer: {
    marginRight:10,
    marginLeft:10,
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  linkButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    backgroundColor:Colors.defaultDarkTheme
  },
  ListItemStyle: {
    color:Colors.textColorDarkTheme
  },
});
