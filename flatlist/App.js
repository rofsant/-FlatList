import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const VALORANT = [
  { id: 'personagem001',
   nome: 'Raze',
   descricao:'- É a primeira Agente adicionada ao jogo depois do lançamento do beta      fechado.',
   habilidade:'- Bumba, Carga de explosivos, Cartuchos de Tinta, Estraga-prazeres',
   preco_habilidade: '- 400$,  200$, grátis, 7 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 1, 2, 2, 0, respectivamente. ',
   image: require('./assets/raze.jpg'),
  },
  { id: 'personagem002',
   nome: 'Reyna',
   descricao:'- Foi a personagem adicionada no lançamento oficial de Valorant. ',
   habilidade:'- Olhar Voraz, Devorar, Dispensar, Imperatriz',
   preco_habilidade: '- 250$, 200$,  200$, 6 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 2, 2, 2, 0, respectivamente. ',
   image: require('./assets/reyna.jpg'),
  },
    { id: 'personagem003',
   nome: 'Sage',
   descricao:'- KAY/O é o Agente introduzido no Episódio 3 de Valorant. ',
   habilidade:'- Frag/Mento, Granada/Clarão, Ponto/Zero Recarga, Anular/CMD .',
   preco_habilidade: '- 200$,  250$, grátis, 7 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 1, 2, 40 sgds, 0, respectivamente. ',
   image: require('./assets/sage.jpg'),
  },
   { id: 'personagem004',
   nome: 'KAY/O',
   descricao:'-  é uma personagem puramente de suporte com habilidades predominantemente utilitárias.',
   habilidade:'- Orbe de Barreira, Orbe de Lentidão, Orbe Curativo, Ressurreição.',
   preco_habilidade: '- 400$, 200$, grátis, 8 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 1, 2, 45 sgds, 0, respectivamente. ',
   image: require('./assets/KAYO.jpg'),
  },
   { id: 'personagem005',
   nome: 'Astra',
   descricao:'- é a Agente introduzida com o Ato 2 de Valorant.',
   habilidade:'- Nebulosa/Dissipar, Poço Gravitacional, Pulso Nova, Divisa Cósmica.',
   preco_habilidade: '- 0$, 0$,  0$, 7 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 0, 0, 0, 0, respectivamente. ',
   image: require('./assets/astra.jpg'),
  },
   { id: 'personagem006',
   nome: 'Yoru',
   descricao:'- Yoru é o Agente introduzido no Episódio 2 de Valorant. .',
   habilidade:'- Falcatrua, Ponto Cego, Passagem Dimensional, Espionagem Dimensional.',
   preco_habilidade: '- 100$, 250$, grátis, 6 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 2, 2, 40 sgds, 0, respectivamente. ',
   image: require('./assets/yoru.jpg'),
  },
  { id: 'personagem007',
   nome: 'Killjoy',
   descricao:'- A 12ª Agente adicionada em Valorant, Killjoy é mais uma personagem do tipo Sentinela, ou seja, seu principal papel é controlar áreas.',
   habilidade:'- Nanoenxame, Robô de Alarme, Torreta, Confinamento.',
   preco_habilidade: '- 200$, 200$, grátis, 7 pontos de Ultimate, respectivamente. ',
   numero_recargas: '- 2, 1, 40 sgds, 0, respectivamente. ',
   image: require('./assets/Killjoy.jpg'),
  },
  
  
];



const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
    <Text style={styles.nome}>{item.nome}</Text>
    <Text style={styles.descricao}>{item.descricao}</Text>
    <Text style={styles.preco_habilidade}>{item.preco_habilidade}</Text>
    <Text style={styles.numero_recargas}>{item.numero_recargas}</Text>
    <Image source={item.image}/>
  </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={VALORANT}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#d70052',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nome: {
    fontSize: 32,
  },
});

export default App;