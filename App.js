import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import  ThemeProvider  from './core/ThemeProvider';
import {Container, AppBar} from './core/index.js';

import DrawerPage from './docs/pages/Drawer';
import TransitionPage from './docs/pages/Transition';
import ListPage from './docs/pages/List';
import PaperPage from './docs/pages/Paper';
import RadioPage from './docs/pages/Radio';
import CheckboxPage from './docs/pages/Checkbox';
import BadgePage from './docs/pages/Badge';
import AvatarPage from './docs/pages/Avatar';
import LinkPage from './docs/pages/Link';
import ButtonPage from './docs/pages/Button';
import TextFieldPage from './docs/pages/TextField';

import Home from './docs/pages/Home';
import Menu from './docs/Menu';


function App() {
  const [theme, setTheme] = React.useState({});
  return (
    <ThemeProvider theme={theme}>
      <View style={{ backgroundColor: '#f0faff', height: '100%', }}>
        <NativeRouter>
            <SafeAreaView>
              <Menu />
              <Container>
                <Route exact path="/" component={Home} />
                <Route path="/drawer" component={DrawerPage} />
                <Route path="/transition" component={TransitionPage} />
                <Route path="/list" component={ListPage} />
                <Route path="/paper" component={PaperPage} />
                <Route path="/radio" component={RadioPage} />
                <Route path="/checkbox" component={CheckboxPage} />
                <Route path="/badge" component={BadgePage} />
                <Route path="/avatar" component={AvatarPage} />
                <Route path="/link" component={LinkPage} />
                <Route path="/button" component={ButtonPage} />
                <Route path="/textfield" component={TextFieldPage} />

              </Container>
            </SafeAreaView>
        </NativeRouter>
      </View>
    </ThemeProvider>


  );
}



export default App;

