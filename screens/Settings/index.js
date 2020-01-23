import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, FlatList} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons'

// Import Image
import homecolorNavbar from '../../icon/home-color.png'
import homeNavbar from '../../icon/home.png'
import categorycolorNavbar from '../../icon/category-color.png'
import categoryNavbar from '../../icon/category.png'
import areacolorNavbar from '../../icon/area.png'
import areaNavbar from '../../icon/area.png'
import settingsNavbar from '../../icon/settings.png'

class Settings extends React.Component {

  constructor(){
    super();
    this.state = { listMovie: null }
  }
  
  renderRow({item}){
    return (
      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('DetailMovie', { movie: item })} style={{margin: 8, flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <View style={{height: 150, width: 150}}>
            <Image style={styles.imgAPI} source={{ uri: 'https://image.tmdb.org/t/p/w500'+ item.poster_path }}></Image>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{ item.original_title }</Text>
            <Text style={{fontSize: 12, fontWeight: '900'}}>Popularity: { item.popularity }</Text>
          </View>
      </TouchableNativeFeedback>
    );
  }

  apiGetMovieData(){
     fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0a5bdfc9813a9b92dc8e6fe9785b0f77')
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
          <Text style={styles.textheader}>Trending Movie</Text>
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
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('HomeMovie')}>
              <Image style={{height: 24, width: 24}} source={homeNavbar}></Image>
            </TouchableNativeFeedback>
          </View>
          
          <View style={styles.secondNavbar}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Trending')}>
              <Image style={{height: 24, width: 24}} source={categorycolorNavbar}></Image>
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
    height: 56, width: '100%', padding: 12, borderBottomWidth: 0.2, alignItems: 'flex-start',
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

export default Settings;