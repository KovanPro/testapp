import React from 'react';
import { useState ,useLayoutEffect,useRef} from "react";
import {Modal, FlatList,  Alert, View, Text ,Image ,TouchableOpacity,Platform ,TextInput,Button ,BackHandler,  } from 'react-native';
import {Bubble, GiftedChat,   Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/mainstyle';
import app from './firebase';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
// import TextTicker from 'react-native-text-ticker'
import { Divider } from 'react-native-paper';
import modalstyle from './styles/modalstyle';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
import    './i18n'
import {useTranslation} from 'react-i18next';
import CountrySelectDropdown from "react-native-searchable-country-dropdown"
import {getData, getName, overwrite} from 'country-list'
import { ScrollView } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
// import components 
import userinfo from './components/userinfomodal';
import editprofile from './components/editprofile';
import editname from './components/editname';
import aboutroommodalfun from './components/aboutroommodal';
import inroomcontrolmodal from './components/inroomcontrol';
//
import { use } from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
  const ReactNative = require('react-native');
try {
  ReactNative.I18nManager.allowRTL(false);
} catch (e) {
  console.log(e);
}

const firebase = require("firebase");
require("firebase/firestore");
const db = firebase.firestore();
var storage = firebase.storage();
 const auth=firebase.auth();



// notfications 
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



  const ChatScreen = () => {
 
    let STORAGE_KEY = 'roomid';

    let chatid="HUQqrwtSnnT00pd9mGcS" ;  
     

    const readData = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
    
        if (value !== null) {
         setidd(current=> value);
        chatid=value;
        getmessages(); 
         
        }
 
      } catch (e) {
        getmessages();

        console.log('Failed to fetch the input from storage');
      }
    };
const [updateadressstate,setupdateadressstate]=useState(true);


    useLayoutEffect( () => {
    readData();
    logincheck();
    getUserGeolocationDetails();
    getallusers();
    getPermission();
    getrooms();
    getprvtrooms();
    getcountryrooms();

      setInterval(() => {
        getuserlastmsg();
        updateaddress();
    }, 7000);

  }, [])


  const saveroomid = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value)
     } catch (e) {
      console.log("faild add ")
     }
  }

 
// last room from local 
const [storedNumber, setStoredNumber] = React.useState('');



// Modal's views
  const [modalVisible, setModalVisible] = useState(false); 
  const [isActive, setIsActive] = useState(true);
  const [photomodalVisible, setphotoModalVisible] = useState(false); 
  const [infomodalVisible, setinfoModalVisible] = useState(false); 
  const [roommodal, setroommodal] = useState(false); 
  const [cummunitymodal, setcummunitymodal] = useState(false); 
  const [mycontactsmodal, setmycontactsmodal] = useState(false); 
  const [ignorelistmodal, setignorelistmodal] = useState(false); 
  const [privatemsgmodal,setprivatemsgmodal]=useState(false);
  const [privatemsgmodal2,setprivatemsgmodal2]=useState(false);
  const[pursehistorymodal,setpursehistorymodal]=useState(false);
  const [sendmsgmodal,setsendmsgmodal]=useState(false);
  const [islogin,setislogin]=useState(false); // remeber this is for modal only
  const [importmsgmodal,setimportmsgmodal] =useState(false);
  const [profilemodal, setprofilemodal] = useState(false); 
  const [prvtmsghistorymodal,setprvtmsghistorymodal]=useState(false);
  const [comingsoonmodal, setcomingsoonmodal] = useState(false); 
  const [changenamemodal, setchangenamemodal] = useState(false);  
  const [changepasswordmodal, setchangepasswordmodal] = useState(false); 
  const [createroommodal, setcreateroommodal] = useState(false);  
  const [changephotomodal, sethangephotomodal] = useState(false);  
  const [abuotroommodal, setabuotroommodal] = useState(false);  
  const [userinfomodal, setuserinfomodal] = useState(false);  
  const [searchmodal, setsearchmodal] = useState(false);  
  const [searchroommodal, setsearchroommodal] = useState(false);  
  const [puresmodal, setpuresmodal] = useState(false); 
  const [merchantsmodal, setmerchantsmodal] = useState(false); 
  const[sendpursemodal,setsendpursemodal]=useState(false); 
  const [gameonemodal, setgameonemodal] = useState(false);    
  const [settingsmodal, setsettingsmodal] = useState(false);
  const[changeuseridmodal,setchangeuseridmodal]  = useState(false);
  const[changeusermsgmodal,setchangeusermsgmodal]=useState(false);
  const[admininfomodal,setadmininfomodal]=useState(false);
  const[chatmodal,setchatmodal]=useState(false);
  const[recevedmsgmodal,setrecevedmsgmodal]=useState(false);
  const[votemodal,setvotemodal]=useState(false);
  const[changeroomidmodal,setchangeroomidmodal]=useState(false);
  const[userinroommodal,setuserinroommodal]=useState(false);
  const[changecitymodal,setchangecitymodal]=useState(false);
  const[roomcntrol,setroomcntrol]=useState(false);
  const[invitemodal,setinvitemodal]=useState(false);
  const[ratingmodal,setratingmodal]=useState(false);
  const[changepvrtmsgmodal,setchangepvrtmsgmodal]=useState(false);
  const[changecountrymodal,setchangecountrymodal]=useState(false);
  const[changemerchantmodal,setchangemerchantmodal]=useState(false);
  const[privatemsgshow,setprivatemsgshow]=useState(false);
  const[publicroommodal,setpublicroommodal]=useState(false);
  const[prvtroommodal,setprvtroommodal]=useState(false);
  const[countryroommodal,setcountryroommodal]=useState(false);
  const[roomsmallmodal,setroomsmallmodal]=useState(false);



 //Data and variable 
const [messages, setMessages] = useState([]);                
const [details, setDetails] = useState(null);          
const geoaddress=useRef();    
const [userDetails, setUserDetails] = useState([''])      
const [rooms, setRoms] = useState([]);                   
const [idd, setidd] = useState("HUQqrwtSnnT00pd9mGcS");  //const [idd, setidd] = useState("HUQqrwtSnnT00pd9mGcS");                      
const[pursehistory,setpursehistory]=useState();  
const [mycontacts, setmycontacts] = useState([]);       
const [prvtmessages, setprvtmessages] = useState([]); 
const [prvthistorymessages, setprvthistorymessages] = useState([]);  
const [msgindex, setmsgindex] = useState([]);   
const [allusersindex, setallusersindex] = useState([]);   
const [cmodalname,setcmodalname]=useState("");       
const [prvttext, setprvttext] = useState('');
const [selecteduserid,setselecteduserid]=useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState(''); 
const [random, setrandom] = useState(Math.floor(Math.random() * 99999) + 10022);
const [randomroomid, setrandomroomid] = useState(Math.floor(Math.random() * 9999) + 1111);
const [imageUrl, setImageUrl] = useState('');
const [currentuserDetails, setcurrentuserDetails] = useState(['']);
const [importmsg,setimportmsg] = useState([]); 
const [changename, setchangename] = useState();
const [createroomname, setcreateroomname] = useState('');
const [roomdata, setroomdata] = useState([]);
const [image, setImage] = useState(null);
const [uploading, setUploading] = useState("");
const[searchtxt,setsearchtxt]=useState("");
const [searcheduser, setsearcheduser] = useState([]);         
const [searchedrooms, setsearchedrooms] = useState([]);         
const [merchants, setmerchants] = useState(['']);         
const [sendpuresval, setsendpuresval] = useState(0);    
const [checked, setChecked] =  useState('first');
const [picknumber, setpicknumber] = useState(0); 
const [isSingnin,setisSingnin]=useState();
const [havecrownthisroom,sethavecrownthisroom]=useState(false);
const [prvtrooms, setprvtrooms] = useState([]);  
const [countryrooms, setcountryrooms] = useState([]);  
const [country, setCountry] = useState();
const[roomtype,setroomtype]=useState("public")
const[minitem,setminitem]=useState(0);
const[maxitem,setmaxitem]=useState(9);
const[click,setclick]=useState();
const[tempuser,settempuser]=useState([]);
const[maxuser,setmaxuser]=useState(0);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

                  
const myTextInput = React.createRef();
var loginout = isSingnin ? require('./images/log-out.png') : require('./images/enter.png');
 
 

const {t, i18n} = useTranslation();
  const [currentLanguage,setLanguage] =useState('ar');
const changeLanguage = value => {
  i18n
    .changeLanguage(value)
    .then(() => setLanguage(value))
    .catch(err => console.log(err));
};



 const userperid=()=>{
  // alert(roomdata?.joinedusers[1].userid)
for(var i=0;i<roomdata?.joinedusers?.length;i++)
{
  app.firestore().collection('users').doc(roomdata?.joinedusers[i]?.userid).get().then(snapshot => {
    settempuser(prevArray => [...prevArray, snapshot.data()])
   }); 
}



 }
 




  const act = () => {
    setIsActive(current => true);
  };
  const diact = () => {
    setIsActive(current => false);
  };
  const modal =()=>{
    setModalVisible(current => true); 
  }
  const modaldic =()=>{
    setModalVisible(current => false);   
  }
  
 

//geting ip 
  const getUserGeolocationDetails = async  () => {
   await  fetch("https://geolocation-db.com/json/86f5f280-f4eb-11ec-8676-4f4388bc6daa")
.then(response => response.json())
        .then(data => setDetails(data)  );
};

const updateaddress =    ()=>{
 
  if(isSingnin&&details.country_code.length==2&&updateadressstate==true)
  {  setupdateadressstate(current=>false);
    var _update = db.collection("users").doc(app.auth().currentUser.uid);
    _update.update({
      orginaladdress:{
        oip :details.IPv4!=null?details.IPv4:currentuserDetails.address.ip ,  
        oCity : details.city?details.city:currentuserDetails.address.City , 
        ocountry_name :  details.country_name?details.country_name:currentuserDetails.address.country_name ,  
      },
    lastvisit: new Date(),
   } );
   setupdateadressstate(current=>false);
  }

}


//signout function 
  const signOut = () => {
    
    app.auth().signOut().then(() => {
   console.log("signout sucssesfull");
    setislogin(current=>true);
    setisSingnin(current=>false);
    }).catch((error) => {
      console.log(error);

    // An error happened.
    });
    setcurrentuserDetails(null);
    setUserDetails(null);
  }
 
//  function for getting selected user  by send value and open user modal
 const getuserdata =  (value)=>{ 
 
  console.log(value)

     app.firestore().collection('users').doc(value).get().then(snapshot => {
       
       setUserDetails(snapshot.data())
       console.log("data");
    
    });
  
     
   //  console.log(userDetails);

}

// function get singined userdata
const getcurrentuserdata = async ()=>{ 
  
  await   app.firestore().collection('users').doc(app.auth()?.currentUser?.uid).get().then(snapshot => {
       
       setcurrentuserDetails(snapshot.data())
     });
 
}
const checkcrowninroom = async ()=>{ 
  
  db.collection("rooms").where(firebase.firestore.FieldPath.documentId() ,"==",idd).where("crownusers", "array-contains", app.auth().currentUser.uid) 
  .get()
  .then((querySnapshot) => {
    if(!querySnapshot.empty){
       
        sethavecrownthisroom(true);
}
else{
  
  sethavecrownthisroom(false);
}

})
 
}

// give crown in this room
const givecrownn = async()=>{
  var disabled = db.collection("rooms").doc(idd);
 disabled.update({
  crownusers:firebase.firestore.FieldValue.arrayUnion(selecteduserid),
 
} )

}
 
// invite to room
const invitetoroom = async(_id,cid,name)=>{


  Alert.alert(t("Alert"),t("do you wanna invite :  ( "+ name+ " ) with id :  "+cid),
  [
     
    {
      text: "Yes",
      onPress: () => { {
     
        var invite = db.collection("rooms").doc(idd);
        invite.update({
          invited:firebase.firestore.FieldValue.arrayUnion(_id),
       
      } );
}
       },
    },{
      text: "No",
    },
  ]
);





}
  const  makeroomprivate = ()=>{
  
    Alert.alert(t("Alert"),t("do you wanna change room ?"),
  [
     
    {
      text: "Yes",
      onPress: () => { {
     
        var type = db.collection("rooms").doc(idd);
        type.update({
          type:"private",  
      } );
      }

       },
    },{
      text: "No",
    },
  ]
);
   
}

const  makeroomcountry= ()=>{
 
 
  Alert.alert(t("Alert"),t("do you wanna change room ?"),
  [ {
      text: "Yes",
      onPress: () => { 

   {     db.collection("rooms").doc(idd).update({
          type:"country",
       
      } );}

       },
    },{
      text: "No",
    },
  ]
);
 
 
}

const  makeroompublic= async()=>{
 
 
  Alert.alert(t("Alert"),t("do you wanna change room ?"),
  [
     
    {
      text: "Yes",
      onPress: () => { 

{        var type = db.collection("rooms").doc(idd);
        type.update({
          type:"public",
       
      } );}

       },
    },{
      text: "No",
    },
  ]
);
 
 
}

// function getting roms 
const getrooms= async ()=>{
  const unsubscribe = app.firestore().collection("rooms").where("type","==","public").orderBy('rank', 'desc').onSnapshot(snapshot => setRoms(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    rank: doc.data().rank,
    name: doc.data().name,
    nofusers: doc.data().nofusers,
    limit:doc.data().limit,
    joinedusers:doc.data().joinedusers

      }))
    ));
   return unsubscribe;
}

const getprvtrooms= async ()=>{
  const unsubscribe = app.firestore().collection("rooms").where("type","==","private").orderBy('rank', 'desc').onSnapshot(snapshot => setprvtrooms(
    snapshot.docs.map(doc => ({
    _id: doc.id,
    rank: doc.data().rank,
    name: doc.data().name,
    
      }))
    ));
   return unsubscribe;
}

const getcountryrooms= async ()=>{
  const unsubscribe = app.firestore().collection("rooms").where("type","==","country").orderBy('rank', 'desc').onSnapshot(snapshot => setcountryrooms(
    snapshot.docs.map(doc => ({
    _id: doc.id,
    rank: doc.data().rank,
    name: doc.data().name,
    
      }))
    ));
   return unsubscribe;
}


