import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import bg from './../../assets/budget.png';
import Colors from '../../utils/Colors';

export default function LoginScreen() {
  return (
    <View style={{
        display: 'flex',
        alignItems: 'center',
    }}>
        <Image source={bg} 
        style={styles.bg} />

        <View style={{
            backgroundColor:Colors.PRIMARY,
            width:'100%',
            height:'100%',
            padding:20,
            marginTop:-30,
            borderTopLeftRadius:30,
            borderTopRightRadius:30

        }}>
            <Text 
            style={{ fontSize: 35, 
            fontWeight: 'bold', 
            color: Colors.WHITE }}>
            Personal Budget Planner
            </Text>

<Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.WHITE, textAlign: 'center', marginTop:20 }}>
  Take Control of Your Finances
</Text>
                <TouchableOpacity style={styles.button}
                onPress={()=>console.log("btn click")}>
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.PRIMARY,
                    }}>Login/SignUp</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 14, color: Colors.WHITE, textAlign: 'center', marginTop:10 }}>
         * By login/Signup you will agree to our terms and condition
</Text>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    bg:{
        width:200,
        height:400,
        marginTop:70,
        borderWidth:5,
        borderRadius:20,
        borderColor:Colors.BLACK
    },
    button:{
        backgroundColor:Colors.WHITE,
        padding:15,
        paddingHorizontal:5,
        borderRadius:99,
        marginTop:30
    }

})