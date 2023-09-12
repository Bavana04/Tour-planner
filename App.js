import {Text, View, Picker, TextInput, StyleSheet, Button,SafeAreaView} from 'react-native'

import {useState} from 'react'



const Dropdown=()=>
{

  const Ans= ()=>
  {

  //const [one,selectedValue] = useState(0);
  //const result = parseFloat(one) + parseFloat(selectedValue);

  
  const three= parseFloat(one) + parseFloat(selectedValue) + parseFloat(two);
   setvalue3(three) ;
  
  }

   
   const [selectedValue, setSelectedValue] = useState();
    const [one, setvalue] = useState("");
     const [two, setvalue2] = useState("");
     //Answer state
     const [three, setvalue3] = useState("");

   return(
        <SafeAreaView style={styles.con1}>
        <Text> Plan</Text>
        <Picker 
        selectedValue = {selectedValue}
        onValueChange = {(itemValue) => setSelectedValue(itemValue)}
        >

        <Picker.Item label = "Luxury" value = "60000" />
        <Picker.Item label = "Medium" value = "40000" />
        <Picker.Item label = "Low" value = "20000" />
        </Picker>

        <Text> Additional Trailer license</Text>
        <Picker 
        selectedValue = {one}
        onValueChange = {(itemValue) => setvalue(itemValue)}
        >

        <Picker.Item label = "6" value = "6000" />
        <Picker.Item label = "4" value = "4000" />
        <Picker.Item label = "2" value = "2000" />
        </Picker>
 
        <TextInput style = {styles.tex}
        placeholder = "Enter no of Persons"
        value={two}
      onChangeText = {(text) => setvalue2(text)}

       
      />

        

        <Button title="Check price" onPress = {Ans} />
      
<Text> Value:{three}</Text>

        <View>
   

      </View>
      </SafeAreaView>
        
   );
}

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#f0f0f0',
  
  },
  content: {
flex:1,
  },
  con1:
  {
  marginStart:600,
     backgroundColor:'pink',
  },

  tex:
    {
      height:10,
      padding:20,
      margin:10,
      borderBottomWidth: 1,
      borderColor:"#0000ff",
      borderRadius:50,

    },


});

export default Dropdown;



    
    