const getuserlastmsg = async ()=>{
  getlastprvt();
  const unsubscribe= app.firestore().collection('users').doc(app.auth()?.currentUser?.uid).get().then(snapshot => {
       setrecevedmsgmodal(snapshot?.data()?.isnewmsg);

   
  });
  return unsubscribe;
 }
getuserlastmsg();
 
//create room 
const createroom= (roomtype)=>{
getallrooms();
if(allrooms?.count>10)
{
  app.firestore().collection('rooms').add({  
    ispublic:true,
    rank:0,
    name:createroomname,
    nofusers:1,
    registareddate: new Date(),
    limit:0,
    type :roomtype?roomtype:"public",
    id:Number(1100+allrooms.count),
    creator:{
      creatorid:app.auth().currentUser?.uid,
      creatorname:currentuserDetails?.name,
    },
    owener:{
      owenerid:app.auth().currentUser?.uid,
      owenername:currentuserDetails?.name,
    },
    
    }).catch((error) => {
      console.error("Error adding document: ", error);
  });


  var count = db.collection("counter").doc("roomcounter");
  count.update({
    count: Number(allrooms.count+1) ,
 } )  
alert("room created ")
}
else{
  alert("can't find room id try again");
  getallrooms();
}

  setcreateroomname(null);
}



//get merchents

const getmerchents =  ()=>{
  
   const unsubscribe = app.firestore().collection("users")
  .where("crown","==",true).orderBy('merchantin', 'asc'). onSnapshot(snapshot => setmerchants(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    purse: doc.data().purse,
    name: doc.data().name,
    merchantin:doc.data().merchantin,
 
      }))
    ));
   return unsubscribe;
   
}


const [allusers,setallusers]=useState();

const getallusers =  ()=>{
   
    db.collection("counter").doc("usercounter").get().then((doc) => {
        if (doc.exists) {
            setallusers(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

 
   
    
}

const [allrooms,setallrooms]=useState([]);

const getallrooms =  ()=>{
   
    db.collection("counter").doc("roomcounter").get().then((doc) => {
         
          setallrooms(doc.data());
 
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

 
   
    
}


const getsearchuser =  ()=>{
  
  const unsubscribe = app.firestore().collection("users").orderBy('id', 'asc').limit(500).onSnapshot(snapshot => setsearcheduser(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    id: doc.data().id,
    name: doc.data().name,
      }))
    ));
   return unsubscribe;
    
}
const getalluserdatas =  ()=>{
  
  const unsubscribe = app.firestore().collection("users").onSnapshot(snapshot => settempuser(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    id: doc.data().id,
    name: doc.data().name,
    gender: doc.data().gender,
      }))
    ));
   return unsubscribe;
    
}

const getsearchuserbyid =  ()   =>{
  setsearcheduser(['']);
  const unsubscribe = app.firestore().collection("users").where("id","==",Number(searchtxt)).onSnapshot(snapshot => setsearcheduser(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    id: doc.data().id,
    name: doc.data().name,
      }))
    ));
   return unsubscribe;
 }

const getsearchuserbyname =    ()=>{
  setsearchedrooms(['']);
    const unsubscribe = app.firestore().collection("users").where("name","==",searchtxt).onSnapshot(snapshot => setsearchedrooms(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    id: doc.data().id,
    name: doc.data().name,
      }))
    ));
   return unsubscribe;
    
}

const getsearchroombyname =    ()=>{
  setsearcheduser(['']);
    const unsubscribe = app.firestore().collection("rooms").where("name","==",searchtxt).onSnapshot(snapshot => setsearcheduser(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    id: doc.data().id,
    name: doc.data().name,
    type:doc.data().type,
      }))
    ));
   return unsubscribe;
    
}
const getsearchroombyid =  ()   =>{
  setsearchedrooms(['']);
  const unsubscribe = app.firestore().collection("rooms").where("id","==",Number(searchtxt)).onSnapshot(snapshot => setsearchedrooms(
    snapshot.docs.map(doc => ({
   _id: doc.id,
    id: doc.data().id,
    name: doc.data().name,
    type:doc.data().type,
      }))
    ));
   return unsubscribe;
 }
//join room 

const selectroom = (roomid,roomname) => {

if(isSingnin){
      if(currentuserDetails?.name!=null)
      {
        console.log("not getiing-----------------")}
      else
      {
       getcurrentuserdata() ;
       console.log(" getiing//////////////")
     }
     
     
     db.collection("rooms").where(firebase.firestore.FieldPath.documentId() ,"==",roomid).where("ignored", "array-contains", app.auth().currentUser.uid)
     .get()
     .then((querySnapshot) => {
       if(!querySnapshot.empty){
          
           alert("you are banned from joining this group !");
       }
       else{
     setidd(current => roomid);
     chatid=roomid;
    
     saveroomid(roomid);
     joinroom(roomname,false);
     getmessages();
     checkcrowninroom();
     setchatmodal(true);
    setroommodal(false);
    setpublicroommodal(false);
       
  
 }}).catch((error) => {
         console.log("Error getting documents: ", error);
     });}
     else if(!isSingnin)
     {
       setidd(current => roomid);
     chatid=roomid;
     saveroomid(roomid);
     getmessages();
     checkcrowninroom();
     setchatmodal(true);
     setroommodal(!roommodal)
 
     }
   

}

const joinprvtroom=(roomid,roomname)=>{
   if(isSingnin){
    if(currentuserDetails?.name!=null)
    {console.log("not getiing-----------------")}
    else
    {getcurrentuserdata() ; console.log(" getiing//////////////") }
   

if(currentuserDetails.role=="admin")
{
setidd(current => roomid);
chatid=roomid
joinroom(roomname,true);
saveroomid(roomid);
getmessages();
checkcrowninroom();
setchatmodal(true);
setroommodal(false)
setprvtroommodal(false);
}
else
{

   db.collection("rooms").where(firebase.firestore.FieldPath.documentId() ,"==",roomid).where("invited", "array-contains", app.auth().currentUser.uid)
   .get()
   .then((querySnapshot) => {
     if(!querySnapshot.empty){
      setidd(current => roomid);
      chatid=roomid
     joinroom(roomname,true);
    saveroomid(roomid);
    getmessages();
    checkcrowninroom();
     setroommodal(false);
     setprvtroommodal(current =>false);

        
         
     }
     else{

      alert("you can't join this room  !");

}}).catch((error) => {
       console.log("Error getting documents: ", error);
   });}}

 

}

 
// get private  message history 
const getinprvtmsghistory=()=>{
 
  
  const unsubscribe = app.firestore().collection("privatemessages").where('fromto', 'in', [app.auth().currentUser.uid+selecteduserid, selecteduserid+app.auth().currentUser.uid]).orderBy('createdAt', 'desc').onSnapshot(snapshot => setprvthistorymessages(
    snapshot.docs.map(doc => ({
      _id:doc.id,
    createdAt: doc.data().createdAt.toDate(),
    from: doc.data().from,
    to: doc.data().to,
    fromname:doc.data().fromname,
    toname:doc.data().toname,
    text:doc.data().text,
    fromto:doc.data().fromto,
    headercolor:doc.data().headercolor,
    boxcolor:doc.data().boxcolor,
    }))
    ));
   return unsubscribe;
    
}
// get purse    history 
const getpursehistory=()=>{
 
   const unsubscribe = app.firestore().collection("pursehistory").where("quryids", "array-contains", app.auth().currentUser.uid).onSnapshot(snapshot => setpursehistory(
    snapshot.docs.map(doc => ({
      fromid: doc.data().fromid,
      fromname:  doc.data().fromname,
      npurses:  doc.data().npurses,
      receverid:  doc.data().receverid,
      recevername:  doc.data().recevername,
      senddate:  doc.data().senddate,
      type:  doc.data().type,
      quryids:  doc.data().quryids  
    }))
    ));
   return unsubscribe;
    
}
 
//getting inbox private messages
const getinprvtmessages=()=>{
 
  const unsubscribe = app.firestore().collection("privatemessages").where("to", "==", app.auth().currentUser.uid).orderBy('createdAt', 'desc').onSnapshot(snapshot => setprvthistorymessages(
    snapshot.docs.map(doc => ({
     
    createdAt: doc.data().createdAt.toDate(),
    from: doc.data().from,
    to: doc.data().to,
    fromname:doc.data().fromname,
    toname:doc.data().toname,
    text:doc.data().text,
    headercolor:doc.data().headercolor,
    boxcolor:doc.data().boxcolor,
    }))
    ));
   return unsubscribe;
    
}


//
//getting last inbox private messages
const getlastprvt=()=>{
 
  const unsubscribe = app.firestore().collection("privatemessages").where("to", "==", app.auth().currentUser.uid).orderBy('createdAt', 'desc').limit(1).onSnapshot(snapshot => setprvtmessages(
    snapshot.docs.map(doc => ({
     
    createdAt: doc.data().createdAt.toDate(),
    from: doc.data().from,
    to: doc.data().to,
    fromname:doc.data().fromname,
    toname:doc.data().toname,
    text:doc.data().text,
    boxcolor:doc.data().boxcolor,
    headercolor:doc.data().headercolor
    })),
    
    ));
   return unsubscribe;
    
}



//getting outbox private messages

const getoutprvtmessages=()=>{
 
  const unsubscribe = app.firestore().collection("privatemessages").where("from", "==", app.auth().currentUser.uid).orderBy('createdAt', 'desc').onSnapshot(snapshot => setprvthistorymessages(
    snapshot.docs.map(doc => ({
     
    createdAt: doc.data().createdAt.toDate(),
    from: doc.data().from,
    to: doc.data().to,
    fromname:doc.data().fromname,
    toname:doc.data().toname,
    text:doc.data().text,
    headercolor:doc.data().headercolor,
    boxcolor:doc.data().boxcolor,
    }))
    ));
   return unsubscribe;
    
}
 
//  send private message function

const sendprvtmsg =()=>{
  let boxcolor ="#dfdfdf"
  let headercolor ="#ADAEFB"
  
if(currentuserDetails?.role=="admin")
{
  boxcolor ="#f97912"
  headercolor ="#903801"
}
else if(currentuserDetails?.role=="Top User")
{
  boxcolor ="#ffd684"
  headercolor ="#d58d0a"

}
else if(currentuserDetails?.role=="user" && currentuserDetails?.crown==true)
{
   boxcolor ="#f7a863"
   headercolor ="#f78e32"
}

  db.collection("users").where(firebase.firestore.FieldPath.documentId() ,"==",selecteduserid).where("ignoredid", "array-contains", app.auth().currentUser.uid) 
  .get()
  .then((querySnapshot) => {
    if(!querySnapshot.empty){
       
        alert("sorry tou can't send message to this person !");
    }
    else if(querySnapshot.empty)
    { 
      
      db.collection("users").where(firebase.firestore.FieldPath.documentId() ,"==",selecteduserid).where("ispraivate","==",true)
      .get()
      .then((querySnapshot2) =>{
        if(!querySnapshot2.empty){

          db.collection("users").where(firebase.firestore.FieldPath.documentId() ,"==",selecteduserid).where("addedid", "array-contains", app.auth().currentUser.uid)
          .get()
          .then((querySnapshot3) =>{
              
            if(!querySnapshot3.empty){
              
              app.firestore().collection('privatemessages').add({  
                createdAt:new Date()  ,
                from: app.auth().currentUser.uid,
                to:selecteduserid ,
                fromname:app.auth().currentUser.displayName ,
                toname:userDetails?.name ,
                text: prvttext,
                fromto:app.auth().currentUser.uid+selecteduserid,
                boxcolor:boxcolor,
                headercolor:headercolor,
              })
              

              var isnewmsg = db.collection("users").doc(selecteduserid);
              isnewmsg.update({
                isnewmsg:  true,
             } )  
             
 

                alert("message send successfully");
                setprvttext('');
                app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'sendprvtmsg': Number (currentuserDetails.sendprvtmsg+1)});

          }
        else{
              alert("you can't send this person private messages untill he add you ")

        }
        })
       
          //alert("sorry tou can't send message to this person becuase its private  !");
      }
      else if (querySnapshot2.empty)
      {
      
        app.firestore().collection('privatemessages').add({  
          createdAt:new Date()  ,
          from: app.auth().currentUser?.uid,
          to:selecteduserid ,
          fromname:app.auth().currentUser?.displayName ,
          toname:userDetails?.name ,
          text: prvttext,
          fromto:app.auth().currentUser?.uid+selecteduserid,
          boxcolor:boxcolor,
          headercolor:headercolor,})

            var isnewmsg = db.collection("users").doc(selecteduserid);
              isnewmsg.update({
                isnewmsg:  true,
             } )  
          alert("message send successfully");
          setprvttext('');
          app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'sendprvtmsg': Number (currentuserDetails.sendprvtmsg+1)});


      }

  })
 
  }
   
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

setprvttext(null);

}


//getting my contacts and ignore list
const getmycontacts =()=>{

  app.firestore().collection('users').doc(app?.auth()?.currentUser?.uid).get().then(snapshot => {

    setmycontacts(snapshot.data())
   
  });

}
 

// check if not login  show modal
const logincheck= async()=>{
 
 await  app.auth().onAuthStateChanged(function (user) {
    if (user) {
      setisSingnin(current=>true);
   } else {
    // No user is signed in.
      setisSingnin(current=>false);
 }
    })

}
 


