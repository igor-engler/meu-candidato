import React from 'react'
import AppLoading from 'expo-app-loading'

import { UserIdentification } from './src/pages/Useridentification'
import { useFonts, Jost_400Regular, Jost_600SemiBold, Jost_700Bold} from '@expo-google-fonts/jost'

export default function app(){
      const [ fontsLoaded ] = useFonts({
            Jost_400Regular,
            Jost_600SemiBold
      })

      if(!fontsLoaded)
            return(
                  <AppLoading/>
            )

      return (
        <UserIdentification/>
  )
}
