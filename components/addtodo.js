import React,{useState} from 'react';
import {StyleSheet, Text, View , TextInput,Button} from 'react-native';

export default function Add({submitHandler}){
const [action,setAction] = useState('');

   const changeHandler = (val) => {
       setAction(val);
   } 
    return (
        <View>
           <TextInput
           style={styles.input}
           placeholder='new to do.....'
           onChangeText={setAction}
           />
           <Button onPress={()=> submitHandler(action)} title="Add... to" color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
   input:{
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:6,
      borderBottomWidth:1,
      borderBottomColor:'#ddd'
   }
})