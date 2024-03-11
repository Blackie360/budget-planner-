import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import {Link, useRouter} from 'expo-router'
import services from '../../utils/services'
import { client } from '../../utils/KindeConfig';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    checkUserAuth();
  }, []);

  const checkUserAuth=async ()=>{
    const result = await  services.getData("login");
    
    if(result !== 'true')
    {
      router.replace('/login');
    }

  }

  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {

      await services.storeData("login", "false");
        // User was logged out
        router.replace('/login');
    }
};

  return (
    <View style={{
        marginTop: 20,
    }}>
      <Text>Home</Text>

      <Button title='Logout' 
      onPress={handleLogout}
      />
        
    </View>
  )
}