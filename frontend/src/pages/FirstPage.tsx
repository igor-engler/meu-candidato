import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { EstadosButton } from '../components/estadosButton';
import { Header } from '../components/Header';
import { DeputadosCardPrimary } from '../components/DeputadosCardPrimary';
import { DeputadosProps, states } from '../libs/storage';


import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { fetchDeputado, api } from '../services/api';
import { Load } from '../components/Load';

interface EstadosProps {
  key: string;
  title: string;
}

export function FirstPage() { 
  const [estados, setEstados] = useState<EstadosProps[]>([]);
  const [deputados, setDeputados] = useState<DeputadosProps[]>([]);
  const [filteredDeputados, setFilteredDeputados] = useState<DeputadosProps[]>([]);
  const [estadoSelected, setEstadoSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  function handleEstadoSelected(estado: string) {
    setEstadoSelected(estado);

    if (estado === 'Todos')
      return setFilteredDeputados(deputados);

    const filtered: {
        id: string, 
        nome: string, 
        foto: string,
        estados: [string]
      }[] = [];
    deputados.forEach((element) => {
      if(`${element.estados}` === estado){
        filtered.push(element)
      }
    })

    console.log(filtered)

    setFilteredDeputados(filtered);
  }

  async function fetchData() {
    const { data } = await api
    .get('deputados?ordem=ASC&ordenarPor=nome');

    const deputeis: {
        id: string, 
        nome: string, 
        foto: string,
        estados: [string]
      }[] = [];
      data.dados.forEach((element: any) => {
        deputeis.push({
          id: element.id,
          nome: element.nome,
          foto: element.urlFoto,
          estados: element.siglaUf
        })
      });

    if(!data)
    return setLoading(true);

    if (page > 1) {
      setDeputados(oldValue => [...oldValue, ...deputeis])
      setFilteredDeputados(oldValue => [...oldValue, ...deputeis])
    } else {
      setDeputados(deputeis);
      setFilteredDeputados(deputeis);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchData()
  }

  function handleDeputadosSelect(deputados: DeputadosProps) {
    //navigation.navigate('PlantSave', { deputados });
  }

  useEffect(() => {
    async function fetch() {
      const { data } = await api
      .get('deputados?ordem=ASC&ordenarPor=nome');

      setEstados(states);

      const deputeis: {
        id: string, 
        nome: string, 
        foto: string,
        estados: [string]
      }[] = [];
      data.dados.forEach((element: any) => {
        deputeis.push({
          id: element.id,
          nome: element.nome,
          foto: element.urlFoto,
          estados: element.siglaUf
        })
      });

      setDeputados(deputeis)
    }

    fetch();
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  if (loading)
    return <Load />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Selecione um estado
        </Text>
      </View>

      <View>
        <FlatList
          data={estados}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EstadosButton 
              title={item.key}
              active={item.key === estadoSelected}
              onPress={() => handleEstadoSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={{ marginRight: 32 }}
        />
      </View>

      <View style={styles.deputados}>
        <FlatList 
          data={filteredDeputados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <DeputadosCardPrimary data={item} onPress={() => handleDeputadosSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 32
  },
  deputados: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})