import React, { Component } from 'react';  
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert } from 'react-native';  
import { Colors } from 'react-native/Libraries/NewAppScreen';
  
export default class FlatListBasics extends Component {  

  state = {
    data: []
  };
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100&inc=name")
    const json = await response.json();
    this.setState({data: json.results});
  }
  
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  

    getListViewItem = (item) => {  
        Alert.alert(item.key);  
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <FlatList  
                    data={this.state.data}
                   
                    renderItem={({item}) => (
                      <Text style = {styles.item}>
                        {item.name.title +". " + item.name.first + " " + item.name.last}
                      </Text>
                    )}
    
              />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    
        backgroundColor: "lavender",
    },  
    item: {  
        padding: 15,
        margin: 15,
        marginBottom: 10,  
        fontSize: 20,
        fontFamily: "sans-serif",
        height: 55, 
        borderWidth: 1,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 15,
    },  
})  
  