// login if not login call register
const userLogin = () => {
  if (email === "" && password === "") {
    Alert.alert("Enter details to signin!")
  } else {
    db.collection("disableduser")
      .where(firebase.firestore.FieldPath.documentId(), "==", "disabled")
      .where("email", "array-contains", (email.replace(/ /g, ''))+"@gmail.com")
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          alert("you are banned from joining  ")
          setEmail("")
          setPassword("")
        } else {
          app
            .auth()
            .signInWithEmailAndPassword((email.replace(/ /g, ''))+"@gmail.com", password)
            .then((res) => {
              getcurrentuserdata()
              setEmail("")
              setPassword("")
              console.log("User logged-in successfully!")
              setislogin((current) => false)
              setisSingnin((current) => true)
            })
            .catch((error) => {
              ;({ errorMessage: error.message })

              console.log(error)
              if (
                error ==
                "Error: There is no user record corresponding to this identifier. The user may have been deleted."
              ) {
                Alert.alert(
                  t("this  username is not correct !"),
                  t("Do you wanna creat account with name : " + email + " ?"),
                  [
                    // The "Yes" button
                    {
                      text: t("Yes"),
                      onPress: () => {
                        register()
                        setEmail("")
                        setPassword("")
                      },
                    },
                    {
                      text: t("No"),
                    },
                  ]
                )
              } else {
                alert(t("check your username and password again !"))
                register()
                setPassword("")
              }
            })
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error)
      })
  }
}

// register function in case not login
const  register = (() => {
  getallusers();
  getUserGeolocationDetails();
  if(allusers?.count>10)
  {
  app.auth().createUserWithEmailAndPassword((email.replace(/ /g, ''))+"@gmail.com", password)
  .then((userCredential) => {
    app.firestore().collection('users').doc(userCredential.user.uid).set(
      {
        id: Number (10022+allusers.count),
        name:email,
        photoURL: imageUrl ? imageUrl : "https://www.trackergps.com/canvas/images/icons/avatar.jpg",
        address:{
          ip :details.IPv4 ,  
          City : details.city , 
          country_name :  details.country_name ,  
          country_code : details.country_code  ,

        },
        orginaladdress:{
          oip :details.IPv4 ,  
          oCity : details.city , 
          ocountry_name :  details.country_name ,  
          ocountry_code : details.country_code  ,

        },
        role:"user",
        email:(email.replace(/ /g, ''))+"@gmail.com", 
        sendprvtmsg:0, 
        password:password,
        gender: "not selected",
        purse : 0,
        familystatus:"Single",
        namecolor:"black" ,
        messagecolor:"black",
        bkgcolor:"transparent",
        registareddate:new Date(),
        crown:false,
        sendmsgs:0,
        isnewmsg:false,
      }
    )
  
  // Signed in
  var user = userCredential.user;
  user.updateProfile({
  displayName: email,
  photoURL: imageUrl ? imageUrl : "https://www.trackergps.com/canvas/images/icons/avatar.jpg"
  }).catch(function (error) {
  alert(error.message)
  });
  getcurrentuserdata();
  setislogin(current=>false);
  setisSingnin(current=>true);


  // ...
  })
  .catch((error) => {
  var errorMessage = error.message;
   });
  
   var count = db.collection("counter").doc("usercounter");
   count.update({
     count: Number(allusers.count+1) ,
  } )  
}
else
{
  alert(" please try again !!");
  getallusers();
}});

