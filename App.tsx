import React,{useState,} from 'react';
import {StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/header';
import Todo from './components/todoitem';
import Add from './components/addtodo';

 function App () {
   const [todo,setTodo] = useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'},
   ])
   const [action,setAction] = useState('');

   const changeHandler = (inputText :string) => {
    setAction(inputText);
} 
     const pressHandler = (key : string) => {
     setTodo ((prevTodo)=>{
       return prevTodo.filter(todo => todo.key != key )
     })
     }

     const submitHandler = (action : string) => {
      if(action.length  > 3){
        setTodo((prevTodo) => {
          return [
            {text : action , key : Math.random().toString()},
            ...prevTodo
          ]
          })
      }else{
        Alert.alert('OOOPs','Action must be more than 3 chars',[
          {text:'Understood',onPress: ()=>console.log('Alert Closed')}
        ])
      }
      
     }
  
  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
      console.log('Keyboard dismissed')
    }}>
    <View style={styles.container}> 
      <Header/>
    <View style={styles.content}>
      <Add submitHandler={submitHandler}/>
      <View style={styles.list}>
         <FlatList
         data={todo}
         renderItem={({item})=>(
         <Todo item={item} pressHandler={pressHandler}/>
         )}
         />
      </View>
      </View>      
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    //backgroundColor:'#fff',
   
  },
  content:{
    flex:1,
    padding:40,
  },
  list:{
    flex:1,
    marginTop:20,
    
  }
  
  
});

export default App;