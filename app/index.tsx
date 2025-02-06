import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Redirect } from 'expo-router';

export default function index() {

  const[loggedInUser, setLoggedInUser] = useState(false);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
   const subsription = async ()=>{ 
    const token= SecureStore.getItem("accessToken");
    setLoggedInUser(token ? true :false)
    setLoading(false);
   };
   subsription();
   
  }, []);

  return (
    <>
     {loading ?(
      <>
      </>
     ):(
      <Redirect href={!loggedInUser ? "/(routes)/onboarding/index" : "/(tabs)"} />)}
    </>
  )
}