// send pers function 
const sendpurse=()=>{
 let uid= app.auth().currentUser.uid ;
if(selecteduserid==app.auth().currentUser.uid)
{
  alert("you can't send pures to yourself !");
}

else 
{
  if(currentuserDetails?.purse>sendpuresval) 
  {  
     app.firestore().collection('users').doc(selecteduserid).update({'purse': (Number (userDetails.purse) + Number(sendpuresval))});
     app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': (Number (currentuserDetails.purse) - Number(sendpuresval))});
    
     db.collection("pursehistory").add({
      fromid:       app.auth().currentUser.uid  ,
      fromname:     currentuserDetails.name ,
      npurses:      sendpuresval ,
      receverid:    selecteduserid  ,
      recevername:   userDetails.name ,
      senddate:     new Date(),
      type:"p2p",
      quryids:          firebase.firestore.FieldValue.arrayUnion(
        uid,selecteduserid,
      ) 

  })
  .then((docRef) => {
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
    
    
    
     setsendpuresval(null);
     getcurrentuserdata();
    }
  else 
  {
 
    alert("you have : "+ currentuserDetails?.purse+ "  not enough purses  !" )
  }

}



setsendpuresval(null);

}

// Vote room function 
const voteroom=(purse,rank)=>{

  Alert.alert(t("Alert"),t("do you wanna vote : "+rank+"  for " +purse+ " $  ?"),
  [
     
    {
      text: "Yes",
      onPress: () => {if(currentuserDetails?.purse>purse) 
        {  
           app.firestore().collection('rooms').doc(idd).update({'rank': (Number (roomdata.rank) + Number(rank))});
           app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': (Number (currentuserDetails.purse) - Number(purse))});
           setsendpuresval(null);
           getcurrentuserdata();
           getroomdata();
           getrooms();
          }
        else 
        {
          console.log("else ")
          alert("you have : "+ currentuserDetails?.purse+ "  not enough purses  !" )
        }
       
      },
    },{
      text: "No",
    },
  ]
);

 
   
  }

// get important messages 
const getimportantmsg = async ()=>{


  const unsubscribe = app.firestore().collection("importantmsg").orderBy('date', 'desc').onSnapshot(snapshot => setimportmsg(
    snapshot.docs.map(doc => ({
    sender: doc.data().sender,
    subject: doc.data().subject,
    text: doc.data().text,
    date:doc.data().date,
      }))
    ));
   return unsubscribe; 
 
}
// about room
const getroomdata= async()=>{

  app.firestore().collection('rooms').doc(idd).get().then(snapshot => {

    setroomdata(snapshot.data())
   
  });



}
 
 
//delete user 

const deleteuser = async()=>{
  if(userDetails.id<10)
  {
  alert("you are Admin you can't Remove Admin !")
  }
  else {
  var disabled = db.collection("disableduser").doc('disabled');
 disabled.update({
  email:firebase.firestore.FieldValue.arrayUnion(userDetails?.email),
 
} )

alert("user successfully deleted!");
}
}
 

//block  user from room
const blockfromroom = async()=>{
  if(userDetails?.id<10)
  {
  alert("you are Admin you can't Remove Admin !")
  }
  else
  { 
  var ignored = db.collection("rooms").doc(idd);
  ignored.update({
  ignored:firebase.firestore.FieldValue.arrayUnion(selecteduserid),
  
} )

alert("blocked !");
  }
}

// delete this room 

const deleteroom=()=>{
  if(roomdata.id==5)
  {
    alert("You cant delete main room")
  }

else  {  db.collection("rooms").doc(idd).delete().then(() => {
    alert("room successfully deleted!");
}).catch((error) => {
    alert("Error removing room: ", error);
});
  }
  }


//join  user to room   
const joinroom=(roomname,statu)=>{

if(isSingnin)
{
  var joinedusers = db.collection("rooms").doc(chatid);
  joinedusers.update({
    joinedusers: firebase.firestore.FieldValue.arrayUnion({
      userid:app.auth()?.currentUser?.uid,
      contactname:currentuserDetails?.name,
      
    }) 
 } );

 var updateuser =db.collection("users").doc(app.auth().currentUser.uid);
 
 updateuser.update(
{
lastroomid : chatid,
lastroomname:roomname,
lastroomprivate:statu
})
  
}
else{


}


}



// make top user 
const maketopuser=()=>{

  if(userDetails.id<10)
{
alert("you already Admin you can't change Admin !")
}
else
{
  if(userDetails?.role=="Top User")
  {
    db.collection("users").doc(selecteduserid).update({
      role: "user",
      crownlink:null,
  })
  .then(() => {
      alert("user is now normal user!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  }
  else if(userDetails?.role=="user")
  {
  db.collection("users").doc(selecteduserid).update({
    role: "Top User",
    crownlink:'https://firebasestorage.googleapis.com/v0/b/chat-app-bf632.appspot.com/o/forapp%2Fcrownanimater.gif?alt=media&token=57c423f0-4f7b-40fc-924c-d062d9a40ac7',
})
.then(() => {
    alert("user is now topuser!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

}

}

getuserdata(selecteduserid);
  }

//give him crown 
const makemerchent=(value)=>{



  if(userDetails?.crown==true)
{  db.collection("users").doc(selecteduserid).update({
    crown:false,
    crownlink:null,
    merchantin:null,
})
.then(() => {
    alert("user removed from merchant!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});}
else
{
{  db.collection("users").doc(selecteduserid).update({
    crown: true,
    crownlink:"https://firebasestorage.googleapis.com/v0/b/chat-app-bf632.appspot.com/o/forapp%2Fcrownanimater.gif?alt=media&token=57c423f0-4f7b-40fc-924c-d062d9a40ac7",
    merchantin:value,
})
.then(() => {
    alert("user now merchant for : " + value);
})
.catch((error) => {
    console.error("Error writing document: ", error);
});}


}
setCountry(null)
getuserdata(selecteduserid);
  }

// change user id
  const changeuserid =()=>{ 
    

 if(userDetails.id<10)
 {
  alert("you can't change Admin ID !")
 }
   else {   
    
    
    db.collection("users").where('id' ,"==", selecteduserid)
    .get()
    .then((querySnapshot) => {

      if(querySnapshot.empty){

        db.collection("users").where('id' ,"==", Number (changename))
        .get()
        .then((querySnapshot) => {
          if(querySnapshot.empty){
             
              alert("id changed");
              app.firestore().collection('users').doc(selecteduserid).update({'id':Number  (changename)});
          }
          else{ 
            alert("id taken by this or another user");
    
          }}).catch((error) => {
            console.log("Error getting documents: ", error);
        }); 
    
         
        
      }
      else{ 
        alert("ID taken by another user try another one");
  
      }}).catch((error) => {
        console.log("Error getting documents: ", error);
    }); 
   
  
 
  } 
  getuserdata(selecteduserid);
  setchangename(null);
  setselecteduserid(null);

}

// change room id 
 
const changeroomid =()=>{ 
    
 
         db.collection("rooms").where('id' ,"==", Number (changename))
         .get()
         .then((querySnapshot) => {
           if(querySnapshot.empty){
              
               alert("id changed");
               app.firestore().collection('rooms').doc(idd).update({'id':Number  (changename)});
           }
           else{ 
             alert("id taken by this or another Room");
     
           }
          }).catch((error) => {
             console.log("Error getting documents: ", error);
         }); 
     
      getroomdata();
   setchangename(null);
  
 }

// change user msg count 

const changeusermsg =()=>{
  app.firestore().collection('users').doc(selecteduserid).update({'sendmsgs':Number  (changename)});

setchangename(null);
getuserdata(selecteduserid);
}

const changeuserpvrtmsg =()=>{
  app.firestore().collection('users').doc(selecteduserid).update({'sendprvtmsg':Number  (changename)});

setchangename(null);
getuserdata(selecteduserid);
}


// add to contacts
const addtocontacts=()=>{


  db.collection("users").where(firebase.firestore.FieldPath.documentId() ,"==",app.auth().currentUser.uid).where("addedid", "array-contains", selecteduserid)
  .get()
  .then((querySnapshot) => {
    if(!querySnapshot.empty){
       
        alert("you already added this user");
    }
    else{

      if(app.auth().currentUser.uid==selecteduserid)
{
  alert("you can't add yourself");

}else{
  var contacts = db.collection("users").doc(app.auth()?.currentUser?.uid);
   contacts.update({
    addedid:firebase.firestore.FieldValue.arrayUnion(selecteduserid),
    contacts: firebase.firestore.FieldValue.arrayUnion({
      contactid:selecteduserid,
      contactname:userDetails?.name,
    }) 
 } )
 alert(userDetails?.name +"added to contacts book");
}


    

}}).catch((error) => {
      console.log("Error getting documents: ", error);
  });

  getuserdata(selecteduserid);

}

// add to ignore list
const addtoignor=()=>{

  db.collection("users").where(firebase.firestore.FieldPath.documentId() ,"==",app.auth().currentUser.uid).where("ignoredid", "array-contains", selecteduserid)
  .get()
  .then((querySnapshot) => {
    if(!querySnapshot.empty){
       
        alert("you already added this user");
    }
    else{ 


      if(app.auth().currentUser.uid==selecteduserid)
      {
        alert("you can't add yourself");
      
      }
    else
    {  
      var ignored = db.collection("users").doc(app.auth()?.currentUser?.uid);
      ignored.update({
        ignoredid: firebase.firestore.FieldValue.arrayUnion(selecteduserid),
        ignored: firebase.firestore.FieldValue.arrayUnion({
          ignoreid:selecteduserid,
          ignorename:userDetails?.name,
        }) 
     } );
     alert(userDetails?.name +"added to ignore list");
    }
    

}}).catch((error) => {
      console.log("Error getting documents: ", error);
  });






  

  if(app.auth().currentUser.uid==selecteduserid)
  {
    alert("you can't add yourself");
  
  }
else
{  
  var ignored = db.collection("users").doc(app.auth()?.currentUser?.uid);
  ignored.update({
    ignoredid: firebase.firestore.FieldValue.arrayUnion(selecteduserid),
    ignored: firebase.firestore.FieldValue.arrayUnion({
      ignoreid:selecteduserid,
      ignorename:userDetails?.name,
    }) 
 } );
 alert(userDetails?.name +"added to ignore list");
}
}


const removecontact =(id,name)=>{
 

    db.collection('users').doc(app.auth().currentUser.uid).update({
      contacts: firebase.firestore.FieldValue.arrayRemove({
        contactid:id,
        contactname:name,
      }) 
  });

  db.collection('users').doc(app.auth().currentUser.uid).update({
    addedid: firebase.firestore.FieldValue.arrayRemove(id) 
});

alert(name + " removed from list!");
getmycontacts();
}


const removeignire =(id,name)=>{
 

  db.collection('users').doc(app.auth().currentUser.uid).update({
    ignored: firebase.firestore.FieldValue.arrayRemove({
      ignoreid:id,
      ignorename:name,
    }) 
});

db.collection('users').doc(app.auth().currentUser.uid).update({
  ignoredid: firebase.firestore.FieldValue.arrayRemove(id) 
});

alert(name + " removed from ignore list!");
getuserdata(selecteduserid);
getmycontacts();

}


// change city
const changecity=()=>{


 
    
       
      var city = db.collection("users").doc(app.auth()?.currentUser?.uid);
      city.update({
      address : {
        City:changename,
        ip:currentuserDetails.address.ip,
        country_code:currentuserDetails.address.country_code, 
        country_name:currentuserDetails.address.country_name
        
        
        } 
     } )
     
     .catch((error) => {
      console.log("Error getting documents: ", error);
  }); 


  getuserdata(selecteduserid);

setchangename(null);
}





const changecountry=(value)=>{
 
  var city = db.collection("users").doc(app.auth()?.currentUser?.uid);
  city.update({
  address : {
    City:currentuserDetails.address.City,
    ip:currentuserDetails.address.ip,
    country_code:currentuserDetails.address.country_code, 
    country_name:value 
  } 
 } )
 
 .catch((error) => {
  console.log("Error getting documents: ", error);
}); 

alert("country changed to : "+ value)
getcurrentuserdata();

 }
// change nick name 
const changenickname=()=>{

  app.auth().signInWithEmailAndPassword(currentuserDetails.email, currentuserDetails.password)

  db.collection("users").where('name' ,"==", changename)
  .get()
  .then((querySnapshot) => {
    if(querySnapshot.empty){

      const user = firebase.auth().currentUser;

      user.updateEmail((changename.replace(/ /g, ''))+"@gmail.com").then(() => {
        var name = db.collection("users").doc(app.auth()?.currentUser?.uid);
        name.update({
          name:  changename,
          email:changename.replace(/ /g, '')+"@gmail.com"
       } )
    
    alert("user name updated");
    
getcurrentuserdata();
setchangename(null);
    
      }).catch((error) => {
        // An error occurred
        alert("user not updated please sing in again with old name then change");
      });
    
 
    }
    else{ 
      alert("name taken by another user try another one");

    }}).catch((error) => {
      console.log("Error getting documents: ", error);
  }); 

 

}
// change password
const changepassword=()=>{

  app.auth().signInWithEmailAndPassword(currentuserDetails.email, currentuserDetails.password)

  const user = app.auth().currentUser;

  user.updatePassword(changename).then(() => {
    alert(t("password changet !"));
    var password = db.collection("users").doc(app.auth()?.currentUser?.uid);
    password.update({
      password:  changename,
   } )
   // setchangepasswordmodal(false);
    // Update successful.
    getcurrentuserdata();
  }).catch((error) => {
   alert(t("please try again "));
  });


  setchangename(null);

}


// new message false
const dismissnewmsg =()=>
{
 
      var isnewmsg = db.collection("users").doc(app.auth()?.currentUser?.uid);
      isnewmsg.update({
        isnewmsg:  false,
     } )
     
     .catch((error) => {
      console.log("Error getting documents: ", error);
  }); 
   getcurrentuserdata();

}



//game one 
const gameone=()=>{
getcurrentuserdata();
  console.log(currentuserDetails)
  const random1 = Math.floor(Math.random() * 12) + 1;
  const random2 = Math.floor(Math.random() * 24) + 1;
  const random3 = Math.floor(Math.random() * 36) + 1;
 if(currentuserDetails.purse < sendpuresval)
{
  alert("you don't have enough purses");
}
else if (currentuserDetails.purse >  sendpuresval)
{
  if(checked=='first'){

      if(picknumber<0 || picknumber>12)
      {
        myTextInput.current.clear();
        alert("you selected 1x so choose number between 0 to 12");
      }
else
      { 
         myTextInput.current.clear();
          alert(" random number is :" +random1);
          if(picknumber==random1)
          { 
            alert("congratulations tou win tou would receve  :  2x  " +sendpuresval);
            app.firestore().collection('users').doc(app.auth().currentUser.uid).update({ 'purse':  Number (currentuserDetails.purse+sendpuresval)});

          }
            else{
              app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': Number (currentuserDetails.purse-sendpuresval)});
              alert("sorry better luck next time .... ");
            }

          setsendpuresval(null);

        }

}
 else if(checked=='second')
 {
  if(picknumber<0 || picknumber>24)
  {
    myTextInput.current.clear();
    alert("you selected 2x so choose number between 0 to 24");
  }
 
else
      { 
         myTextInput.current.clear();
          alert(" random number is :"+random2);
          if(picknumber==random1)
          { 
            alert("congratulations tou win tou would receve  :  2x  " +sendpuresval);
            app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': Number (currentuserDetails.purse+sendpuresval+sendpuresval)});

          }
            else{
              app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': Number (currentuserDetails.purse-sendpuresval)});
              alert("sorry better luck next time .... ");
            }

          setsendpuresval(null);

        }
}
else if(checked=='third')
{
  if(picknumber<0 || picknumber>36)
  {
    myTextInput.current.clear();
    alert("you selected 1x so choose number between 0 to 36");
  }
  else
  { 
     myTextInput.current.clear();
      alert(" random number is :"+ random3);
      if(picknumber==random3)
      { 
        alert("congratulations tou win tou would receve  :  3x  " +sendpuresval);
        app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': Number (currentuserDetails.purse+sendpuresval+sendpuresval+sendpuresval)});

      }
        else{
          app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'purse': Number (currentuserDetails.purse-sendpuresval)});
          alert("sorry better luck next time .... ");
        }

      setsendpuresval(null);

    }
}
 
}


} 




// use thissection for photo upload 

const getPermission = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};
  
const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!result.cancelled) {
    UpdateImage(result.uri);
    
  }
  else
    {
      alert("faild upload try again !");
    }
}

const uploadImageToBucket = async (img) => {
  let blob;
  try {
    setUploading(true);
    blob = await getPictureBlob(img);
    const ref = await storage.ref().child('/images/'+random.toString()+'/');
    const snapshot = await ref.put(blob);
    console.log("link path");
    return await snapshot.ref.getDownloadURL();
  } catch (e) {
    alert(e.message);
  } finally {
    blob.close();
    setUploading(false);
  }
};

const getPictureBlob = (uri) => {
   return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};



const UpdateImage = async (img) => {
  setImage(img);
  let imgUrl = await uploadImageToBucket(img);
  if (imgUrl === null && currentuserDetails.photoURL) {
    imgUrl = currentuserDetails.photoURL;
  }
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .update({
      photoURL: imgUrl,
    })
    .then(() => console.log("user Upadted"));
}




// login allert
const loginalert=()=>{
 
  Alert.alert(t("You are not loged in !"),t("Do you wanna login or creat account?"),
  [
    // The "Yes" button
    {
      text: "Yes",
      onPress: () => {
       setislogin(true);
      },
    },{
      text: "No",
    },
  ]
);

}
 
  // send message function and save to database
  const onSend =((messages = []) => {

 
    setMessages((previousMessages) =>GiftedChat.append(previousMessages, messages),);
   
    const {_id,createdAt,text,user,} = messages[0] ;
        app.firestore().collection('messages').add({  
        chatid:idd,
          _id,
        createdAt,
        text,
        user,
        
        })
        app.firestore().collection('users').doc(app.auth().currentUser.uid).update({'sendmsgs': Number (currentuserDetails.sendmsgs+1)});

  });

 
  // send icon style
   const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };
  //extra bubble style 
  const renderBubble = (props) => {
   
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#transparent',
          },
          
        }}
         textStyle={{
          right: {
            
            color: "black",
          },
        }}
 
      />
    );
  };
  
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{  }}
      style={{ height:40 }}
    />
  );
//scrool down button with icon function
  // const scrollToBottomComponent = () => {
  //   return(
  //     <FontAwesome name='angle-double-down' size={22} color='#333' />
  //   );
  // }
 
 
//notfication ===>
const registerForPushNotificationsAsync=async()=> {
   let token;
  if (Device.isDevice) 
{   

    const { status: existingStatus } = await   Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } =    Notifications.requestPermissionsAsync();

      alert(" ===========>>>>> noooo")

      finalStatus = status;
 
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
 
    }

    token = ( Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    if(token)
    {
      alert(" ===========>>>>> okkk"+token)

    }
 


    app.firestore().collection('users').doc(app.auth().currentUser.uid).update({token});

  } 

  
  else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
 //getting message where chatid == romid 
const getmessages=  ()=>{
  

  
       const unsubscribe = app.firestore().collection("messages").where("chatid", "==", chatid).orderBy('createdAt', 'desc').onSnapshot(snapshot => setMessages(
      snapshot.docs.map(doc => ({
      _id: doc.data()._id,
      createdAt: doc.data().createdAt.toDate(),
      text: doc.data().text,
      user: doc.data().user,
      }))
      ));
     return unsubscribe;
     
  
  }

  return (
    
    <View style={styles.container}> 
 
  { isActive ?(
<View style={styles.header}>
<TouchableOpacity activeOpacity = { .2 } onPress={()=>{{ if(cummunitymodal==false){ setcummunitymodal(current => true);}
else if(cummunitymodal==true)
{  
  setcummunitymodal(current => false);
} }} }>
<Image style={styles.menuimg} source={require('./images/network.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={()=>{{
  
  
if(roommodal==false)
{
  getprvtrooms();getcountryrooms(); getrooms(); setroommodal(current => true);

}
else if(roommodal==true)
{    setroommodal(current => false);
}}} }> 
<Image style={styles.menuimg} source={require('./images/open-door.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={()=>{
  if(isSingnin)
  {getcurrentuserdata();setprofilemodal(true)}
  else 
  {loginalert();}
  
  }} > 
<Image style={styles.menuimg} source={require('./images/skills.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={ ()=> {getsearchuser();setsearchmodal(true)}}> 
<Image style={styles.menuimg} source={require('./images/search.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={ ()=> {setpuresmodal(true)} }> 
<Image style={styles.menuimg} source={require('./images/money-bag.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 }   > 
<Image style={styles.menuimg} source={require('./images/cart.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={ ()=> setsettingsmodal(true) }> 
<Image style={styles.menuimg} source={require('./images/settings.png')} /></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={()=>{
   Alert.alert("Are your sure?","Are you sure you want to logout?",
  [
    // The "Yes" button
    {
      text: "Yes",
      onPress: () => {
       signOut();
      },
    },{
      text: "No",
    },
  ]
);
}  
   
   }> 
<Image style={styles.menuimg} source={loginout}  /></TouchableOpacity>
</View>
 ): null
//   <TouchableOpacity activeOpacity = { .2 } onPress={ act }><TextTicker
//  style={{ fontSize: 18, backgroundColor: "#e2d2d7" }}
//  duration={10000}
//  loop={true}
//  bounce={true}
//  repeatSpacer={0}
//  marqueeDelay={1000}
// >
//  Super long piece of text is long. The quick brown fox jumps over the lazy dog.
// </TextTicker></TouchableOpacity>
 
 }
 
       
  <GiftedChat
      messages={messages}
      onSend={(messages) => isSingnin ? onSend(messages):loginalert()}
      user={{
        _id: app?.auth().currentUser?.uid,
        name: currentuserDetails?.name,
        email:app.auth().currentUser?.email,
        namecolor:currentuserDetails?.namecolor,
        role:currentuserDetails?.role,
        havecrown:havecrownthisroom,
        merchant:currentuserDetails?.crown,
}}
       renderBubble={renderBubble}
       alwaysShowSend
       renderSend={renderSend}
       scrollToBottom
       renderUsernameOnMessage ={true}
      onPress={  (context, message)=>{
        
        let idd=JSON.stringify(message.user._id);
        var iddWithOutQuotes= idd.replace(/['"]+/g, '');
        setselecteduserid(iddWithOutQuotes)
         
        getuserdata(iddWithOutQuotes);
       // getuserlastmsg();

        modal();

      }   }
       onLongPress={act}
       maxInputLength ={40}
       renderAvatar={null}/>
{/* community  section and modals */}

{/* start main community modal */}

<Modal transparent={true}  visible={cummunitymodal} onRequestClose={() => { 
       setModalVisible(!cummunitymodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 415, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5, }}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setcummunitymodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{paddingLeft:5,height:380,alignItems:"flex-start"}}  >
     
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> {if(isSingnin) {getmycontacts();  setmycontactsmodal(current => true)}}}><View style={{ flexDirection: "row",flexWrap: "wrap",}} ><Image style={styles.modalheaderico} source={require('./images/phone-book.png')} /><Text style={{fontSize:16, paddingVertical:5,paddingLeft:5}}>{t("Contacts book")} </Text></View></TouchableOpacity> 
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> { if(isSingnin) { getalluserdatas();getinprvtmessages();   setprivatemsgmodal(current => true)}}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("Incoming Messages")} </Text></TouchableOpacity> 
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> {if(isSingnin) { getoutprvtmessages();  setprivatemsgmodal2(current => true)}}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("Outgoing Messages")} </Text></TouchableOpacity> 
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> { if(isSingnin) { setcmodalname(current =>"Incoming Files"); setprivatemsgmodal(current => true)}}}><View style={{ flexDirection: "row",flexWrap: "wrap",}} ><Image style={styles.modalheaderico} source={require('./images/files.png')} /><Text style={{fontSize:16, paddingVertical:5,paddingLeft:5}}>{t("Incoming Files")} </Text></View></TouchableOpacity> 
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> { if(isSingnin) { setcmodalname(current =>"Invitation to Rooms"); setprivatemsgmodal(current => true)}}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("Invitation to Rooms")} </Text></TouchableOpacity> 
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> {if(isSingnin) {  getmycontacts();  setignorelistmodal(current => true)}}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("Ignore List")} </Text></TouchableOpacity> 
    <Divider style={{height:3,marginBottom:5,marginTop:8,color:"#9f977d"}}/> 
    <Text style={{fontSize:16, paddingVertical:5,}}>{t("This Week Best Photo")} </Text>
    <Text style={{fontSize:16, paddingVertical:5,}}>{t("Last week's Best Photo")} </Text>
    <Divider style={{height:3,marginBottom:5,marginTop:8,color:"#9f977d"}}/> 
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=>{     registerForPushNotificationsAsync();}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("About Cummunity ")}</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=> {getuserlastmsg()}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("Invite Friend")} </Text></TouchableOpacity>
    <TouchableOpacity  activeOpacity = { .2 } onPress={()=> { getimportantmsg();   console.log(importmsg);  console.log(prvtmessages); ; setimportmsgmodal(current => true)}}><Text style={{fontSize:16, paddingVertical:5,}}>{t("Important Messages")} </Text></TouchableOpacity>
    </View>
    
      </View>
         </View>
       </View>
</Modal>
{/* end of main community modal */}

{/* start contacts community modal */}

<Modal transparent={true}  visible={mycontactsmodal} onRequestClose={() => { 
       setmycontactsmodal(!mycontactsmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,paddingRight:40,paddingBottom:3}}>{t("Contacts book")}</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setmycontactsmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
    <FlatList 
        keyExtractor={(item) => item.id} 
        data={mycontacts.contacts} 
        renderItem={({ item }) => ( 
          <View style={{flexDirection: "row",flexWrap: "wrap", paddingVertical:5, paddingLeft:5,}}>

          <View style={{width:"70%"}}><TouchableOpacity activeOpacity = { 0.1 } onPress={()=>{getuserdata(item.contactid);modal();}}><Text style={{ textAlign:"left"}}>{ item.contactname}  </Text></TouchableOpacity></View>
          <View style={{width:"30%"}}><TouchableOpacity activeOpacity = { 0.1 } onPress={()=>{removecontact(item.contactid,item.contactname)}}><Image style={{width:22,height:22,}} source={require('./images/delete-user.png')} /></TouchableOpacity></View></View>)}
      
      /> 
      </View></View></View></View>
</Modal>

 
{/* end contacts community modal */}


{/* start ignore list  community modal  */}

<Modal transparent={true}  visible={ignorelistmodal} onRequestClose={() => { 
       setignorelistmodal(!ignorelist);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,paddingRight:70,paddingBottom:3}}>{t("Ignore List")}</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setignorelistmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
    <FlatList 
        keyExtractor={(item) => item.id} 
        data={mycontacts.ignored} 
        renderItem={({ item }) => ( 
          <View style={{flexDirection: "row",flexWrap: "wrap", paddingVertical:5, paddingLeft:5,}}>

          <View style={{width:"70%"}}><TouchableOpacity activeOpacity = { 0.1 } onPress={()=>{getuserdata(item.ignoreid);modal();}}><Text style={{ textAlign:"left"}}>{ item.ignorename}  </Text></TouchableOpacity></View>
          <View style={{width:"30%"}}><TouchableOpacity activeOpacity = { 0.1 } onPress={()=>{removeignire(item.ignoreid,item.ignorename)}}><Image style={{width:22,height:22,}} source={require('./images/delete-user.png')} /></TouchableOpacity></View></View>)}
      
      /> 
      </View></View></View></View>
</Modal>

 
{/* end ignorelist community modal */}

{/* start important messages community modal */}

<Modal transparent={true}  visible={importmsgmodal} onRequestClose={() => { 
       setimportmsgmodal(!importmsgmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{ textAlign: "left",fontSize:16,paddingRight:5,paddingBottom:3}}>{t("Important Messages")}</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setimportmsgmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
    
     <FlatList 
        keyExtractor={(item) => item.id} 
        data={importmsg} 
        renderItem={({ item }) => ( 
          <View style={{ paddingVertical:5,}}>
            <Text style ={{fontSize:18,color:"#004DD3", textAlign: "left"}}>{item.sender}</Text><Text style ={{fontSize:18 ,color:"#205B65",paddingVertical:3, textAlign: "left"}}>{item.subject}</Text><Text style ={{fontSize:16, textAlign: "left"}}>{item.text}</Text><Divider style={{marginTop:8, height:2,color:"#9f977d"}}/></View> 
            
            
            )}
      /> 
      </View></View></View></View>
</Modal>

 
{/* end important messages  community modal */}


{/* start incoming messages and outgoing messages and files  */}

<Modal transparent={true}  visible={privatemsgmodal} onRequestClose={() => { 
       setprivatemsgmodal(!privatemsgmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 320, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,color:"#F6FAFA", paddingVertical:2,paddingRight:40}}>Income messages</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setprivatemsgmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{  paddingLeft:2, height:420}} >
      <FlatList 
        keyExtractor={(item,index) => item.id} 
        data={prvthistorymessages} 
        renderItem={({ item,index }) => {
          for(var i=0;i<tempuser.length;i++)
          if(item.from==tempuser[i]._id)
          {return( 
          <View style={{ paddingVertical:0, }}>
           
           <TouchableOpacity activeOpacity = { 0.1 }  onPress={()=>{setmsgindex(index);setallusersindex(i);setprivatemsgshow(true)}}>
           <View style={{ flexDirection: "row",paddingBottom:1}}>
              <View style={{ width:"30%"}}><Text  numberOfLines={1} ellipsizeMode="tail" style={{fontSize:16,maxWidth:80}}>{tempuser[i]?.name}</Text></View>
              <View style={{backgroundColor:"#ffffdb",width:"35%"}}><Text style={{fontSize:16,maxWidth:90,fontWeight:"500"}}  numberOfLines={1} ellipsizeMode="tail"> {item.text}   </Text></View>
              <View style={{backgroundColor:"#DFDFDF", width:"35%", }}><Text style={{fontSize:16,maxWidth:100}} numberOfLines={1} ellipsizeMode="tail"> {item?.createdAt?.toString()}   </Text></View>
           </View><Divider style={{height:1}}/>
           </TouchableOpacity>
           </View>
        )}}}
      />
      </View></View></View></View>
      </Modal>

      <Modal transparent={true}  visible={privatemsgmodal2} onRequestClose={() => { 
       setprivatemsgmodal2(!privatemsgmodal2);}}>
       <View style={styles.centeredView}>
       <View style={{width: 320, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,color:"#F6FAFA", paddingVertical:2,paddingRight:30}}>outgoing messages</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setprivatemsgmodal2(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{  paddingLeft:2, height:420}} >
      <FlatList 
        keyExtractor={(item,index) => item.id} 
        data={prvthistorymessages} 
        renderItem={({ item,index }) => ( 
          <View style={{ paddingVertical:0, }}>
           
           <TouchableOpacity activeOpacity = { 0.1 }  onPress={()=>{setmsgindex(index);setprivatemsgshow(true)}}>
            <View style={{ flexDirection: "row",paddingBottom:1}}>
              <View style={{ width:"30%"}}><Text  numberOfLines={1} ellipsizeMode="tail" style={{fontSize:16,maxWidth:80}}>{item.toname}</Text></View>
              <View style={{backgroundColor:"#ffffdb",width:"35%"}}><Text style={{fontSize:16,maxWidth:90,fontWeight:"500"}}  numberOfLines={1} ellipsizeMode="tail"> {item.text}   </Text></View>
              <View style={{backgroundColor:"#DFDFDF", width:"35%", }}><Text style={{fontSize:16,maxWidth:100}} numberOfLines={1} ellipsizeMode="tail"> {item?.createdAt?.toString()}   </Text></View>
           </View><Divider style={{height:1}}/>
           </TouchableOpacity>
           </View>
        )}
      />
      </View></View></View></View>
      </Modal>
{/* end  incoming messages and outgoing messages and files  */}


{/* start prvt msg pop-up  */}
<Modal transparent={true}  visible={recevedmsgmodal} onRequestClose={() => { setrecevedmsgmodal(false);dismissnewmsg(); 
  }}>
       <View style={styles.centeredView}>
       <View style={{width: 240, height:  prvtmessages[0]?.text.length<25?80:180,borderRadius: 5,backgroundColor:prvtmessages[0]?.boxcolor,shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={[styles.modalheader,{backgroundColor:prvtmessages[0]?.headercolor}]} ><Text style={{fontSize:17, paddingVertical:1,paddingRight:"30%",color:"white"}} >{prvtmessages[0]?.fromname}</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> {setrecevedmsgmodal(false); dismissnewmsg();}}><Image style={[styles.modalheaderclose,{marginLeft:0,backgroundColor:prvtmessages[0]?.boxcolor}]} source={require('./images/close.png')} /></TouchableOpacity></View>
      <View style={{ flexDirection: "row",flexWrap: "wrap",alignItems:"center",justifyContent:"center" ,paddingTop:5}}>
      <View>{ prvtmessages[0]?.text.length<25?<Text style={{fontSize:18,}} > {prvtmessages[0]?.text}</Text>:<ScrollView style={{maxHeight:125,paddingLeft:5}}><Text style={{fontSize:18,}} > {prvthistorymessages[msgindex]?.text}</Text></ScrollView>}</View>
      </View>
      <View style={{paddingTop: prvtmessages[0]?.text.length<25?10:20,flexDirection: "row",flexWrap: "wrap",}}><TouchableOpacity
          style={{ backgroundColor: prvtmessages[0]?.headercolor,width:"50%" ,    borderWidth: 1, borderColor:prvtmessages[0]?.boxcolor
        }}onPress={() => {getuserdata(prvtmessages[0]?.from);setselecteduserid(prvtmessages[0]?.from);setsendmsgmodal(true);}} >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>Reply</Text></TouchableOpacity><TouchableOpacity
          style={{ backgroundColor: prvtmessages[0]?.headercolor,width:"50%", borderWidth: 1 ,borderColor:prvtmessages[0]?.boxcolor}}onPress={()=> {getuserdata(prvtmessages[0]?.from); modal();}} >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>About user</Text></TouchableOpacity>
</View>
      </View></View>
</Modal>


{/* start prvt msg pop-up  */}
<Modal transparent={true}  visible={privatemsgshow} onRequestClose={() => { setprivatemsgshow(false); 
  }}>
       <View style={styles.centeredView}>
       <View style={{width: 240, height:  prvthistorymessages[msgindex]?.text.length<25?80:180,borderRadius: 5,backgroundColor:prvthistorymessages[msgindex]?.boxcolor,shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={[styles.modalheader,{backgroundColor:prvthistorymessages[msgindex]?.headercolor}]} ><Text style={{fontSize:17, paddingVertical:1,paddingRight:"30%",color:"white"}} >{tempuser[allusersindex]?.name}</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> {setprivatemsgshow(false); }}><Image style={[styles.modalheaderclose,{marginLeft:0,backgroundColor:prvthistorymessages[msgindex]?.boxcolor}]} source={require('./images/close.png')} /></TouchableOpacity></View>
      <View style={{ flexDirection: "row",flexWrap: "wrap",alignItems:"center",justifyContent:"center" ,paddingTop:5}}>
      <View>{ prvthistorymessages[msgindex]?.text.length<25?<Text style={{fontSize:18,}} > {prvthistorymessages[msgindex]?.text}</Text>:<ScrollView style={{minHeight:125, maxHeight:125, paddingLeft:5}}><Text style={{fontSize:18,}} > {prvthistorymessages[msgindex]?.text}</Text></ScrollView>}</View>
      </View>
      <View style={{paddingTop: prvthistorymessages[msgindex]?.text.length<25?10:20,flexDirection: "row",flexWrap: "wrap",}}><TouchableOpacity
          style={{ backgroundColor: prvthistorymessages[msgindex]?.headercolor,width:"50%" ,    borderWidth: 1, borderColor:prvthistorymessages[msgindex]?.boxcolor
        }}onPress={() => {getuserdata(prvthistorymessages[msgindex]?.from);setselecteduserid(prvthistorymessages[msgindex]?.from);setsendmsgmodal(true);}} >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>Reply</Text></TouchableOpacity><TouchableOpacity
          style={{ backgroundColor: prvthistorymessages[msgindex]?.headercolor,width:"50%", borderWidth: 1 ,borderColor:prvthistorymessages[msgindex]?.boxcolor}}onPress={()=> {getuserdata(prvthistorymessages[msgindex]?.from); modal();}} >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>About user</Text></TouchableOpacity>
</View>
      </View></View>
</Modal>





{/* start profile modal  */}
  <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
           setModalVisible(!modalVisible);
        }}
      >
        <View style={modalstyle.centeredView}>
        <View style={modalstyle.mainmodalView}>
        <View style={modalstyle.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={ modaldic }><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
<View style={{ alignItems:"flex-start",paddingLeft:10}}>
  
        <TouchableOpacity activeOpacity = { .2 } onPress={()=> isSingnin? setsendmsgmodal(current=>true):loginalert()  } ><View  style={{flexDirection: "row",flexWrap: "wrap",paddingHorizontal:5,paddingTop:5,}}><Text style={{paddingRight:8}}>{t("Private Message to : ")}</Text><Image style={{width: 14,height: 14, marginTop:4,marginRight:5, }} source={{uri: userDetails?.crownlink,}}/><Text >{userDetails?.name }</Text></View></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{ if(isSingnin){ getinprvtmsghistory();  setprvtmsghistorymodal(current=>true)} else {loginalert()}}}><Text style={[modalstyle.modalmenu,{textAlign: "left"}]}>{t("Private Message History")}</Text><Divider style={{height:2,width:260}}/></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={ ()=> setphotoModalVisible(current=>true) }><View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('./images/camera.png')} /><Text style={styles.modalmenu}>{t("View Photo")}</Text></View></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } ><View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('./images/book.png')} /><Text style={styles.modalmenu}>{t("Photo Album")}</Text></View></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={  ()=>setuserinfomodal(true)} ><View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('./images/info.png')} /><Text style={styles.modalmenu}>{t("information")}</Text></View></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setratingmodal(true)} ><Text style={modalstyle.modalmenu}>{t("Rating")}</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={  ()=>{if(isSingnin) {addtoignor(); }else {loginalert()}} }><Text style={modalstyle.modalmenu}>{t("ignore")} </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{ if(isSingnin) { addtocontacts();}else {loginalert()}}} ><View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('./images/phone-book.png')} /><Text style={styles.modalmenu}>{t("Add to Contact book")}</Text></View><Divider style={{height:2,width:220}}/></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{  getroomdata();setabuotroommodal(true)}}><Text style={modalstyle.modalmenu}>{t("About Room")}</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setcomingsoonmodal(current=>true)} ><Text style={modalstyle.modalmenu}>{t("Link to Chat")}</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setcomingsoonmodal(current=>true)}><Text style={[modalstyle.modalmenu,{textAlign: "left"}]}>{t("Message to Chat")}</Text><Divider style={{height:2,width:220}}/></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{if(isSingnin){setsendpursemodal(true)}else {loginalert()}}}><Text style={modalstyle.modalmenu}>{t("Send")}</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=> {
          if(isSingnin){
          if(currentuserDetails?.role=="admin" && currentuserDetails.id <10)
          {setadmininfomodal(current=>true)}
          else
          {
            alert(t("this section only for admins !"));
          }
          }
          else
          {loginalert();}
        
        }  }><Text style={modalstyle.modalmenu}>{t("Distance")}</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={  ()=>{ setcomingsoonmodal(true)} } ><Text style={modalstyle.modalmenu}>{t("Make Gift")}</Text></TouchableOpacity>
        <Divider />
        </View>
  
          </View>
        </View>
      </Modal>

