import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Pressable,
    TextInput,
} from 'react-native';
//eye-outline
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Icons = [
    {
        id:1,
        Icon_Img:require('../../img/Facebook.png')
    },
    {
        id:2,
        Icon_Img:require('../../img/Google.png')
    },
    {
        id:3,
        Icon_Img:require('../../img/Apple.png')
    },
]

const SocialIcons = () =>{
    return(
        Icons.map((items,index)=>{
            return(
                <View key={index} style={styles.social_Icons}>
                    <Image source={items.Icon_Img} style={styles.Icon} />
                </View>
            )
            
        })
    )
}

const Login = () => {
    const [IsChecked,setIsChecked] = React.useState(false)
    return (
        <View style={styles.container}>
            {/* ----------------Logo && Title ------------------------ */}
            <Image source={require('../../img/Qodum_Logo.png')} style={styles.Logo} />
            <View style={styles.TitlView}>
                <Text style={styles.TxtTitl}>Let’s Sign You In</Text>
            </View>
            {/* -----------------Mini Title-------------------------  */}
            <View style={styles.MiniTViw}>
                <Text style={styles.MiniTxtT}>Welcome back, you’ve been missed!</Text>
            </View>

            <View style={styles.Form}>
                {/* -------------Emai && Password Textinput----------- */}
                <View style={styles.EmaiFild}>
                    <Image source={require('../../img/Email.png')} style={styles.Mail} />
                    <TextInput style={styles.Email} />
                    <MaterialCommunityIcons name="check-circle-outline" style={styles.check} />
                </View>
                <View style={styles.PassFild}>
                    <Image  source={require('../../img/Lock.png')}  style={styles.Lock}/>
                    <TextInput style={styles.Password}/>
                    <Ionicons name="eye-outline" style={styles.PassHid} />
                </View>
                {/*------ forget password && Checkbox component------- */}
                <View style={styles.Body}>
                <BouncyCheckbox
                        size={20}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Save me"
                        iconStyle={{ borderColor: "#B5B5B5" }}
                        innerIconStyle={{ borderWidth: 2,borderColor:"green" }}
                        textStyle={{fontSize:13,color:"#6C6A70",textDecorationLine:"none"}}
                        onPress={()=>{setIsChecked(!IsChecked)}}
                />
                    <Pressable onPress={()=>{console.log("yes")}}>
                        <Text style={styles.forget}>Forget Password?</Text>
                    </Pressable>
                </View>
                {/*------------- Login Button ------------------------ */}
                <TouchableOpacity style={styles.Login_Btn}>
                    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
                        colors={["#3C5EAB", "#4EA9DD"]}
                        style={{ height: 50, borderRadius: 5, justifyContent: "center", 
                        alignItems: "center" }}
                    >
                        <Text style={styles.TxtBtn}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                {/*------ Social Media && Sign up Link Text Page------- */}
                <View style={styles.social_Media_Title}>
                    <View style={{width:91,borderWidth:0.5,borderColor:"#A9A9A9",
                    height:0,top:17}}></View>
                    <Text style={styles.Title}>Or continue with</Text>
                    <View style={{width:91,borderWidth:0.5,borderColor:"#A9A9A9",height:0,
                    top:15}}></View>
                </View>

            </View>
            <View style={styles.SitesLogin} >
                <SocialIcons />
            </View>
            <View style={styles.HintLine}>
                <Text style={styles.TxtHint}>Already have an account ?</Text>
                <Pressable onPress={()=>{console.log("GO")}}><Text style={styles.TxtLogin}>
                    Sign Up</Text></Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    Logo: {
        width: 175,
        height: 90,
        alignSelf: "center",
        top: 80,
        resizeMode: 'contain'
    },
    TitlView: {
        width: 210,
        height: 38,
        // backgroundColor:"#ccc",
        alignSelf: "center",
        justifyContent: "center",
        top: 90
    },
    TxtTitl: {
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        color: "#2D2D2D",
        textAlign: "center"
    },
    MiniTViw: {
        width: 320,
        height: 27,
        alignSelf: "center",
        justifyContent: "center",
        top: 95
    },
    MiniTxtT: {
        fontFamily: "Poppins-Medium",
        fontSize: 13,
        color: "#6A6A6A",
        textAlign: "center"
    },
    Form: {
        width: 380,
        height: 250,
        top: 140,
        // backgroundColor: "#ccc",
        alignSelf: "center"
    },
    EmaiFild: {
        flexDirection: "row",
        width: 320,
        height: 50,
        backgroundColor: "#F5F5F8",
        top: 10,
        alignSelf: "center",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 4,
        paddingHorizontal:15
    },
    PassFild: {
        flexDirection: "row",
        width: 320,
        height: 50,
        backgroundColor: "#F5F5F8",
        top: 25,
        alignSelf: "center",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 4,
        paddingHorizontal:11
    },
    Login_Btn: {
        width: 330,
        height: 50,
        alignSelf: "center",
        borderRadius: 10,
        top: 70
    },
    TxtBtn: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        color: "#FFFFFF",
        textAlign: "center",
        lineHeight: 30
    },
    social_Media_Title: {
        flexDirection:"row",
        justifyContent:"space-between",
        width:362,
        top:100,
        alignSelf:"center",
        paddingHorizontal:15
    },
    Title:{
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: "#6C6A70",
        textAlign: "center",
        lineHeight: 30
    },
    SitesLogin:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:20
    },
    social_Icons: {
        width:60,
        height:50,
        borderWidth:1,
        borderColor:"#E7E7E7",
        top:240,
        justifyContent:"center"
    },
    Icon:{
        width:45,
        height:45,
        borderRadius:22.5,
        alignSelf:"center"
    },
    HintLine:{
        width:330,
        height:40,
        top:270,
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
    },
    Mail:{
        width:21,
        height:17,
    },
    Lock:{
        width:27,
        height:21
    },
    Email:{
        width:230 ,
        height: 50,
        backgroundColor: "#F5F5F8",
    },
    check:{
        fontSize:19,
        color:"#27AE60"
    },
    PassHid:{
        fontSize:20,
        color:"#7B7B7B",
        marginRight:5
    },
    Password:{
        width:230 ,
        height: 50,
        backgroundColor: "#F5F5F8",
    },
    Body:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30,
        top:40,
        // backgroundColor:"#f0f"
    },
    forget:{
        fontFamily:"Poppins-Regular",
        fontSize:12,
        color:"#6C6A70",
        textAlign:"right",
        lineHeight:30,
        // marginTop:5
    },
})

export default Login;