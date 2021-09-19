import React, { useEffect, useState } from "react"
import { 
  TouchableOpacityProps,
  Text, 
  StyleSheet, 
  View, 
  FlatList,
  TouchableOpacity
} from 'react-native'
import { DeputadosProps } from "../libs/storage";
import { fetchDeputado } from "../services/api";

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { DeputadosCardPrimary } from "./DeputadosCardPrimary";

interface ListDeputados extends TouchableOpacityProps {
  estado: string
}

interface deputadosType{
  id: string;
  nome: string;
  foto: string;
}

export function ListDeputados({ estado, ...rest }: ListDeputados) {

  const [deputados, setDeputados] = useState<DeputadosProps>();
  const [loading, setLoading] = useState(true);

  async function fetch(){

    const data = await fetchDeputado();

    if(!data){
      return setLoading(true)
    }

    setDeputados(data);

    setLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <View
      style={styles.container}
      {...rest}
    >
      <View style={styles.deputadosContainer}>
        <FlatList 
          data={deputados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <DeputadosCardPrimary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingLeft: 30
  },
  text: {
    fontSize: 48,
    color: colors.white,
    fontFamily: fonts.heading
  },
  deputadosContainer: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})