{/* end profile modal */}

{/*  start private message history  */}
<Modal transparent={true}  visible={prvtmsghistorymodal} onRequestClose={() => { 
       setprvtmsghistorymodal(!prvtmsghistorymodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 320, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,color:"#F6FAFA", paddingVertical:2,paddingRight:50}}>message history</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setprvtmsghistorymodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{  paddingLeft:2, height:420}} >
      <FlatList 
        keyExtractor={(item,index) => item.id} 
        data={prvthistorymessages} 
        renderItem={({ item,index }) => ( 
          <View style={{ paddingVertical:0, }}>
           
           <TouchableOpacity activeOpacity = { 0.1 }  onPress={()=>{setmsgindex(index);setprivatemsgshow(true)}}>
           <View style={{ flexDirection: "row",paddingBottom:1}}>
              <View style={{ width:"30%"}}><Text  numberOfLines={1} ellipsizeMode="tail" style={{fontSize:16,maxWidth:80}}>{item.fromname}</Text></View>
              <View style={{backgroundColor:"#ffffdb",width:"35%"}}><Text style={{fontSize:16,maxWidth:90,fontWeight:"500"}}  numberOfLines={1} ellipsizeMode="tail"> {item.text}   </Text></View>
              <View style={{backgroundColor:"#DFDFDF", width:"35%", }}><Text style={{fontSize:16,maxWidth:100}} numberOfLines={1} ellipsizeMode="tail"> {item?.createdAt?.toString()}   </Text></View>
           </View><Divider style={{height:1}}/>
           </TouchableOpacity>
           </View>
        )}
      />
      </View></View></View></View>
      </Modal>

      

