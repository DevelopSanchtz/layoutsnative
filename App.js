import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text, 
  ScrollView
} from 'react-native';

const App = () => {

  return (
    <>
      <ScrollView style={styles.FondoScrollView}>


        <View style={{ flexDirection: 'row'}}>
          <Image style={styles.banner}
          source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.title}>¿Qué hacer en Paris?</Text>

          <ScrollView horizontal>
            <View>
              <Image style={styles.ciudad}
              source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image style={styles.ciudad}
              source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image style={styles.ciudad}
              source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image style={styles.ciudad}
              source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image style={styles.ciudad}
              source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>

        </View>

          <Text style={styles.title}>Los Mejores Alojamientos</Text>

          <View>
            <View>
              <Image style={styles.mejores}
              source={require('./assets/img/mejores1.jpg')}
              />
            </View>

            <View>
              <Image style={styles.mejores}
              source={require('./assets/img/mejores2.jpg')}
              />
            </View>

            <View>
              <Image style={styles.mejores}
              source={require('./assets/img/mejores3.jpg')}
              />
            </View>

          </View>


          <Text style={styles.title}>Hospedaje en L.A.</Text>

          <View style={styles.listado}>

            <View style={styles.listadoItem}>
              <Image style={styles.hospedajes}
              source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>

            <View style={styles.listadoItem}>
              <Image style={styles.hospedajes}
              source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>

            <View style={styles.listadoItem}>
              <Image style={styles.hospedajes}
              source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>

            <View style={styles.listadoItem}>
              <Image style={styles.hospedajes}
              source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>


      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center'
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad : {
    width: 250,
    height: 300,
    marginRight: 20
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 10 //Margin arriba y abajo
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%',  //sólo sirve para el flexdirection en row
  },
  hospedajes: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  FondoScrollView: {
    flex: 1,
    backgroundColor: '#FFFCF6'
  }
});

export default App;
