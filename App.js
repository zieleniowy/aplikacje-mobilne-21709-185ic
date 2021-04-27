import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ThemeProvider from './core/ThemeProvider';
import useTheme from './core/useTheme';
import Paper from './core/Paper';
import AppBar from './core/AppBar';
import Avatar from './core/Avatar';
import ButtonBase from './core/ButtonBase';
import ButtonOutlined from './core/ButtonOutlined';
import ButtonContained from './core/ButtonContained';
import Container from './core/Container';
import TextField from './core/TextField';
import Button from './core/Button';
import Backdrop from './core/Backdrop';
import Transition from './core/Transition';

const Test = props => {
  const theme = useTheme();
  return <View><Text>{theme.palette.primary.main}</Text></View>
}

export default function App() {
  const [theme, setTheme] = React.useState({});
  const [value, setValue] = React.useState('');
  const [shown, setShown] = React.useState(false);
  const handleChange = e => setValue(e.nativeEvent.text);

  React.useEffect(()=>{
    setTimeout(()=>{ 
      setTheme({ palette: { primary: { main: '#ffc400' } } })
    }, 5000)

  }, [])
  return (
    <ThemeProvider theme={theme}>
      {/* <Container>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <Paper><Test /></Paper>
          <AppBar><Test /></AppBar>
          <Avatar color="primary">MR</Avatar>
          <ButtonBase fullWidth={true} color="primary">przycisk</ButtonBase>
          <ButtonOutlined fullWidth={false} color="secondary">przycisk</ButtonOutlined>
          <ButtonContained color="primary" fullWidth={true}>przycisk</ButtonContained>
          <TextField color="secondary" label="HelloWorld" value={value} onChange={handleChange} />
      </Container> */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
         <Button variant="contained" color="primary" onPress={()=>setShown(!shown)}>zmien</Button>
         <Transition type="fade" in={shown}>
           <Text>POKAZANE JOŁ</Text>
         </Transition>
          {/* <TextField color="primary" fullWidth={false} onChange={handleChange} label="To jest coś" value={value} /> */}

        {/* <Backdrop>
          <Paper>
            <Text>OKOK</Text>
          </Paper>
        </Backdrop> */}
      </View>
    </ThemeProvider>
  );
}