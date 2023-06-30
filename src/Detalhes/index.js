import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes(props) {
 return (
   <View style={styles.container}>
    <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar }>
        <Text style={{color: '#fff', fontSize: 16}}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>{props.filme.nome}</Text>
      <Text style={styles.sinopse}>Sinopse:</Text>
      <Text style={styles.descricao}>{props.filme.sinopse}</Text>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 3,
    marginRight: 3
  },
  modalContainer: {
    height: '50%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10
  }
})