import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native"
import styles from "./style";
import ResultImc from "./Resultimc";


export default function Form() {

   const [height, setHeight] = useState(null)
   const [weight, setWeight] = useState(null)
   const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
   const [imc, setImc] = useState(null)
   const [textButton, setTextButton] = useState("Calcular")
   const [errorMessageHeight, setErrorMessageHeight] = useState(null)
   const [errorMessageWeight, setErrorMessageWeight] = useState(null)
   const [imcList, setImcList] = useState([])


   function imcCalculator() {
      let heightFormat = height.replace(",", ".")
      let totalImc= ((weight / (heightFormat * heightFormat)).toFixed(2))
      setImcList ((arr) => [...arr, {
         id: new Date().getTime(),
         imc: totalImc
      }]);
      setImc(totalImc)

   }

   function validationImc() {
      console.log(imcList)
      if (weight && height != null) {
         imcCalculator()
         setHeight(null)
         setWeight(null)
         setMessageImc("Seu imc é igual:")
         setTextButton("Calcular Novamente")
         setErrorMessageHeight(null)
         setErrorMessageWeight(null)
      } else {
         weight != null ? setErrorMessageWeight(null) : setErrorMessageWeight("Campo de peso obrigatório*")
         height != null ? setErrorMessageHeight(null) : setErrorMessageHeight("Campo de altura obrigatório*")
         Vibration.vibrate();
         setImc(null)
         setTextButton("Calcular")
         setMessageImc("Preencha o peso e altura")
      }
   }
   return (
      <View style={styles.formContext}>
         {imc==null?    
         <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
               style={styles.input}
               onChangeText={setHeight}
               value={height}
               placeholder="Ex:1.75"
               keyboardType="numeric"
            />
            <Text style={styles.errorMessage}>{errorMessageHeight}</Text>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput
               style={styles.input}
               onChangeText={setWeight}
               value={weight}
               placeholder="Ex:95.054"
               keyboardType="numeric"
            />
            <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
            <TouchableOpacity
               style={styles.ButtonCalculator}
               onPress={() => validationImc()}
            >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
         </Pressable>
         :
         <View style={styles.exibitionResultImc}>
         <ResultImc messageResultImc={messageImc} resultImc={imc}/>
         <TouchableOpacity
               style={styles.ButtonCalculator}
               onPress={() => validationImc()} 
            >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
         </View>
         }
         <FlatList style={styles.listImc} 
                   data={imcList.reverse()} 
                   showsVerticalScrollIndicator={false}
                   renderItem={({item})=>{
            return(
                  <Text style={styles.resultImcItem}>
                   <Text style={styles.textResultItemList}>Resultados IMC =
                   </Text>{item.imc}
                  </Text>
            )}}
            keyExtractor={(item)=>{
               item.id
            }}/>
         </View>
   );
} 