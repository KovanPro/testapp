import { StyleSheet  } from 'react-native';

const modalstyle = StyleSheet.create(
    {
     centeredView: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center",
          },
mainmodalView: {
      width: 300,
       height: 450,
        margin: 100,
         borderRadius: 5,
         backgroundColor:"#dfdfdf",
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
},
modalheaderclose:{
  width:20,
  height:20,
marginRight:10,    
  },
  mainmodalmenu:{
 
 paddingVertical:0,
 paddingLeft:5,
  },
  modalheaderico:{
    width:20,
    height:20,
 marginVertical:5, 
  },
  mainmenudiv:{
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal:3 
     },
  modalmenu:{
    paddingVertical:5,
    paddingLeft:5,
     },
 fontsize16:{
  paddingVertical:5,
  paddingLeft:5,
fontSize:16,
 },
  profilephotomodalview:{
    width: 250,
    height: 250,
    margin: 100,
    borderRadius: 5,
    backgroundColor:"#dfdfdf",
  // padding: 35,
  // alignItems: "center",
  // shadowColor: "#000",
  shadowOpacity: 0.25,
   shadowRadius: 4,
   elevation: 5
  },
 

}






    
    );
    export default modalstyle;
