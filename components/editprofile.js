import React from 'react';
import modalstyle from '../styles/modalstyle';
import styles from '../styles/mainstyle';
import { Divider } from 'react-native-paper';
import {Modal,   View, Text ,Image ,TouchableOpacity} from 'react-native';

 function editprofile(profilemodal, setprofilemodal, setchangenamemodal, currentuserDetails, setchangepasswordmodal, sethangephotomodal, setcomingsoonmodal, setchangecitymodal, setchangecountrymodal) {
    return <Modal
      animationType="slide"
      transparent={true}
      visible={profilemodal}
      onRequestClose={() => {
        setprofilemodal(!profilemodal);
      } }
    >
      <View style={modalstyle.centeredView}>
        <View style={{
          width: 260,
          height: 442,
          margin: 100,
          borderRadius: 5,
          backgroundColor: "#DFDFDF",
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        }}>
          <View style={modalstyle.modalheader}>
            <TouchableOpacity activeOpacity={0.1} onPress={() => setprofilemodal(false)}><Image style={styles.modalheaderclose} source={require('../images/close.png')} /></TouchableOpacity></View>
  
          <View style={{ paddingLeft: 5, flexDirection: "row", flexWrap: "wrap", }}>
            <View style={{ width: 120, }}>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>Nick name </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>Password</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2}><View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('../images/camera.png')} /><Text style={styles.modalmenu}>Photo</Text></View></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><View style={modalstyle.mainmenudiv}><Image style={styles.modalheaderico} source={require('../images/book.png')} /><Text style={styles.modalmenu}>Photo Album</Text></View></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2}><Text style={styles.modalmenu}>Gender</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>Avatar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>Nick Color </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={styles.modalmenu}>personal</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>City</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>country</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>frends count</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>family status</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>email</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>User ID</Text></TouchableOpacity>
              <Divider />
            </View>
            <View style={{ width: 135, backgroundColor: "#ffffdb", paddingLeft: 5 }}>
              <TouchableOpacity activeOpacity={.2} onPress={() => setchangenamemodal(current => true)}><Text style={[modalstyle.modalmenu, { width: "300%" ,textAlign:"left"}]}>{currentuserDetails?.name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => setchangepasswordmodal(current => true)}><Text style={modalstyle.modalmenu}>********</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2} onPress={() => sethangephotomodal(true)}><Text style={styles.modalmenu}>edit</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={styles.modalmenu}> 0</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2}><Text style={styles.modalmenu}>{currentuserDetails?.gender}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => setcomingsoonmodal(true)}><Text style={modalstyle.modalmenu}>Select avatar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>Black </Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={styles.modalmenu}>personal</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2} onPress={() => { setchangecitymodal(true); } }><Text style={modalstyle.modalmenu}>{currentuserDetails?.address?.City}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2} onPress={() => { setchangecountrymodal(true); } }><Text style={modalstyle.modalmenu}>{currentuserDetails?.address?.country_name}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>{currentuserDetails?.contacts?.length}</Text></TouchableOpacity><Divider />
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>{currentuserDetails?.familystatus}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={[modalstyle.modalmenu, { width: "500%" }]}>{currentuserDetails?.email?.split('@')[0]}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={.2}><Text style={modalstyle.modalmenu}>{currentuserDetails?.id}</Text></TouchableOpacity>
              <Divider />
            </View>
          </View>
        </View>
      </View>
    </Modal>;
  }
  
  export default  editprofile;