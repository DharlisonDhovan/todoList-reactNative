import { StyleSheet } from "react-native";

export default StyleSheet.create({
    taskStyle:{
    margin:10,
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:30,
    backgroundColor:'#fff',
    height:40,
    width:350,

    
    
    },
    deleteButton:{
        width:50,
        height:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginLeft:300,
        position:'absolute',
        color:'#ffF'
        
        
    },
    renderText:{
        color:'#000',
        fontWeight:'bold',
        flex:1,
        
        
    },
    deleteText:{
        color:'#000',
        fontWeight:'bold'
    }
})