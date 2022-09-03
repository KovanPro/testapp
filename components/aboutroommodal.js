import React from 'react';
import modalstyle from '../styles/modalstyle';
import styles from '../styles/mainstyle';
import { Divider } from 'react-native-paper';
import {Modal,   View, Text ,Image ,TouchableOpacity} from 'react-native';
import app from '../firebase';
function aboutroommodalfun(abuotroommodal, setabuotroommodal, roomdata, currentuserDetails, setroomcntrol, getalluserdatas, setuserinroommodal, setvotemodal) {
    return <Modal
      animationType="slide"
      transparent={true}
      visible={abuotroommodal}
      onRequestClose={() => {
        setabuotroommodal(!abuotroommodal);
      } }
    >
      <View style={modalstyle.centeredView}>
        <View style={{
          width: 275,
          height: 372,
          margin: 100,
          borderRadius: 5,
          backgroundColor: "#DFDFDF",
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        }}>
          <View style={modalstyle.modalheader}>
            <TouchableOpacity activeOpacity={0.1} onPress={() => setabuotroommodal(false)}><Image style={styles.modalheaderclose} source={require('../images/close.png')} /></TouchableOpacity></View>
  
          <View style={{ paddingLeft: 5, flexDirection: "row", flexWrap: "wrap", paddingTop: 3 }}>
            <View style={{ width: 130, }}>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Name </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Room Id</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Type</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>rating</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Male/Female</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Language</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Creator</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Owener</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Date of Creation</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>room control</Text></TouchableOpacity>
  
  
            </View>
            <View style={{ width: 140, backgroundColor: "#ffffdb", paddingLeft: 0 }}>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.id}</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>Common</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.rank}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.joinedusers?.length}</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.lang}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.creator?.creatorname}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.owener?.owenername}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{roomdata?.registareddate?.toDate().getDay().toString()} -{roomdata?.registareddate?.toDate().getMonth().toString()} - {roomdata?.registareddate?.toDate().getFullYear().toString()}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => {
                if (currentuserDetails.role == "admin" || currentuserDetails.role == "Top User" || app.auth().currentUser.uid == roomdata?.creator?.creatorid || app.auth().currentUser?.uid == roomdata?.owener?.owenerid) {
                  setroomcntrol(true);
                }
                else {
                  alert("this section only for admins");
                }
  
              } }><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>admin and crators</Text></TouchableOpacity>
              <Divider />
            </View></View>
          <View style={{ paddingTop: 1, flexDirection: "row", flexWrap: "wrap", }}><TouchableOpacity
            style={{
              width: "50%", borderWidth: 1, borderColor: "black",         backgroundColor:"#dfdfdf",

            }} onPress={() => {
              getalluserdatas(); setuserinroommodal(true);
            } }>
            <Text style={{ fontSize: 16, fontWeight: '400', textAlign: "center" }}>user in room </Text></TouchableOpacity><TouchableOpacity
              style={{ width: "50%", borderWidth: 1, borderColor: "black",         backgroundColor:"#dfdfdf",
            }} onPress={() => { setvotemodal(true); } }>
              <Text style={{ fontSize: 16, fontWeight: '400', textAlign: "center" }}>Vote</Text></TouchableOpacity>
          </View>
  
  
        </View>
      </View>
    </Modal>;
  }
  export default aboutroommodalfun;