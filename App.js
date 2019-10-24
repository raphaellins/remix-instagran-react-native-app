/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import {f, auth, database} from './config/config';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [loggedIn, setLogin] = useState(false);

  function registerUser(email, password) {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  let signUserOut = () => {
    auth.signOut().then(() => {
      console.log('Logged out...');
    });
  };

  f.auth().onAuthStateChanged(function(user) {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  function* loginUser(email, pass) {
    if (email != '' && pass != '') {
      try {
        let user = yield auth.signInWithEmailAndPassword(email, pass);
        console.log(user);
      } catch (err) {}
    } else {
      alert('Provide your profiles values');
    }
  }

  // registerUser('raphalinns@gmail.com', '123456');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
              {this.loggedIn == true ? (
                <View>
                  <Text>Logged in...</Text>
                </View>
              ) : (
                <View>
                  <TouchableHighlight
                    style={{color: 'blue'}}
                    onPress={() =>
                      registerUser(`raphalinns@gmail.com`, '123456')
                    }>
                    <Text>Login</Text>
                  </TouchableHighlight>
                </View>
              )}
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
