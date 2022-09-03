 import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create(
    {
     container:{
      flex:1,
      marginTop:40,
       
     },
    
   
      header: { 
         
        height:40,   
    paddingStart:35,
       paddingVertical:5,
        backgroundColor: "#D5DBDB",
      
        flexDirection: "row",
        flexWrap: "wrap",
      },
   
      menuimg: {  
        flex:1,
        marginHorizontal:5,
        width: 30,
        height: 30,
      },   
  



      centeredView: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center",
       
      },
      modalView: {
      width: 230,
       height: 450,
        margin: 100,
         borderRadius: 5,
         backgroundColor:"#D5DBDB",
       // padding: 35,
       // alignItems: "center",
       // shadowColor: "#000",
       shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
     
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        
        
      },
      modalText: {
      //  marginBottom: 15,
        textAlign: "center"
      },
modalheader:{
 
 borderTopLeftRadius:5,
 borderTopRightRadius:5,
  height:25,
  backgroundColor:"#ADAEFB",
  justifyContent:"flex-end",
    alignItems:"flex-end", 
    flexDirection: "row",
   // flexWrap: "wrap",
},
modalheaderclose:{
  width:25,
  height:25,
marginRight:0,
 marginStart:120, 
paddingTop:5,  
backgroundColor:"#ECECEB",
 
  },
  modalmenu:{
 
 paddingVertical:5,
 paddingLeft:5,
  },
  modalheaderico:{
    width:20,
    height:20,
 marginVertical:5, 
  },
  menudiv:{
    flexDirection: "row",
    flexWrap: "wrap", 
    
  }
  ,  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  }
    
    );
    export default styles;
