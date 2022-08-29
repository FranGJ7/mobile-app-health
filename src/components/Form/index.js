import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import styles from "./style";
import ResultImc from "./Resultimc";


  export default function Form(){

     const [height, setHeight]= useState(null)
     const [weight, setWeight]= useState(null)
     const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
     const [imc, setImc]= useState(null)
     const [textButton, setTextButton]= useState("Calcular")
     const [errorMessageHeight, setErrorMessageHeight] = useState(null)
     const [errorMessageWeight, setErrorMessageWeight] = useState(null)


     function imcCalculator(){
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
     }

     function validationImc(){
        if(weight && height != null){
            
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessageHeight(null)
            setErrorMessageWeight(null)
            
            return
        }
        
        weight != null ?  setErrorMessageWeight(null) : setErrorMessageWeight("Campo de peso obrigatório*")
        height != null ?  setErrorMessageHeight(null) : setErrorMessageHeight("Campo de altura obrigatório*")
        Vibration.vibrate();
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
     }
    

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
           <View style={styles.form}>
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
            onPress={()=> validationImc()}
            
            ><Text  style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
           </View>
           <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </Pressable>
    );
}