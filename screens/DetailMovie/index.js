import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

//Import Image
import backButton from '../../icon/back-button.png'

class DetailMovie extends React.Component {

    constructor(props){
        super(props);
        this.state = { movie: this.props.navigation.getParam('movie') };
    }


render(){
    return (
        <View style={{backgroundColor: '#FFFFFF'}}>

            {/* Header */}

            <View style={styles.header}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('HomeMovie')} style={styles.imgAPI}>
                    <Image style= {{width: 24, height: 24}} source={backButton}></Image>
                </TouchableNativeFeedback>   
                <Text style={styles.textAPI}>World Movie List</Text>
                
            </View>    

            {/* Body */}
            
            <View style={{flex: 1, padding: 12, width: '50%'}}>

                {/* Poster */}

                <View style={styles.poster}>
                    <Image style={styles.imgPoster} source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.state.movie.backdrop_path}}></Image>
                </View>

                {/* Movie Text */}

                <View>
                    <Text style={{fontWeight: 'bold'}}>{ this.state.movie.title }</Text>
                    <View style={{flexDirection: 'row', marginHorizontal: 12}}>
                        <Text>{this.state.movie.vote_average }</Text>
                        <Text>{this.state.movie.release_date }</Text>
                    </View>
                    <Text>{this.state.movie.overview }</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    header: {
        alignItems: 'center', height: 56, padding: 12, flexDirection: 'row', borderBottomWidth: 0.2,
      },
      imgAPI: {
        width: 40, height: 40, justifyContent: 'center', marginRight: 40,
      },
      textAPI: {
        fontWeight: 'bold', fontSize: 24, color: '#00B6E8',
      },
      poster: {
        position: 'relative', width: '100%', height: 150, marginBottom: 16,
      },
      imgPoster: {
        height: '100%', width: '100%', borderRadius: 4,
      },

});

export default DetailMovie;