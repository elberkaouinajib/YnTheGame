import React from 'react';
import { Avatar, ListItem,Button,Icon } from 'react-native-elements'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';
import PropTypes from 'prop-types'
import InfoText from '../components/InfoText'
import Colors from '../constants/Colors';
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
            <View style={styles.userRow}>
                <View style={styles.userImage}>
                    <Avatar
                        size="large"
                        rounded
                        source={require('../assets/images/person.png')}
                        activeOpacity={0.7}
                        />
                </View>
            <View>
            <Text style={{ fontSize: 16,color:Colors.textColorDarkTheme }}>EL BERKAOUI Najib</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              najib.elberkaoui@ynov.com
            </Text>
          </View>
        </View>

        <InfoText text="Account" />
        <View>
          <ListItem
            // chevron
            title="Username"
            titleStyle={{color:Colors.textColorDarkTheme }}
            rightTitle="Neb95"
            rightTitleStyle={{ fontSize: 15,color:Colors.textColorDarkTheme }}
            containerStyle={styles.listItemContainer}
          />
          <ListItem
            title="Adresse"
            titleStyle={{color:Colors.textColorDarkTheme }}
            rightTitle="75009 Paris"
            rightTitleStyle={{ fontSize: 15,color:Colors.textColorDarkTheme }}
            containerStyle={styles.listItemContainer}
          />
          <ListItem
            title="Language"
            titleStyle={{color:Colors.textColorDarkTheme }}
            rightTitle="Francais"
            rightTitleStyle={{ fontSize: 15,color:Colors.textColorDarkTheme }}
            containerStyle={styles.listItemContainer}
          />
           <ListItem
            title="YnMoney"
            titleStyle={{color:Colors.textColorDarkTheme }}
            rightTitle="1000"
            rightTitleStyle={{ fontSize: 15,color:Colors.textColorDarkTheme }}
            containerStyle={styles.listItemContainer}
          />
        </View>
          </View>
          <View style={styles.linkButtons} > 
        <Button
            title="Twitch"
            buttonStyle={{backgroundColor:"#502b93",height:32,width:95}}
            icon={<Icon
                type="material-community"
                name="twitch"
                color="white"
            />}
            />
        <Button
            title="Facebook"
            buttonStyle={{backgroundColor:"#4267b2",height:32,width:95}}
            icon={<Icon
                type="material-community"
                name="facebook"
                color="white"
            />}
            />
        <Button
            title="Google"
            buttonStyle={{backgroundColor:"#ce4538",height:32,width:95}}
            icon={<Icon
                type="material-community"
                name="google"
                color="white"
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
    height: 35,
    borderWidth: 0.5,
    marginBottom: 3,
    backgroundColor:Colors.defaultDarkTheme,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ListItemStyle: {
    color:Colors.textColorDarkTheme
  },
});
