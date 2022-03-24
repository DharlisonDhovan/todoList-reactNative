import React, { useState,useCallback } from "react";
import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   StatusBar,
   TouchableOpacity,
   FlatList,
   Modal,
   TextInput
  } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Styles from './components/Styles'
import TaskList from './components/TaskList'
import ModalStyle from "./components/ModalStyle";

export default function App(){
  const [task,setTask]=useState([])
  const [modal,setModal]=useState(false)
  const [input,setInput]=useState('')
  
  function addTask(){
    if(input=='') return;
      const data={
        key:input,
        task:input
      }
      setTask([...task,data])
      setModal(false)
      setInput('')
    }
    const deleteTask=useCallback((data)=>{
      const comp=task.filter(result=>result.key !==data.key)
      setTask(comp)
    })
    

  return(
  <SafeAreaView style={Styles.container}>
    <StatusBar backgroundColor="#171d31"></StatusBar>
    <Text style={Styles.titleText}>
    Lista de Tarefas
    </Text>
  
  <FlatList
  showsHorizontalScrollIndicator={false}
  data={task}
  keyExtractor={(item)=>String(item.key)}
  renderItem={({item})=><TaskList data={item} deleteTask={deleteTask}/>}
  ></FlatList>

    <Modal animationType="slide" transparent={false} visible={modal}>
        <SafeAreaView style={ModalStyle.container}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity  onPress={()=>setModal(false)}>
              <Ionicons style={ModalStyle.ArrowBackBtn} name="md-arrow-back" />
            </TouchableOpacity>
            <Text style={ModalStyle.newTaskTitle}>Nova Tarefa</Text>
          </View>
          <TextInput style={ModalStyle.modalTextInput}
            textAlignVertical='top'
            multiline={true}
            value={input}
            onChangeText={(text)=>setInput(text)}
            placeholder="Adicione uma tarefa..."
          ></TextInput>
          <TouchableOpacity 
            onPress={addTask}
            style={ModalStyle.addNewTaskBtn}>
            <Text style={ModalStyle.addNewTaskText}>Adicionar</Text>
          </TouchableOpacity>
        </SafeAreaView>
    </Modal>
    
  <TouchableOpacity style={Styles.IosAddBtn} onPress={()=>setModal(true)}>
    <Ionicons name="ios-add" size={35} color="#fff"></Ionicons>
  </TouchableOpacity>
  </SafeAreaView>

)}
