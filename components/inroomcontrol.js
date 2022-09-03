import React from 'react';
import modalstyle from '../styles/modalstyle';
import styles from '../styles/mainstyle';
import { Divider } from 'react-native-paper';
import {Modal,   View, Text ,Image ,TouchableOpacity} from 'react-native';
import app from '../firebase';
function inroomcontrolmodal(roomcntrol, setroomcntrol, currentuserDetails, blockfromroom, roomdata, deleteroom, givecrownn, makeroomprivate, makeroompublic, idd, selecteduserid, userDetails, makeroomcountry, getsearchuser, setinvitemodal) {
    return <Modal
      animationType="slide"
      transparent={true}
      visible={roomcntrol}
      onRequestClose={() => {
        setroomcntrol(!roomcntrol);
      } }
    >
      <View style={modalstyle.centeredView}>
        <View style={{
          width: 280,
          height: 310,
          margin: 100,
          borderRadius: 5,
          backgroundColor: "#DFDFDF",
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        }}>
          <View style={modalstyle.modalheader}>
            <TouchableOpacity activeOpacity={0.1} onPress={() => setroomcntrol(false)}><Image style={styles.modalheaderclose} source={require('../images/close.png')} /></TouchableOpacity></View>
  
          <View style={{ paddingLeft: 5, flexDirection: "row", flexWrap: "wrap", }}>
            <View>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
  
                if (currentuserDetails?.role == "admin" || currentuserDetails?.role == "Top User") {
                  blockfromroom();
                }
                else if (roomdata?.owener?.owenerid == app.auth()?.currentUser?.uid) {
                  blockfromroom();
                }
                else { alert("tou can't block from this room"); }
  
  
  
              } }><Text style={modalstyle.fontsize16}> block from this room  </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails?.role == "admin") { deleteroom(); }
                else if (roomdata?.creator?.creatorid == app.auth().currentUser?.uid) {
                  deleteroom();
                }
                else {
                  alert("tou are not admin or creator!");
                }
  
              } }><Text style={modalstyle.fontsize16}>Delete this room</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails?.role == "admin" || currentuserDetails?.role == "Top User") {
                  givecrownn();
                }
                else if (roomdata?.owener?.owenerid == app.auth()?.currentUser?.uid) {
                  givecrownn();
                }
                else { alert("tou can't give users crwon"); }
  
  
              } }><Text style={modalstyle.fontsize16}> give user crown for this room  </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails.role == "admin") {
                  makeroomprivate();
  
                } else if (app.auth()?.currentUser?.uid == roomdata?.owener?.owenerid) {
                  makeroomprivate();
                }
  
                else {
                  alert("you can't change room ");
                }
  
  
  
              } }><Text style={modalstyle.fontsize16}>Make Room private: {roomdata.type}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails.role == "admin") {
                  makeroompublic();
  
                } else if (app.auth()?.currentUser?.uid == roomdata?.owener?.owenerid) {
                  makeroompublic();
                }
  
                else {
                  alert("you can't change room ");
                }
  
  
  
              } }><Text style={modalstyle.fontsize16}>Make Room public: {roomdata.type}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails.role == "admin") {
                  var owener = db.collection("rooms").doc(idd);
                  owener.update({
                    owener: {
                      owenername: selecteduserid,
                      owenerid: userDetails?.name,
                    }
                  });
  
                } else if (app.auth()?.currentUser?.uid == roomdata?.creator?.creatorid) {
                  var owener = db.collection("rooms").doc(idd);
                  owener.update({
                    owener: {
                      owenerid: selecteduserid,
                      owenername: userDetails?.name,
                      
                    }
                  });
                }
  
                else {
                  alert("you can't change room  owner ");
                }
  
  
  
              } }><Text style={modalstyle.fontsize16}>change owner: {roomdata?.owener?.owenername}</Text></TouchableOpacity>
  
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails.role == "admin") {
                  makeroomcountry();
                }
                else {
                  alert("onlye admin can make room by country");
                }
  
              } }>
  
  
                <Text style={modalstyle.fontsize16}>Make Room contry</Text></TouchableOpacity>
  
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails.role == "admin") {
                  getsearchuser();
                  setinvitemodal(true);
                }
                else if (currentuserDetails?.role == "Top User" && roomdata?.type == "private") {
                  getsearchuser();
                  setinvitemodal(true);
  
                }
                else if (app.auth()?.currentUser?.uid == roomdata?.owener?.owenerid && roomdata?.type == "private") {
                  //sho invite
                  getsearchuser();
                  setinvitemodal(true);
                }
  
                else {
                  alert("you can't ivaite ");
                }
  
              } }><Text style={modalstyle.fontsize16}>Invite user to this room</Text></TouchableOpacity>
            </View>
  
          </View>
        </View>
      </View>
    </Modal>;
  }
  export default inroomcontrolmodal;