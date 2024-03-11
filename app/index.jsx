import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import {Link, useRouter} from 'expo-router'
import services from '../utils/services'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    checkUserAuth();
  }, []);

  const checkUserAuth=async ()=>{
    const result = await  services.getData("login");
    console.log("result",result);
    if(result !== 'true')
    {
      router.replace('/login');
    }

  }

  return (
    <View style={{
        marginTop: 20,
    }}>
      <Text>Home</Text>
        
    </View>
  )
}