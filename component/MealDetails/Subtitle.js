import { StyleSheet, Text, View } from "react-native";


const Subtitle=({children})=>{
    return(
        <View style={style.subtitleContainer}>  
        <Text style={style.subtitle}>{children}</Text>
  
        </View>
    )
}
export default Subtitle;

const style=StyleSheet.create({
   
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    
    },
    subtitleContainer:{
        padding:6,
        margin:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:12,
        marginVertical:4
    }
})