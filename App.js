import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeMovie from './screens/HomeMovie';
import DetailMovie from './screens/DetailMovie';
import Settings from './screens/Settings';

//Icon
import homecolorNavbar from './icon/home-color.png'
import homeNavbar from './icon/home.png'
import categorycolorNavbar from './icon/category.png'
import categoryNavbar from './icon/category.png'
import areacolorNavbar from './icon/area-color.png'
import areaNavbar from './icon/area.png'
import settingsNavbar from './icon/settings.png'

// const AppNavigator= createStackNavigator(
  
// )

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeMovie,
      navigationOptions: {
        // tabBarLabel: 'Home'
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Image  size={24} source={homecolorNavbar} />
            {/* <Icon style={[{color: tintColor}]} size={24} name='rocket'  /> */}
            {/* <Icon name="home" type="Ionicons"/> */}
          </View>
        ),
        activeColor: '#f0ed7a',
        inactiveColor: '#000000',
        barStyle: { backgroundColor: '#f0ed' },
      }
    },
    Trending: {
      screen: Settings,
      navigationOptions: {
        // tabBarLabel: 'Trending'
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Image size={24} source={areacolorNavbar} />
          </View>
        ),
        activeColor: '#f0ed',
        inactiveColor: '#000000',
        barStyle: { backgroundColor: '#f0ed7a' },
      }
    },
    // DetailMovie: {
    //   screen: DetailMovie,
    //   // navigationOptions: {
    //   //   visible: false,
        
    //   // }
      
    // },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(TabNavigator);