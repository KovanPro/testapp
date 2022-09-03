import React from 'react';
import modalstyle from '../styles/modalstyle';
import styles from '../styles/mainstyle';
import { Divider } from 'react-native-paper';
import {Modal,   View, Text ,Image ,TouchableOpacity} from 'react-native';
 function userinfo(userinfomodal, setuserinfomodal, t, userDetails, currentuserDetails) {
    return <Modal
      animationType="slide"
      transparent={true}
      visible={userinfomodal}
      onRequestClose={() => {
        setuserinfomodal(!userinfomodal);
      } }
    >
      <View style={modalstyle.centeredView}>
        <View style={{ width: 305, height: 450, borderRadius: 5, backgroundColor: "#DFDFDF", shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
          <View style={styles.modalheader}><Text style={{ fontSize: 14, color: "white", paddingRight: 50, top: -2 }}>User Information </Text><TouchableOpacity activeOpacity={0.1} onPress={() => setuserinfomodal(current => false)}><Image style={styles.modalheaderclose} source={require('../images/close.png')} /></TouchableOpacity></View>
  
          <View style={{ paddingLeft: 5, flexDirection: "row", flexWrap: "wrap", }}>
            <View style={{ width: "40%", }}>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>{t("name")} </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>ID</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Gender</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Family status</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>friends count</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Nick Color</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>country</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>city</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Rating</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>In chat since</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Last visit</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>Now in Room</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.fontsize16}>address</Text></TouchableOpacity>
            </View>
            <View style={{ width: "60%", backgroundColor: "#ffffdb" }}>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.id}</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.gender}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.familystatus}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.contacts?.length}</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.namecolor}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.address?.country_name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.address?.City}</Text></TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{Number(userDetails?.sendmsgs + userDetails?.sendprvtmsg)}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>

              {userDetails?.registareddate?.toDate().toLocaleDateString()}

                    
                  </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>
              {userDetails?.lastvisit?.toDate().toLocaleDateString()} 
                  </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}>{userDetails?.lastroomprivate==true?<Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>[Hidden]</Text>:<Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.lastroomname} </Text>}</TouchableOpacity><Divider style={{ height: 2 }} />
              <TouchableOpacity activeOpacity={.2}>{currentuserDetails?.role == "admin" ? <Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>{userDetails?.address?.ip} {userDetails?.orginaladdress?.ocountry_name}</Text> : <Text style={[modalstyle.fontsize16, { textAlign: "center" }]}>Unknown</Text>}</TouchableOpacity>
  
            </View>
          </View>
        </View>
      </View>
    </Modal>;
  }
  export default userinfo;