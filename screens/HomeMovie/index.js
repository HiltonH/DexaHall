import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, FlatList} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import DetailMovie from '../DetailMovie';

// Import Image
import homecolorNavbar from '../../icon/home-color.png'
import homeNavbar from '../../icon/home.png'
import categorycolorNavbar from '../../icon/category.png'
import categoryNavbar from '../../icon/category.png'
import areacolorNavbar from '../../icon/area.png'
import areaNavbar from '../../icon/area.png'
import settingsNavbar from '../../icon/settings.png'
import { createStackNavigator } from 'react-navigation-stack';

class HomeMovie extends React.Component {

  constructor(){
    super();
    this.state = { listMovie: null }
  }
  
  renderRow({item}){
    return (
      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('DetailMovie', { movie: item })} style={styles.Touchable}>
        <View style={{height: 200, width: 150}}>
          <View style={{height: 150, width: 150}}>
            <Image style={styles.imgAPI} source={{ uri: 'https://image.tmdb.org/t/p/w500'+ item.poster_path }}></Image>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{ item.original_title }</Text>
            <Text style={{fontSize: 12, fontWeight: '900'}}>Language: { item.original_language }</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  apiGetMovieData(){
     fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0a5bdfc9813a9b92dc8e6fe9785b0f77&language=en-US&page=1')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ listMovie: responseJson.results });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount(){
    this.apiGetMovieData();
  }

  render(){
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>

        {/* Header */}
        
        <View style={styles.header}>
          <Text style={styles.textheader}>World Movie List</Text>
        </View>

        {/* Main Body */}

        <View style={{ flex: 1, alignItems: 'center'}}>
          {/* <ScrollView> */}

              <FlatList
                data={this.state.listMovie}
                renderItem={this.renderRow.bind(this)}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
              />

          {/* </ScrollView> */}
        </View>

        {/* Navbar */}

        {/* <View style={styles.firstNavbar}>
          <View style={styles.secondNavbar}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('HomeMovie', { movie: item })}>
              <Image style={{height: 24, width: 24}} source={homecolorNavbar}></Image>
            </TouchableNativeFeedback>
          </View>
          
          <View style={styles.secondNavbar}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Trending')}>
              <Image style={{height: 24, width: 24}} source={categoryNavbar}></Image>
            </TouchableNativeFeedback>
          </View>
          <View  style={styles.secondNavbar}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('DetailMovie', { movie: item })}>
              <Image style={{height: 24, width: 24}} source={areaNavbar}></Image>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.secondNavbar}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('DetailMovie', { movie: item })}>
            <Image style={{height: 24, width: 24}} source={settingsNavbar}></Image>
          </TouchableNativeFeedback>
          </View>
        </View> */}
      </View>
    </>
  );
  }
};

const styles = StyleSheet.create({
  
  header: {
    height: 56, width: '100%', padding: 12, borderBottomWidth: 0.2, alignItems: 'center', justifyContent: 'center',
  },
  Touchable: {
    margin: 15, flex: 1, flexDirection: 'column', justifyContent: 'space-around',
  },
  imgAPI: {
    width: '100%', height: '100%', borderRadius: 8, borderWidth: 0.5,
  },
  textheader: {
    fontWeight: 'bold', fontSize: 24, color: '#00B6E8',
  },
  firstNavbar: {
    height: 56, flexDirection: 'row', borderWidth: 0.2,
  },
  secondNavbar: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  }

});

// const AppNavigator = createStackNavigator(
//   {
//     HomeMovie: HomeMovie,
//     DetailMovie: DetailMovie
//   },
//   {
//     // initialRouteName: 'HomeMovie',
//     // headerMode: 'none'
//   }
// );

export default HomeMovie;

// export default createStackNavigator(AppNavigator);