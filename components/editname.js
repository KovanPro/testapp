import React from 'react';
import modalstyle from '../styles/modalstyle';
import styles from '../styles/mainstyle';
import { Divider } from 'react-native-paper';
import {Modal,   View, Text ,Image ,TouchableOpacity,TextInput,Button} from 'react-native';
function editname(changenamemodal, setchangenamemodal, myTextInput, changename, setchangename, changenickname, getcurrentuserdata) {
    return <Modal transparent={true} visible={changenamemodal} onRequestClose={() => {
      setchangenamemodal(!changenamemodal);
    } }>
      <View style={styles.centeredView}>
        <View style={{ width: 300, height: 200, margin: 100, borderRadius: 5, backgroundColor: "#DFDFDF", shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
          <View style={styles.modalheader}><Text style={{ fontSize: 14, color: "white", paddingRight: 10, paddingTop: 0 }}>change nick name</Text><TouchableOpacity activeOpacity={0.1} onPress={() => setchangenamemodal(current => false)}><Image style={styles.modalheaderclose} source={require('../images/close.png')} /></TouchableOpacity></View>
          <View style={modalstyle.mainmodalmenu}>
            <View style={{ paddingVertical: 5, paddingLeft: 5, }}>
  
  
              <TextInput
                style={{ paddingTop: 10 }}
                ref={myTextInput}
                placeholder="input your new name "
                maxLength={15}
                value={changename}
                onChangeText={changename => setchangename(changename)} /><Divider style={{ height: 1, marginBottom: 25, marginTop: 10 }} />
              <Button
  
                title="change nick"
                onPress={() => {
                  
                   changenickname();
                  myTextInput.current = '';
                  setchangename('');
                  setchangenamemodal(current => false);
                } } />
            </View>
          </View>
        </View>
      </View>
    </Modal>;
  }
  
export default editname;  