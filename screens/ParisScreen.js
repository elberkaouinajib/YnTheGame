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
import Cardelement from '../components/Card'
import Colors from '../constants/Colors';
import InfoText from '../components/InfoText'
import InfoTextSub from '../components/InfoTextSub'
import OnlineMatchRow from '../components/OnlineMatchRow'
import ParisRow from '../components/ParisRow'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export default class ParisScreen extends React.Component {
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
      imageUrl={item.imageUrl}
      title={item.title}
      subtitle={item.subtitle}
      buttonText={item.buttonText}
      width={15}
      
      />
      
    );
}
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
  },
   {
    datematch :"2/1/2019",
    nameTeam1: "Team 3",
    nameTeam2 : "Team 4",
    imageTeam1:  require('../assets/images/person.png'),
    imageTeam2: require('../assets/images/person.png'),
    critereParis:
    [
      {
        critere :  "Victoire",
        paris : "Team 4"
      },
      {
        critere :  "Score min",
        paris : "10"
      },
      {
        critere :  "Premier mort",
        paris : "Joueur x"
      },
      {
        critere :  "Survivant",
        paris : "Joueur x"
      },
      {
        critere :  "Dernier Tueur",
        paris : "Joueur x"
      }, 
    ]
  },
  {
    datematch :"3/1/2019",
    nameTeam1: "Team 5",
    nameTeam2 : "Team 6",
    imageTeam1:  require('../assets/images/person.png'),
    imageTeam2: require('../assets/images/person.png'),
    critereParis:
    [
      {
        critere :  "Victoire",
        paris : "Team 1"
      },
      {
        critere :  "Dif score min",
        paris : "8"
      },
      {
        critere :  "Survivant",
        paris : "Joueur x"
      },    
      {
        critere :  "Score min",
        paris : "10"
      },     
      {
        critere :  "Premier tueur",
        paris : "Joueur x"
      }
    ]
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
          <InfoText text="Paris" />
          <FlatList
          data={ParisScreen.Paris}
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
