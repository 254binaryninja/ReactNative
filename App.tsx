import React,{useState} from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
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
      setTodo((prevTodo) => {
        return [
          {text : action , key : Math.random().toString()},
          ...prevTodo
        ]
        console.log(action)
        
      })
     }
  
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    //backgroundColor:'#fff',
   
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
    
  }
  
  
});

export default App;