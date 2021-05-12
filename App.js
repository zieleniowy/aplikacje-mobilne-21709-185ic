import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import  ThemeProvider  from './core/ThemeProvider';
import {Container, AppBar} from './core/index.js';

import DrawerPage from './docs/pages/Drawer';

import Menu from './docs/Menu';
function Home() {
  return <Text>Home</Text>;
}

function About() {
  return <Text>About</Text>;
}

function App() {
  const [theme, setTheme] = React.useState({});
  return (
    <ThemeProvider theme={theme}>

      <NativeRouter>
          <SafeAreaView>
            <Menu />
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/drawer" component={DrawerPage} />

            </Container>

          </SafeAreaView>


      </NativeRouter>
    </ThemeProvider>


  );
}



export default App;

