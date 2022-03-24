import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#171d31',
        flexDirection:'column'
        
    },
    ArrowBackBtn:{
        right:40,
        margin:10,
        color:'#fff',
        fontSize:35,
        backgroundColor:'red'
    },
    newTaskTitle:{
        margin:10,
        fontSize:25,
        color:'#fff'
    },
    modalTextInput:{
        marginTop:10,
        marginLeft:10,
        padding:5,
        backgroundColor:'#fff',
        width:300,
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        

    },
    addNewTaskBtn:{
        width:300,
        height:40,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#171d31',
        borderWidth:5,
        borderColor:'#fff'
        
        

    },
    addNewTaskText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        
        

    }
})