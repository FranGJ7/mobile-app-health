import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formContext:{
    flex:1,
       backgroundColor:"#ffffff",
       alignItems: "center",
       borderTopRightRadius: 20,
       borderTopLeftRadius: 20,
       paddingTop:30
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color: "#000000",
        fontSize:18,
        paddingLeft:20
    },
    input:{
        width:"90%",
        borderRadius:10,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10
    },
    ButtonCalculator:{
       borderRadius: 10,
       alignItems:"center",
       justifyContent:"center",
       width:"90%",
       backgroundColor:"#13293D",
       paddingTop:14,
       paddingBottom:14,
       marginLeft:12,
       margin:30
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%"
    },
    listImc:{
      marginTop:20,
    },
    resultImcItem:{
       fontSize:26,
       color:"#006494",
       
       height:50,
       width:"100%",
       paddingRight:20
    },
    textResultItemList:{
        color:"#12293D",
        fontSize:16,
        
    }
})

export default styles