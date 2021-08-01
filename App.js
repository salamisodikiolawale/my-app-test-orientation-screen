import React, {useEffect, useState} from 'react';
import { StyleSheet, Pressable,Text, View, Dimensions } from 'react-native';
// import { DeviceMotion } from 'expo-sensors';
import * as ScreenOrientation from 'expo-screen-orientation';
import Platform from './Platform';
// import Constants from 'expo-constants';
// import * as Device from 'expo-device';



export default App = () => {


  const [isTrue, setIsTrue] = useState(false);

  const dim = Dimensions.get('screen');

  console.log(dim)
 
  ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
  const [orientation, setOrientation] = useState(Platform.isPortrait() ? 'portrait' : 'landscape');
  const [devicetype, setDevicetype] = useState(Platform.isTablet() ? 'tablet' : 'phone');

  // Event Listener for orientation changes

useEffect(()=>{
      Dimensions.addEventListener('change', () => {
           setOrientation(Platform.isPortrait() ? 'portrait' : 'landscape')
    });
      // console.log("hhhh",Device.modelName)
})

    return (
        <View style={{marginTop:30, flex:1}}>
            {/* <Text>
                Welcome to React Native!
            </Text>
            <Text>
                Dimensions = {JSON.stringify(Dimensions.get('screen'))}{'\n'}
                isPortrait = {Platform.isPortrait() ? 'true\n' : 'false\n'}
                isLandscape = {Platform.isLandscape() ? 'true\n' : 'false\n'}
                isPhone = {Platform.isPhone() ? 'true\n' : 'false\n'}
                isTablet = {Platform.isTablet() ? 'true\n' : 'false\n'}
            </Text> */}
            {Platform.isPortrait() ? 
              
              (
                <View style={{flex:1}}>
                  <View style={{borderWidth:1, borderColor:"green", flex:2, alignItems:"center",justifyContent:"center",}}>
                    <Pressable
                      onPress={() => setIsTrue(true)}
                      style={{borderWidth:1, backgroundColor:"green", width:150, height:50, alignItems:"center",justifyContent:"center",}}
                    ><Text>Press to show form</Text></Pressable>
                  </View>
                 {isTrue? <View style={{borderWidth:1, borderColor:"red", flex:1, backgroundColor:"gray",alignItems:"center",justifyContent:"center",}}>
                    <Text>i'm This Form</Text>
                    <Pressable
                      onPress={() => setIsTrue(false)}
                      style={{borderWidth:1, backgroundColor:"red", width:150, height:50, alignItems:"center",justifyContent:"center",}}
                    ><Text>Press to close form</Text></Pressable>
                  </View>
                 :<></> }
                </View>
              ) 
              : 
              (
                <View style={{flexDirection:"row", flex:1}}>
                  <View style={{borderWidth:1, borderColor:"green", flex:1, alignItems:"center",justifyContent:"center",}}>
                    <Text>i'm This Form</Text>
                    <Pressable
                      onPress={() => setIsTrue(false)}
                      style={{borderWidth:1, backgroundColor:"red", width:150, height:50, alignItems:"center",justifyContent:"center",}}
                    ><Text>I'm here</Text></Pressable>
                  </View>

                  <View style={{borderWidth:1, borderColor:"orange", flex:3, alignItems:"center",justifyContent:"center",}}>
                    <Pressable
                      onPress={() => setIsTrue(true)}
                      style={{borderWidth:1, backgroundColor:"green", width:150, height:50, alignItems:"center",justifyContent:"center",}}
                    ><Text>Fform is locate in left</Text></Pressable>
                  </View>
                </View>
              )}

        </View>
    );
  
}