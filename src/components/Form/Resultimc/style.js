import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop:15,
        paddingTop:60,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
        fontSize:48,
        color:"#ff0043",
        fontWeight:"bold"
    },
    information:{
        fontSize:18,
        color:"#13293D",
        fontWeight:"bold"
    },
    numberImc:{
        fontSize:18,
        color:"#006494",
        fontWeight:"bold"
    },
    boxSharedButton:{
        width:"100%",
        alignItems:"center",
        marginTop:15,
        marginBottom:10,   
    },
    shared:{
        backgroundColor:"#1877f2",
        borderRadius:10,
        paddingBottom:5,
        paddingTop:5
    },
    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30

    }
});

export default styles