import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Pressable
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => {
    return (
        <View style={styles.Container}>
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <Image source={require('../../img/Slider.png')} style={styles.Arrow} />
            <Image source={require('../../img/Cover.png')} style={styles.Cover_App} />
            <View style={styles.TxtView}>
                <Text style={styles.WelTxt}>Welcome To</Text>
            </View>
            <Image source={require('../../img/Qodum_Logo.png')} style={styles.Logo} />
            <View style={styles.DescrView}>
                <Text style={styles.DescrTxt}>
                    For an improved learning and 
                    teaching experience
                </Text>
            </View>
            <TouchableOpacity style={styles.SignUp_Btn}>
                <LinearGradient  start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={[ "#3C5EAB","#4EA9DD"]} 
                        style={{height:50,borderRadius:5,justifyContent:"center",alignItems:"center"}}   >
                        <Text style={styles.TxtBtn}>Sign Up</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            <View style={styles.HintLine}>
                <Text style={styles.TxtHint}>Already have an account ?</Text>
                <Pressable onPress={()=>{console.log("GO")}}><Text style={styles.TxtLogin}>Login</Text></Pressable>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Arrow: {
        width: 100,
        height: 70,
        alignSelf: 'flex-end',
        marginTop: 50,
    },
    Cover_App: {
        position: 'absolute',
        width: 323,
        height: 290,
        alignSelf: 'center',
        marginTop: 85,
        resizeMode:"contain"
    },
    TxtView:{
        width: 200,
        height: 38,
        alignSelf:"center",
        top:278
    },
    WelTxt:{
        fontFamily:"Poppins-Medium",
        fontSize:20,
        color:"#2D2D2D",
        textAlign:"center"
    },
    Logo:{
        width:175,
        height:90,
        alignSelf:"center",
        top:280,
        resizeMode:'contain'
    },
    DescrView:{
        width:300,
        height:70,
        top:290,
        alignSelf:"center",
        padding:10
    },
    DescrTxt:{
        fontFamily:"Poppins-Regular",
        fontSize:15,
        color:"#2D2D2D",
        textAlign:"center"
    },
    SignUp_Btn:{
        width:330,
        height:50,
        alignSelf:"center", 
        borderRadius:10,
        top:320
    },
    TxtBtn:{
        fontFamily:"Poppins-Regular",
        fontSize:15,
        color:"#FFFFFF",
        textAlign:"center",
        lineHeight:30
    },
    HintLine:{
        width:330,
        height:40,
        top:350,
        alignSelf:'center',
        flexDirection:"row",
        justifyContent:"center"
    },
    TxtHint:{
        fontFamily:"Poppins-Regular",
        fontSize:13,
        color:"#000",
        textAlign:"center",
        lineHeight:30
    },
    TxtLogin:{
        fontFamily:"Poppins-Regular",
        fontSize:13,
        color:"#3C5EAB",
        textAlign:"center",
        lineHeight:30 ,
        marginLeft:5
    }
});

export default Welcome;
