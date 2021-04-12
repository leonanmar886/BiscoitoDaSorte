import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      imgState: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A primeira regra é manter o espírito tranquilo. A segunda é enfrentar as coisas de frente e toma-las pelo que realmente são.',
      'Abster-se de imitar é a melhor vingança.',
      'Nada de desgosto, nem de desânimo; se acabas de fracassar, recomeça.',
      'A nossa vida é aquilo que os nossos pensamentos fizerem dela.',
      'Antes o reprovamento por um gênio do que um louvor de um idiota.',
      'Não busque a felicidade fora, mas sim dentro de você, caso contrário nunca a encontrará.',
      'É impossível para um homem aprender aquilo que ele acha que já sabe.',
      'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.',
      'Pouco se aprende com a vitória, mas muito com a derrota.',
      'Aquele que ri ao invés de enfurecer-se é sempre o mais forte.',
      'Caia sete vezes; levante-se oito.',
      'O bambu que se curva é mais forte que o carvalho que resiste.'
    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      imgState: require('./src/biscoitoAberto.png')
    });
  
  }


  render(){
    return (
    <View style={styles.container}>

      <Image style = {styles.img}
      source = {this.state.imgState}
      />

      <Text style = {styles.textoFrase}> {this.state.textoFrase} </Text>

      <TouchableOpacity style = {styles.botao} onPress = {this.quebraBiscoito}>
        <View style = {styles.areaBotao}>
          <Text style = {styles.btnTexto}> Quebrar Biscoito </Text>
        </View>
      </TouchableOpacity>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 250,
    height: 250
  },

  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },

  areaBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

});

export default App;