import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput} from "react-native"
import TaskStyles from "./TaskStyles";
import {Ionicons} from '@expo/vector-icons'



export default function TaskList({data,deleteTask}){
    return(
        <View style={TaskStyles.taskStyle}>
            <View>
                
                <Text  style={TaskStyles.renderText}>{data.task}</Text>
            
            </View>
            <TouchableOpacity
            onPress={()=>deleteTask(data)}
            style={TaskStyles.deleteButton}>
                <Text style={TaskStyles.deleteText}><Ionicons name="trash-outline" size={20} color='#fff'/></Text>
            </TouchableOpacity>
        </View>
        
    )
}