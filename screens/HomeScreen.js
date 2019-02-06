import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  View,
} from 'react-native';
import InfoText from '../components/InfoText'
import Cardelement from '../components/Card'
import Colors from '../constants/Colors';
import Carousel from 'react-native-snap-carousel';
import InfoTextSub from '../components/InfoTextSub'
import OnlineMatchRow from '../components/OnlineMatchRow'
import ParisRow from '../components/ParisRow'
import ScoreRow from '../components/ScoreRow'
import NewsCard from '../components/NewsCard'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export default class HomeScreen extends React.Component {
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
   static Paris = [
    {
     datematch :"1/1/2019",
     nameTeam1: "Team 1",
     nameTeam2 : "Team 2",
     imageTeam1:  require('../assets/images/person.png'),
     imageTeam2: require('../assets/images/person.png'),
     critereParis:
     [
       {
         critere :  "Victoire",
         paris : "Team 1"
       },
       {
         critere :  "Score min",
         paris : "3"
       },
       {
         critere :  "Premier mort",
         paris : "Joueur x"
       },
       {
         critere :  "Premier tueur",
         paris : "Joueur x"
       },
       {
         critere :  "Dernier Tueur",
         paris : "Joueur x"
       }
     ]
   }];

   static Scores = [
    {
     dateMatch :"1/1/2019",
     matches:
     [
       {
         imageTeam1:  require('../assets/images/person.png'),
         imageTeam2: require('../assets/images/person.png'),
         nameTeam1: "Team 1",
         nameTeam2 : "Team 2",
         scoreTeam1: 8,
         scoreTeam2: 9,
       },
       {
         imageTeam1:  require('../assets/images/person.png'),
         imageTeam2: require('../assets/images/person.png'),
         nameTeam1: "Team 3",
         nameTeam2 : "Team 4",
         scoreTeam1: 8,
         scoreTeam2: 9,
       },
       {
         imageTeam1:  require('../assets/images/person.png'),
         imageTeam2: require('../assets/images/person.png'),
         nameTeam1: "Team 5",
         nameTeam2 : "Team 6",
         scoreTeam1: 8,
         scoreTeam2: 9,
       }
     ]
   }];
   static Matchs = [
    {
      imageTeam1:  require('../assets/images/person.png'),
      imageTeam2: require('../assets/images/person.png'),
      nameTeam1: "Team 1",
      nameTeam2 : "Team 2"
    },
    {
      imageTeam1:  require('../assets/images/person.png'),
      imageTeam2: require('../assets/images/person.png'),
      nameTeam1: "Team 3",
      nameTeam2 : "Team 4"
    },
    {
      imageTeam1:  require('../assets/images/person.png'),
      imageTeam2: require('../assets/images/person.png'),
      nameTeam1: "Team 5",
      nameTeam2 : "Team 6"
    }
   ];
   static News = [
    {
      image:"https://i.cbc.ca/1.4548769.1519401666!/fileImage/httpImage/image.png_gen/derivatives/16x9_780/fake-news.png",
      title: "News 1",
      subject : "Sed finibus volutpat massa, vel rutrum sapien feugiat nec. Donec tincidunt nunc ac massa egestas venenatis. Fusce faucibus cursus massa, non placerat nunc porta id. Pellentesque aliquam cursus lacus a sodales. Sed at lacus vitae turpis porttitor bibendum. Integer at massa sed dui gravida posuere quis commodo neque. Nulla quis scelerisque justo. Mauris gravida erat ac iaculis mattis. Vestibulum tempus ultrices ultrices. Curabitur rutrum diam sed urna bibendum rhoncus. Duis finibus, mi eget tincidunt mollis, arcu felis lacinia ex, vitae pulvinar arcu est id lorem."
    },
    {
      image:"https://i.cbc.ca/1.4548769.1519401666!/fileImage/httpImage/image.png_gen/derivatives/16x9_780/fake-news.png",
      title: "News 2",
      subject : "Nulla facilisi. Donec hendrerit vel tortor eget laoreet. Donec rutrum cursus velit, et commodo turpis pulvinar sit amet. Vivamus ac dui sit amet turpis mattis faucibus. Suspendisse ultrices dictum enim, volutpat feugiat lectus ornare non. Aliquam laoreet dui ut blandit molestie. Ut vel sem non mi egestas venenatis in vitae sapien. Donec nec augue turpis. Pellentesque a enim nec quam ornare egestas. Aenean accumsan eu nisi id efficitur. Vivamus augue enim, eleifend ac ipsum eu, aliquet mollis tortor."
    },
    {
      image:"https://i.cbc.ca/1.4548769.1519401666!/fileImage/httpImage/image.png_gen/derivatives/16x9_780/fake-news.png",
      title: "News 3",
      subject : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus justo, ornare vitae dui sed, dictum tempus sem. Nunc blandit, erat sit amet dignissim ornare, libero sem rutrum velit, quis placerat dolor velit ac libero. Donec luctus id libero eu sodales. Pellentesque dictum iaculis purus. Sed quis imperdiet velit. Nullam leo arcu, convallis sit amet vehicula sit amet, vehicula nec risus. Donec at fringilla mauris. Aliquam erat volutpat. Morbi vel pretium ipsum. Fusce aliquam nunc a vehicula feugiat. Sed aliquam, sapien in porttitor elementum, est turpis aliquet libero, sed pulvinar augue nisi vel quam."
    },
   ];
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />
          </View>
          <InfoText text="News" />

          <FlatList
          data={HomeScreen.News}
          renderItem={({item}) => 

          <NewsCard 
              image={item.image}
              title={item.name}
              subject={item.subject}
          />}
          />

          <InfoText text="Bon plans" />
          <View style={styles.userRow}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={HomeScreen.Products}
              renderItem={this._renderItem}
              sliderWidth={this.state.slideWidth}
              itemWidth={this.state.itemWidth}
            />
             </View>

          <InfoText text="Vos paris" />


          <FlatList
          data={HomeScreen.Paris}
          renderItem={({item}) => 
          <View style={{marginBottom:15}}>
          <InfoTextSub text={item.datematch} />
          <OnlineMatchRow 
             imageTeam1={item.imageTeam1}
             imageTeam2={item.imageTeam2}
             nameTeam1={item.nameTeam1}
             nameTeam2={item.nameTeam2}
          />
          <FlatList
          data={item.critereParis}
          renderItem={({item}) => 
          <ParisRow 
          critere={item.critere}
          paris={item.paris}
      /> 
        }
          />
            </View>}
          />

          <InfoText text="Online" />
          <FlatList
          data={HomeScreen.Matchs}
          renderItem={({item}) => 

          <OnlineMatchRow 
             imageTeam1={item.imageTeam1}
             imageTeam2={item.imageTeam2}
             nameTeam1={item.nameTeam1}
             nameTeam2={item.nameTeam2}
          />}
          />

          <InfoText text="Scores" />
          <FlatList
          data={HomeScreen.Scores}
          renderItem={({item}) => 
          <View style={{marginBottom:15}}>
          <InfoTextSub text={item.dateMatch} />
          <FlatList
          data={item.matches}
          renderItem={({item}) => 
          <ScoreRow 
             imageTeam1={item.imageTeam1}
             imageTeam2={item.imageTeam2}
             nameTeam1={item.nameTeam1}
             nameTeam2={item.nameTeam2}
             scoreTeam1={item.scoreTeam1}
             scoreTeam2={item.scoreTeam2}
          />}
          />
            </View>}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1B',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
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
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
});