{/* start profile picture modal */}
      <Modal transparent={true}  visible={photomodalVisible} onRequestClose={() => { 
       setphotoModalVisible(!photomodalVisible);}}>
       <View style={styles.centeredView}>
       <View style={modalstyle.profilephotomodalview}>
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setphotoModalVisible(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
         <Image
          style={{width: 225, height: 225 ,   marginLeft:5, }}
          source={{uri: userDetails?.photoURL }}/>
          </View>
         </View>
       </View>
     </Modal>
{/* end profile picture modal */}

{/* information modal */}
     <Modal transparent={true}  visible={infomodalVisible} onRequestClose={() => { 
       setinfoModalVisible(!infomodalVisible);}}>
       <View style={styles.centeredView}>
       <View style={modalstyle.profilephotomodalview}>
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setinfoModalVisible(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
      <Text> City : {JSON.stringify(userDetails?.address?.City)}</Text>
      <Text> country_code : {JSON.stringify(userDetails?.address?.country_code)}</Text>
      <Text> country_name : {JSON.stringify(userDetails?.address?.country_name)}</Text> 
      </View>
      </View>
         </View>
       </View>
     </Modal>
{/* end of information modal */}
 
{/* start send private msg modal */}
 <Modal transparent={true}  visible={sendmsgmodal} onRequestClose={() => { 
       setsendmsgmodal(!sendmsgmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>send private message</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setsendmsgmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input message "
          value={prvttext}
          onChangeText={prvttext => setprvttext(prvttext)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10,color:"#9f977d"}}/> 
    <Button
            
          title="send message"
          onPress={() => {
            sendprvtmsg();
myTextInput.current.clear()
 setsendmsgmodal(current=>false);}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>
{/* end of private message */}

{/* user information  */}
      {userinfo(userinfomodal, setuserinfomodal, t, userDetails, currentuserDetails)}
  
{/*  start public room modal */}
 
     <Modal transparent={true}  visible={publicroommodal} onRequestClose={() => { 
       setpublicroommodal(!publicroommodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 350, height: 500, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.50,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setpublicroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
    

       <View style={{ flex: 1, }} >
<View >

<View style={{ paddingVertical:5, paddingLeft:0,}} >  

<View style={{height:465}}>
<FlatList  
 keyExtractor={(item,index) => item.id} 
 data={rooms}
 renderItem={({ item,index }) => {
  if(index>=minitem &&index<=maxitem)
 return (
 <View style={{ paddingTop:8,paddingLeft:-5,backgroundColor: click===index ? '#ADAEFB':'transparent'}}>
<TouchableOpacity style={{}} activeOpacity = { 0.1 } onPress={ ()=>{ 
setclick(index);
setidd(current => item._id);}}>
<Text style={{fontSize:17 ,paddingLeft:5, alignSelf: 'flex-start',fontWeight:"500"}}>{item.name} </Text></TouchableOpacity><Divider style={{height:1 ,marginTop:3}} />
</View>)}}
/><View style={{paddingTop:1,flexDirection: "row",flexWrap: "wrap",}}><TouchableOpacity
          style={{ width:"50%" ,    borderWidth: 1,}} onPress={()=>{
        
              selectroom(rooms[click]?._id,rooms[click]?.name)

           
          
          } }
            >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>Enter Room</Text></TouchableOpacity>
      
      <TouchableOpacity
          style={{ width:"50%", borderWidth: 1 }}onPress={()=> {setroomsmallmodal(true);}}>
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>More</Text></TouchableOpacity>
</View></View>



        





</View></View></View>



         </View>
       </View>
     </Modal>
    {/*  end public room modal */}

 {/*  start private room modal */}
 
 <Modal transparent={true}  visible={prvtroommodal} onRequestClose={() => { 
       setprvtroommodal(!prvtroommodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 350, height: 500, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.50,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setprvtroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
    

       <View style={{ flex: 1, }} >
<View >

<View style={{ paddingVertical:5, paddingLeft:0,}} >  

<View style={{height:465}}>
<FlatList 
   keyExtractor={(item,index) => item.id} 
   data={prvtrooms} 
   renderItem={({ item,index }) => ( 
  <View style={{ paddingTop:8,paddingLeft:-5,backgroundColor: click===index ? '#ADAEFB':'transparent'}}>
  <TouchableOpacity activeOpacity = { 0.1 } onPress={ ()=>{ setclick(current=> index); }}>
    <View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('./images/lock.png')} /><Text style={{fontSize:17 ,paddingLeft:5, alignSelf: 'flex-start',fontWeight:"500"}}>{item.name}</Text></View></TouchableOpacity><Divider style={{height:1 ,marginTop:3}} />
  </View>)}
/><View style={{paddingTop:1,flexDirection: "row",flexWrap: "wrap",}}><TouchableOpacity
      onPress={()=>{  joinprvtroom(prvtrooms[click]?._id,prvtrooms[click]?.name)      }}     style={{ width:"50%" ,    borderWidth: 1,}}  >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>Enter Room </Text></TouchableOpacity>
      
      <TouchableOpacity
          style={{ width:"50%", borderWidth: 1 }}onPress={()=> {setroomsmallmodal(true);}} >
      <Text style={{    fontSize: 16,fontWeight: '400',textAlign:"center"}}>More</Text></TouchableOpacity>
</View></View></View></View></View>



         </View>
       </View>
     </Modal>
    {/*  end private room modal */}
 
  {/*  start country room modal */}
 
  <Modal transparent={true}  visible={countryroommodal} onRequestClose={() => { 
       setcountryroommodal(!countryroommodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 350, height: 500, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.50,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setcountryroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
    

       <View style={{ flex: 1, }} >
<View >

<View style={{ paddingVertical:5, paddingLeft:0,}} >  

<View style={{height:390}}>
<FlatList 
     keyExtractor={(item,index) => item.id} 
     data={countryrooms} 
     renderItem={({ item,index }) => ( 
    <View style={{ paddingVertical:8,paddingLeft:-5,}}>
    <TouchableOpacity activeOpacity = { 0.1 } onPress={ ()=>{ 
    if(isSingnin){
          if(currentuserDetails?.name!=null)
          {console.log("not getiing-----------------")}
          else
          {getcurrentuserdata() ; console.log(" getiing//////////////") }
         
  
  if(currentuserDetails.role=="admin")
  {
    setidd(current => item._id);
    chatid=item._id
   joinroom(item.name);
   saveroomid(item._id);
    getmessages();
    checkcrowninroom();
    setchatmodal(true);
   setroommodal(!roommodal)
   setcountryroommodal(current=>false)
  }
  else
  {
  
         db.collection("rooms").where(firebase.firestore.FieldPath.documentId() ,"==",item._id).where("invited", "array-contains", app.auth().currentUser.uid)
         .get()
         .then((querySnapshot) => {
           if(!querySnapshot.empty){
            setidd(current => item._id);
            chatid=item._id
           joinroom(item.name);
           saveroomid(item._id);
            getmessages();
            checkcrowninroom();
            setchatmodal(true);
           setroommodal(!roommodal)
           setcountryroommodal(current=>false)
              
               
           }
           else{
  
            alert("you can't join this room  !");
     
     }}).catch((error) => {
             console.log("Error getting documents: ", error);
         });}}
      
       }}>
    <View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('./images/country.png')} /><Text style={{fontSize:17 ,paddingLeft:5, alignSelf: 'flex-start',fontWeight:"500"}}>{item.name}</Text></View></TouchableOpacity><Divider style={{height:1 ,marginTop:3}} />
    </View>)}
/></View></View></View></View>



         </View>
       </View>
     </Modal>
    {/*  end country room modal */}
 {/* room small modal */}
  

 <Modal transparent={true}  visible={roomsmallmodal} onRequestClose={() => { 
       setroomsmallmodal(!roomsmallmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 250, height: 170, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.50,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setroomsmallmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
    

       <View style={{ flex: 1, }} >
<View >

<View style={{ paddingVertical:5, paddingLeft:5,}} > 
<TouchableOpacity activeOpacity = {0.1 } onPress={()=> setcreateroommodal(true)}><Text style={{fontSize:17,fontWeight:"400",paddingBottom:3}}>Create {roomtype} Room</Text>
</TouchableOpacity><Divider/>
<TouchableOpacity activeOpacity = {0.1 } onPress={()=>{{if(maxitem<rooms.length){setminitem(minitem+10);setmaxitem(maxitem+10); }else{alert("there is no more pages")}}}}><Text style={{fontSize:17,fontWeight:"400",paddingBottom:3}} >Next Page </Text></TouchableOpacity>
<TouchableOpacity activeOpacity = {0.1 } onPress={()=>{{if(minitem>=9){setminitem(minitem-10);setmaxitem(maxitem-10);}else{alert("you are in the first page !")}}}}><Text style={{fontSize:17,fontWeight:"400",paddingBottom:3}} >previous Page</Text></TouchableOpacity><Divider/>
<TouchableOpacity activeOpacity = {0.1 } onPress={()=>{setsearchroommodal(true)}}><Text style={{fontSize:17,fontWeight:"400",paddingBottom:3}}>Search Room</Text></TouchableOpacity>
<TouchableOpacity activeOpacity = { .2 } onPress={()=>{  getroomdata();setabuotroommodal(true)}}><Text style={{fontSize:17,fontWeight:"400",paddingBottom:3,textAlign:"left"}}>{t("About Room")}</Text></TouchableOpacity>
      </View></View></View>
 
         </View>
       </View>
     </Modal>





{/*  start room modal */}
 
<Modal transparent={true}  visible={roommodal} onRequestClose={() => { 
       setroommodal(!roommodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 445, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.50,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
    

       <View style={{ flex: 1, }} >
<View >

<View style={{ paddingVertical:2, paddingLeft:0,}} >  


<View style={{ flexDirection: "row"}}>
              <View style={{backgroundColor:"#DFDFDF", width:"75%",paddingLeft:5 ,marginVertical:5}}>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[0]?._id,rooms[0]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[0]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[1]?._id,rooms[1]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[1]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[2]?._id,rooms[2]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:4}} numberOfLines={1} ellipsizeMode="tail">{rooms[2]?.name}</Text></TouchableOpacity>
              <Divider style={{height:1.5}}/>
              <TouchableOpacity activeOpacity = { 0.1 }  ><Text style={{fontSize:16,paddingBottom:2}} numberOfLines={1} ellipsizeMode="tail">favourities rooms</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 }  ><Text style={{fontSize:16,paddingBottom:2}} numberOfLines={1} ellipsizeMode="tail">where i am owner</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 }  ><Text style={{fontSize:16,paddingBottom:2}} numberOfLines={1} ellipsizeMode="tail">Where i am moderator</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 }  ><Text style={{fontSize:16,paddingBottom:4}} numberOfLines={1} ellipsizeMode="tail">Wich i created</Text></TouchableOpacity>
              <Divider style={{height:2}}/>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {setroomtype("public");setminitem(0);setmaxitem(9);setpublicroommodal(true)}} ><Text style={{fontSize:18,paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">Public</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {setroomtype("country");setminitem(0);setmaxitem(9);setcountryroommodal(true)}} ><Text style={{fontSize:18,paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">By Country / Region </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {setroomtype("private");setminitem(0);setmaxitem(9);setprvtroommodal(true)}} ><Text style={{fontSize:18,paddingBottom:4}} numberOfLines={1} ellipsizeMode="tail">Private</Text></TouchableOpacity>

              <Divider style={{height:2}}/>

              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[3]?._id,rooms[3]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[3]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[4]?._id,rooms[4]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[4]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[5]?._id,rooms[5]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[5]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[6]?._id,rooms[6]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[6]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[7]?._id,rooms[7]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[7]?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity = { 0.1 } onPress={() => {selectroom(rooms[8]?._id,rooms[8]?.name)}} ><Text style={{fontSize:16,textAlign:"left",paddingBottom:3}} numberOfLines={1} ellipsizeMode="tail">{rooms[8]?.name}</Text></TouchableOpacity>

              
              
              </View>
              <View style={{backgroundColor:"#ffffdb",width:"25%",marginVertical:5}}>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[0]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[1]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:4,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[2]?.joinedusers?.length}</Text>
              <Divider style={{height:1.5}}/>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:2}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:2}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:2}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:4}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Divider style={{height:1.5}}/>
              <Text style={{fontSize:18,maxWidth:90,fontWeight:"500",paddingBottom:3}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Text style={{fontSize:18,maxWidth:90,fontWeight:"500",paddingBottom:3}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Text style={{fontSize:18,maxWidth:90,fontWeight:"500",paddingBottom:4}}  numberOfLines={1} ellipsizeMode="tail">  </Text>
              <Divider style={{height:1.5}}/>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[3]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[4]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[5]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[6]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[7]?.joinedusers?.length}</Text>
              <Text style={{fontSize:16,maxWidth:90,fontWeight:"500",paddingBottom:3,textAlign:"center"}}  numberOfLines={1} ellipsizeMode="tail">{rooms[8]?.joinedusers?.length}</Text>

              
              
              </View>

           </View>
           



</View></View></View>



         </View>
       </View>
     </Modal>
    {/*  end room modal */}


{/* start profile modal  */}

      {editprofile(profilemodal, setprofilemodal, setchangenamemodal, currentuserDetails, setchangepasswordmodal, sethangephotomodal, setcomingsoonmodal, setchangecitymodal, setchangecountrymodal)}

{/* end profile modal */}

{/* start change nickname modal */}

      {editname(changenamemodal, setchangenamemodal, myTextInput, changename, setchangename, changenickname, getcurrentuserdata)}



{/* end  change nickname modal */}


{/* start change city modal */}

<Modal transparent={true}  visible={changecitymodal} onRequestClose={() => { 
       setchangecitymodal(!changecitymodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change City</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangecitymodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={myTextInput}
          placeholder="input your new City "
          maxLength={15}
          value={changename}
          onChangeText={changename => setchangename(changename)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change City"
          onPress={() => {
            changecity();
      myTextInput.current=''
      setchangename('');
alert("City changed successfully");
getcurrentuserdata();}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* end  change city modal */}

{/* start change country modal */}

<Modal transparent={true}  visible={changecountrymodal} onRequestClose={() => { 
       setchangecountrymodal(!changecountrymodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 400, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change country</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangecountrymodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
    <View style={{height:250}}><CountrySelectDropdown
        countrySelect={setCountry}
          
    /></View>
    

        
        
        <Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change City"
          onPress={() => {if(country==null || country=="undefined"||country.length<2 )
            {alert("please select country first")
          }else{   changecountry(getName(country));}
          
  }}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* end  change city modal */}

{/* start change country modal */}

<Modal transparent={true}  visible={changemerchantmodal} onRequestClose={() => { 
       setchangemerchantmodal(!changemerchantmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 400, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>make merchant</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangemerchantmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
    <View style={{height:250}}><CountrySelectDropdown
        countrySelect={setCountry}
          
    /></View>
    

        
        
        <Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="make a merchant"
          onPress={() => {if(country==null || country=="undefined"||country.length<2 )
            {alert("please select country first")
          }else{   makemerchent(getName(country));}
          
  }}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* end  change city modal */}

{/* start change password modal */}

<Modal transparent={true}  visible={changepasswordmodal} onRequestClose={() => { 
       setchangepasswordmodal(!changepasswordmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change password </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangepasswordmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input your new password "
          maxLength={15}
          value={changename}
          onChangeText={changename => setchangename(changename)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change password"
          onPress={() => {
            changepassword();
myTextInput.current.clear();
setchangename('');
getcurrentuserdata();
 }}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* end  change password modal */}



{/* start change id modal */}

<Modal transparent={true}  visible={changeuseridmodal} onRequestClose={() => { 
       setchangeuseridmodal(!changeuseridmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change id </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangeuseridmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input users new id "
          maxLength={10}
          value={changename}
          onChangeText={changename => setchangename(changename)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change id"
          onPress={() => {
            changeuserid();
myTextInput.current.clear();
setchangename('');
getcurrentuserdata();
 }}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>


{/* start change id modal */}

<Modal transparent={true}  visible={changeroomidmodal} onRequestClose={() => { 
       setchangeroomidmodal(!changeroomidmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change id </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangeroomidmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input room new id "
          maxLength={6}
          value={changename}
          onChangeText={changename => setchangename(changename)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change  Room id"
          onPress={() => {
           changeroomid();
myTextInput.current.clear();
setchangename('');
getroomdata(); 
}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>


{/* start change user messages count modal */}

<Modal transparent={true}  visible={changeusermsgmodal} onRequestClose={() => { 
       setchangeusermsgmodal(!changeusermsgmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change message count </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangeusermsgmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input users new message number "
          maxLength={10}
          value={changename}
          onChangeText={changename => setchangename(changename)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change"
          onPress={() => {
            changeusermsg();
myTextInput.current.clear();
setchangename('');
getcurrentuserdata();
 }}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>


     <Modal transparent={true}  visible={changepvrtmsgmodal} onRequestClose={() => { 
       setchangepvrtmsgmodal(!changepvrtmsgmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change private message count </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setchangepvrtmsgmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input users new message number "
          maxLength={8}
          value={changename}
          onChangeText={changename => setchangename(changename)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="change"
          onPress={() => {
            changeuserpvrtmsg();
myTextInput.current.clear();
setchangename('');
getcurrentuserdata();
 }}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* create room modal  */}
<Modal transparent={true}  visible={createroommodal} onRequestClose={() => { 
       setcreateroommodal(!createroommodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>Create Room</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setcreateroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
   
    
    <TextInput
        style={{paddingTop:10}} 
        ref={ myTextInput}
          placeholder="input room name "
          maxLength={15}
          value={createroomname}
          onChangeText={createroomname => setcreateroomname(createroomname)}
        /><Divider style={{height:1,marginBottom:25,marginTop:10}}/> 
    <Button
            
          title="Create Room"
          onPress={() => {
           createroom(roomtype);
myTextInput.current.clear()
getrooms();
getprvtrooms();getcountryrooms();
setcreateroommodal(current=>false);}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* start comming soon moodal add modal for next version  */}
<Modal transparent={true}  visible={comingsoonmodal} onRequestClose={() => { 
       setcomingsoonmodal(!comingsoonmodal);}}>
       <View style={styles.centeredView}>
       <View style={[modalstyle.profilephotomodalview,{height:200}]}>
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setcomingsoonmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ justifyContent: "center" , alignItems: "center",}} >
      <Text style={{fontSize:24,color:"#004DD3",paddingTop:40}}>Coming Soon...</Text>
 
      </View>
      </View>
         </View>
       </View>
     </Modal>
{/*  end comming soon moodal add modal for next version  */}


 {/* login modal */}
 <Modal transparent={true}  visible={islogin} onRequestClose={() => { 
       setislogin(false);}}>
       <View style={styles.centeredView}>
       <View style={{width: 220, height: 190, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setislogin(false) }><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:0, paddingLeft:5,}} >
    <TextInput
    ref={ myTextInput}
          style={styles.inputStyle}
          placeholder="username"
          maxLength={15}
          value={email}
          onChangeText={email => setEmail(email)}
        />
     <TextInput
     ref={ myTextInput}
      placeholder='Enter your password'
      label='Password'
      style={styles.inputStyle}
      value={password} 
      onChangeText={password => setPassword(password)}
      secureTextEntry
      />
    <View style={{  flexDirection: 'row', justifyContent: 'center' }}>
    <Button
          color="#3740FE"
          title="Login"
          onPress={() => {userLogin();myTextInput.current.clear()}}
        /></View>

      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* start about room modal  */}

      {aboutroommodalfun(abuotroommodal, setabuotroommodal, roomdata, currentuserDetails, setroomcntrol, getalluserdatas, setuserinroommodal, setvotemodal)}

{/* end about room modal  */}

{/* start Vote modal */}

<Modal transparent={true}  visible={votemodal} onRequestClose={() => { 
       setvotemodal(!votemodal);}}>
       <View style={styles.centeredView}>
       <View style={[modalstyle.profilephotomodalview,{height:162}]}>
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setvotemodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={{paddingLeft:12,backgroundColor:"#dfdfdf", flexDirection: "row",flexWrap: "wrap",}}>
    <View style={{width:"60%"}} >
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(0.15,10);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>+ 10       Points</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(0.44,30);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>+ 30       Points</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(1.44,100);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>+ 100     Points</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(13.5,1000);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>+ 1000   points</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(130 ,10000);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>+ 10000 Points</Text></TouchableOpacity>
      </View>
      <View style={{width:"40%",backgroundColor:"#ffffdb"}} >
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(0.15,10);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>0.15 $</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(0.44,30);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>0.44 $</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(1.44,100);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>1.44 $</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(13.5,1000);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>13.5 $</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } onPress={()=>{voteroom(130 ,10000);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>130.0 $</Text></TouchableOpacity>
      </View>
      </View>
         </View>
       </View>
     </Modal>

     <Modal transparent={true}  visible={ratingmodal} onRequestClose={() => { 
       setratingmodal(!ratingmodal);}}>
       <View style={styles.centeredView}>
       <View style={[modalstyle.profilephotomodalview,{height:150}]}>
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setratingmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={{paddingLeft:12,backgroundColor:"#dfdfdf", flexDirection: "row",flexWrap: "wrap",}}>
    <View style={{width:"60%"}} >
      <TouchableOpacity activeOpacity = { .2 }  ><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>Messages</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 }  ><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>Private Messages</Text></TouchableOpacity>
  
      <TouchableOpacity activeOpacity = { .2 }  ><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}>Raiting</Text></TouchableOpacity>
       
      </View>
      <View style={{width:"40%",backgroundColor:"#ffffdb"}} >
      <TouchableOpacity activeOpacity = { .2 } ><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>{userDetails?.sendmsgs}</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } ><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>{userDetails?.sendprvtmsg}</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity = { .2 } ><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5}}>{Number(userDetails?.sendmsgs+userDetails?.sendprvtmsg)} </Text></TouchableOpacity>
 
      </View>
      </View>
         </View>
       </View>
     </Modal>


{/* end vote modal */}

 
 

{/* end vote modal */}




{/* start users in room  modal */}

<Modal transparent={true}  visible={userinroommodal} onRequestClose={() => { 
       setuserinroommodal(!userinroommodal);}}>
       <View style={styles.centeredView}>
       <View style={[modalstyle.profilephotomodalview,{width:300,height:roomdata?.joinedusers?.length<10?(roomdata?.joinedusers?.length*35):300}]}>
       <View style={styles.modalheader} ><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setuserinroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
     
       <FlatList 
        keyExtractor={(item,index )=> item.id} 
        data={roomdata.joinedusers} 
        renderItem={({ item,index }) => { 
          for(var i=0;i<tempuser.length;i++)
          if(item.userid==tempuser[i]._id)
{  return(  <View style={{paddingLeft:2,backgroundColor:"#dfdfdf", flexDirection: "row",flexWrap: "wrap",}}>
         <View style={ {width:"5%",  justifyContent:"flex-end",
    alignItems:"flex-end", 
    flexDirection: "row",} } >{tempuser[i].gender=="female"?<Image style={{  width:18,height:18,}} source={require('./images/female.png')} />:<Image style={{height:18,width:18}} source={require('./images/male.png')} />}</View>

          <View style={{width:"55%"}} >
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{getuserdata(item.userid);setabuotroommodal(false);setuserinroommodal(false);}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5}}> {tempuser[i]?.name}</Text></TouchableOpacity>
        </View>
        <View style={{width:"40%",backgroundColor:"#ffffdb"}} >
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{}}><Text style={{fontSize:16,fontWeight:"500",paddingTop:5,paddingLeft:5 ,width:"300%"}}>{tempuser[index]?.address?.City} : {tempuser[i]?.gender}</Text></TouchableOpacity>
        </View>
        </View>)}
 }}
      />






         </View>
       </View>
     </Modal>

 

{/* end users in room  modal */}




{/* start edit user modal for admin */}

<Modal
        animationType="slide"
        transparent={true}
        visible={admininfomodal}
        onRequestClose={() => {
           setadmininfomodal(!admininfomodal);
        }}
      >
        <View style={modalstyle.centeredView}>
        <View style={{ width: 300,
       height: 380,
        margin: 100,
         borderRadius: 5,
         backgroundColor:"#DFDFDF",
       shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5}}>
        <View style={modalstyle.modalheader} >
        <TouchableOpacity activeOpacity = {0.1 } onPress={ ()=>setadmininfomodal(false) }><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
      
      <View style={{ paddingLeft:5,flexDirection: "row",flexWrap: "wrap",}}>
      <View>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{ blockfromroom();}}><Text style={modalstyle.fontsize16}> block from this room  </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>deleteroom()}><Text style={modalstyle.fontsize16}>Delete this room   </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 }onPress={()=>givecrownn()} ><Text style={modalstyle.fontsize16}>give crown for this room  </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>deleteuser()}><Text style={modalstyle.fontsize16}>disable this person</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setchangemerchantmodal(true)}><Text style={modalstyle.fontsize16}>make as merchent</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>maketopuser()}><Text style={modalstyle.fontsize16}>Make him Top User</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setchangeuseridmodal(true)}><Text style={modalstyle.fontsize16}>change user id</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setchangeusermsgmodal(true)}><Text style={modalstyle.fontsize16}>change user meesage numbers</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setchangepvrtmsgmodal(true)}><Text style={modalstyle.fontsize16}>change private meesage number</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setchangeroomidmodal(true)}><Text style={modalstyle.fontsize16}>change Room id</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>alert(userDetails?.password)}><Text style={modalstyle.fontsize16}>show password</Text></TouchableOpacity>

        </View>
 
        </View>
          </View>
        </View>
</Modal>

 
{/* end edit user modal  */}



{/* start edit user modal for admin */}

      {inroomcontrolmodal(roomcntrol, setroomcntrol, currentuserDetails, blockfromroom, roomdata, deleteroom, givecrownn, makeroomprivate, makeroompublic, idd, selecteduserid, userDetails, makeroomcountry, getsearchuser, setinvitemodal)}

 
{/* end edit user modal  */}


{/* end about  change profile picture modal */}

<Modal transparent={true}  visible={changephotomodal} onRequestClose={() => { 
       sethangephotomodal(!changephotomodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>change profile</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> sethangephotomodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:5,}} >
    <Button
         title="change photo"
          onPress={() => {getPermission();pickImage()}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* end  change profile picture modal */}
 
 {/* search modal  */}

 <Modal transparent={true}  visible={searchmodal} onRequestClose={() => { 
       setsearchmodal(!searchmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 400, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>search by id </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setsearchmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:0,}} >
   
    
    <TextInput
        style={{paddingTop:10,paddingBottom:15}} 
        ref={myTextInput}
          placeholder="search With Id or Name" 
          maxLength={15}
          value={searchtxt}
          onChangeText={searchtxt => setsearchtxt(searchtxt)}
        /> 
    <View style={{flexDirection: "row",
    flexWrap: "wrap",alignContent:"center",alignItems:"center"}}>
      
      <View style={{paddingHorizontal:25 ,width:140}}><Button
          title="  ID  "
          onPress={() => {
            getsearchuserbyid();
            console.log("================>"+searcheduser.name)
            myTextInput.current.clear();
            setsearchtxt('');
           }}
        /></View>

        <View style={{paddingLeft:0 ,width:100}}><Button
          title="Name"
          onPress={() => {
            setsearcheduser(null);
            getsearchuserbyname();
            myTextInput.current.clear();
            setsearchtxt('');
           }}
        />
        </View>
        </View>  
        <View style ={{paddingTop:10}}>
        <View style={{height:250}}>
        <FlatList 
        keyExtractor={item => item.id} 
        data={searcheduser} 
        renderItem={({ item }) => ( 
          <View style={{ paddingVertical:5, paddingLeft:5,}}>
          <TouchableOpacity onPress={()=>{getuserdata(item._id);modal()}}><Text>{item.name}</Text></TouchableOpacity></View>)}
      /></View>
          </View> 
      </View>
      </View>
         </View>
       </View>
     </Modal>

{/* end search modal */}

 {/* search  Room modal  */}

 <Modal transparent={true}  visible={searchroommodal} onRequestClose={() => { 
       setsearchroommodal(!searchroommodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>search room   </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setsearchroommodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:0,}} >
   
    
    <TextInput
        style={{paddingTop:10,paddingBottom:15}} 
        ref={myTextInput}
          placeholder="search With Id or Name" 
          maxLength={15}
          value={searchtxt}
          onChangeText={searchtxt => setsearchtxt(searchtxt)}
        /> 
    <View style={{flexDirection: "row",
    flexWrap: "wrap",alignContent:"center",alignItems:"center"}}>
      
      <View style={{paddingHorizontal:25 ,width:140}}><Button
          title="  ID  "
          onPress={() => {
            getsearchroombyid();
            console.log("================>"+searcheduser.name)
            myTextInput.current.clear();
            setsearchtxt('');
           }}
        /></View>

        <View style={{paddingLeft:0 ,width:100}}><Button
          title="Name"
          onPress={() => {
            setsearchedrooms(null);
            getsearchroombyname();
            myTextInput.current.clear();
            setsearchtxt('');
           }}
        />
        </View>
        </View>  
        <View style ={{paddingTop:10}}>
        <View style={{height:250}}>
        <FlatList 
        keyExtractor={item => item.id} 
        data={searchedrooms} 
        renderItem={({ item }) => ( 
          <View style={{ paddingVertical:5, paddingLeft:5,}}>
          <TouchableOpacity onPress={()=>{setidd(item?._id);getroomdata();setabuotroommodal(true);}}><Text>{item?.name}  : {item?.type}</Text></TouchableOpacity></View>)}
      /></View>
          </View> 
      </View>
      </View>
         </View>
       </View>
     </Modal>

{/* end search modal */}
{/* searched user  */}

{/* start invite */}

 <Modal transparent={true}  visible={invitemodal} onRequestClose={() => { 
       setinvitemodal(!invitemodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 400, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>invite </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setinvitemodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:0,}} >
   
    
    <TextInput
        style={{paddingTop:10,paddingBottom:15}} 
        ref={myTextInput}
          placeholder="search With Id or Name" 
          maxLength={15}
          value={searchtxt}
          onChangeText={searchtxt => setsearchtxt(searchtxt)}
        /> 
    <View style={{flexDirection: "row",
    flexWrap: "wrap",alignContent:"center",alignItems:"center"}}>
      
      <View style={{paddingHorizontal:25 ,width:140}}><Button
          title="  ID  "
          onPress={() => {
            getsearchuserbyid();
            console.log("================>"+searcheduser.name)
            myTextInput.current.clear();
            setsearchtxt('');
           }}
        /></View>

        <View style={{paddingLeft:0 ,width:100}}><Button
          title="Name"
          onPress={() => {
            setsearcheduser(null);
            getsearchuserbyname();
            myTextInput.current.clear();
            setsearchtxt('');
           }}
        />
        </View>
        </View>  
        <View style ={{paddingTop:10}}>
        <View style={{height:250}}>
        <FlatList 
        keyExtractor={item => item.id} 
        data={searcheduser} 
        renderItem={({ item }) => ( 
          <View style={{ paddingVertical:5, paddingLeft:5,}}>
          <TouchableOpacity onPress={()=>{invitetoroom(item._id,item.id,item.name);}}><Text>{item.name}</Text></TouchableOpacity></View>)}
      /></View>
          </View> 
      </View>
      </View>
         </View>
       </View>
     </Modal>




 

 
{/* pures */}

<Modal
        animationType="slide"
        transparent={true}
        visible={puresmodal}
        onRequestClose={() => {
           setpuresmodal(!puresmodal);
        }}
      >
        <View style={modalstyle.centeredView}>
        <View style={{ width: 280,
       height: 245,
        margin: 100,
         borderRadius: 5,
         backgroundColor:"#DFDFDF",
       shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5}}>
        <View style={modalstyle.modalheader} >
        <TouchableOpacity activeOpacity = {0.1 } onPress={ ()=>setpuresmodal(false) }><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
      
      <View style={{ paddingLeft:5,flexDirection: "row",flexWrap: "wrap",}}>
      <View>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{getpursehistory();setpursehistorymodal(current=>true)}}><Text style={modalstyle.fontsize16}> statitics </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>{setcomingsoonmodal(current=>true)}}><Text style={modalstyle.fontsize16}>transfer user/user</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 }   onPress={ ()=>  {getmerchents();setmerchantsmodal(true);} } ><Text style={modalstyle.fontsize16}>Merchants </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setcomingsoonmodal(current=>true)} ><Text style={modalstyle.fontsize16}>Amount in pures   { Number (currentuserDetails?.purse).toFixed(2)} $</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>setcomingsoonmodal(current=>true)} ><Text style={modalstyle.fontsize16}>vote for room </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity = { .2 } onPress={()=>isSingnin? setcomingsoonmodal(true):loginalert()} ><Text style={modalstyle.fontsize16}>roulette</Text></TouchableOpacity>

        </View>
 
        </View>
          </View>
        </View>
</Modal>

{/* merchant modal  */}
<Modal transparent={true}  visible={merchantsmodal} onRequestClose={() => { 
       setmerchantsmodal(!merchantsmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 280, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,color:"#F6FAFA", paddingVertical:2,paddingRight:53}}>merchents</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setmerchantsmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{  paddingLeft:2,paddingTop:5,height:420}} >
      <FlatList 
        keyExtractor={(item) => item.id} 
        data={merchants} 
        renderItem={({ item }) => ( 
          <View >
           
           <TouchableOpacity activeOpacity = { 0.1 } onPress={ ()=>{  setselecteduserid(item._id);getuserdata(item._id);
        modal();} }>
            <View style={{ flexDirection: "row",}}>
              <View style={{ width:"45%"}}><Text style={{fontSize:18,width:"500%",textAlign:"left"}}>{item?.name} </Text></View>
               <View style={{backgroundColor:"#E9F9CC", width:"30%", }}><Text style={{fontSize:16,width:"500%"}}> {item?.merchantin} </Text></View>
               <View style={{backgroundColor:"#E9F9CC", width:"25%", }}><Text style={{fontSize:16, textAlign:"right"}}> {item?.purse} $</Text></View>
           </View>
           </TouchableOpacity><Divider style={{height:1}}/>
           </View>
        )}
      />
      </View></View></View></View>
      </Modal>




      {/* purse history modal  */}
<Modal transparent={true}  visible={pursehistorymodal} onRequestClose={() => { 
       setpursehistorymodal(!pursehistorymodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 320, height: 450, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:16,color:"#F6FAFA", paddingVertical:2,paddingRight:53}}>statitics</Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setpursehistorymodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{  paddingLeft:2,paddingTop:5,height:420}} >
      <FlatList 
        keyExtractor={(item) => item.id} 
        data={pursehistory} 
        renderItem={({ item }) => ( 
          <View >
           
           <TouchableOpacity activeOpacity = { 0.1 }  >
            <View style={{ flexDirection: "row",}}>
              <View style={{ width:"40%"}}><Text style={{fontSize:18,width:"500%",textAlign:"left"}}>{item?.fromname} </Text></View>
               <View style={{backgroundColor:"#E9F9CC", width:"20%", }}><Text style={{fontSize:16,width:"500%"}}> {item?.npurses} $ </Text></View>
               <View style={{backgroundColor:"#E9F9CC", width:"40%", }}><Text style={{fontSize:16,width:"300%", textAlign:"left"}}> {item?.recevername}</Text></View>
           </View>
           </TouchableOpacity><Divider style={{height:1}}/>
           </View>
        )}
      />
      </View></View></View></View>
      </Modal>
{/* send puers  */}

<Modal transparent={true}  visible={sendpursemodal} onRequestClose={() => { 
       setsendpursemodal(!sendpursemodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 300, height: 200, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}>search by id </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setsendpursemodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:0,}} >
   
    
    <TextInput
        style={{paddingTop:10,paddingBottom:35}} 
        ref={myTextInput}
          placeholder="enter among of purses"
          keyboardType="numeric" 
          maxLength={6}
          value={sendpuresval}
          onChangeText={sendpuresval => setsendpuresval(sendpuresval)}
        /> 
    <Button
          title="send"
          onPress={() => {
             sendpurse(sendpuresval)
             setsendpuresval(0);
            myTextInput.current.clear();
            
            alert("send...");}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>



{/* end pures */}



{/* game  */}

<Modal transparent={true}  visible={gameonemodal} onRequestClose={() => { 
       setgameonemodal(!gameonemodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 350, height: 400, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}> roulette </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setgameonemodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:0,}} >
      
       
        <Text style={{paddingVertical:10,fontSize:18,color:"#472000",paddingStart:100}}>choose your bet  </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap",paddingTop:10}}>

      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text  style={{ color:"#1C0F35"}}> 1 X   : choose number beteween 0 to 12</Text></View><View style={{ flexDirection: "row", flexWrap: "wrap"}}>
      
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={{ color:"#DE731B"}}> 2 X   : choose number beteween 0 to 24 </Text></View><View style={{ flexDirection: "row", flexWrap: "wrap"}}>
      
       <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      /><Text style={{ color:"#0012AA"}}> 3 X   : choose number beteween 0 to 36</Text></View>

<TextInput
        style={{paddingTop:10,paddingBottom:15,    height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,}} 
        ref={myTextInput}
          placeholder="enter your luck number"
          keyboardType="numeric" 
          maxLength={2} 
          value={picknumber}
          onChangeText={picknumber => setpicknumber(picknumber)}
        />
        <TextInput
        style={{paddingTop:10,paddingBottom:15,    height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,}} 
        ref={myTextInput}
          placeholder="enter among of purses"
          keyboardType="numeric" 
          maxLength={4} 
          value={sendpuresval}
          onChangeText={sendpuresval => setsendpuresval(sendpuresval)}
        />
        
    <Button
          title="try your luck"
          onPress={() => {gameone()}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>


{/* settings */}
<Modal transparent={true}  visible={settingsmodal} onRequestClose={() => { 
       setsettingsmodal(!settingsmodal);}}>
       <View style={styles.centeredView}>
       <View style={{width: 350, height: 400, margin: 100,borderRadius: 5,backgroundColor:"#DFDFDF",shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}  >
       <View style={styles.modalheader} ><Text style={{fontSize:14,color:"white",paddingRight:10,paddingTop:0}}> settings </Text><TouchableOpacity activeOpacity = {0.1 } onPress={()=> setsettingsmodal(current=>false)}><Image style={styles.modalheaderclose} source={require('./images/close.png')} /></TouchableOpacity></View>
       <View style={modalstyle.mainmodalmenu}>
    <View style={{ paddingVertical:5, paddingLeft:0,}} >
      
       
        <Text style={{paddingVertical:10,fontSize:18,color:"#472000",paddingStart:50}}>choose your Language </Text>
        <Text style={{paddingVertical:10,fontSize:18,color:"#472000",paddingStart:100}}> </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap",}}>
 
<RadioButton
  value="ar"
  status={ checked === 'ar' ? 'checked' : 'unchecked' }
  onPress={() => setChecked('ar')}
/><Text  style={{ color:"#1C0F35"}}>Arabic</Text></View><View style={{ flexDirection: "row", flexWrap: "wrap"}}>

<RadioButton
  value="fr"
  status={ checked === 'fr' ? 'checked' : 'unchecked' }
  onPress={() => setChecked('fr')}
/><Text style={{ color:"#DE731B"}}>Persian </Text></View><View style={{ flexDirection: "row", flexWrap: "wrap",paddingBottom:50}}>

 <RadioButton
  value="en"
  status={ checked === 'en' ? 'checked' : 'unchecked' }
  onPress={() => setChecked('en')}
/><Text style={{ color:"#0012AA"}}>English</Text></View>
         <Button
          title="change"
          onPress={() => {changeLanguage(checked)}}
        />   
      </View>
      </View>
         </View>
       </View>
     </Modal>




</View> 
  )
}
 

  
export default ChatScreen;




