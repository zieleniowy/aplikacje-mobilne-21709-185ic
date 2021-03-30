import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import IconButton from './IconButton';

const getValue = value => value===""?0:value*1||0

export default function App() {
  const [result, setResult] = React.useState(0);
  const [shownValue, setShownValue] = React.useState("");
  const [operation, setOperation] = React.useState(null);
 
  const handleNumber = n => () =>{
    if(shownValue === "" && n == 0) return;
    if(n==='.' && shownValue.includes(".")) return;
    if(shownValue === "" && n === ".") return setShownValue("0.");
    setShownValue(shownValue+String(n)); 
  }
  const handleCalc = ()=>{
    if(!operation) return;
    const input = getValue(shownValue);
    const cur = getValue(result);
    const operationResult = Function(`return ${cur}${operation}${input}`)();
    setResult(operationResult);
    setShownValue(String(operationResult));
    setOperation(null);
  }
  const handleOperation = op => ()=>{
    if(op === '='){
      return handleCalc();
    }
    if(operation){ handleCalc(); }
    setOperation(op);
    if(!operation){
      setResult(getValue(shownValue));
    }
    setShownValue("");

  }
  const handleDel = () => {
    setShownValue(shownValue.slice?.(0, -1)||"")
  }
  const handleDelAll = () => setShownValue("")
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{shownValue===""?0:shownValue}</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonRow}>
        <IconButton onPress={handleNumber(7)}>7</IconButton>
        <IconButton onPress={handleNumber(8)}>8</IconButton>
        <IconButton onPress={handleNumber(9)}>9</IconButton>
        <IconButton onPress={handleOperation('*')} highlight={operation==='*'} textStyle={styles.xButtonLabel}>*</IconButton>
      </View>
      <View style={styles.buttonRow}>
        <IconButton onPress={handleNumber(4)}>4</IconButton>
        <IconButton onPress={handleNumber(5)}>5</IconButton>
        <IconButton onPress={handleNumber(6)}>6</IconButton>
        <IconButton onPress={handleOperation('-')} highlight={operation==='-'} textStyle={styles.minusButtonLabel}>-</IconButton>
      </View>
      <View style={styles.buttonRow}>
        <IconButton onPress={handleNumber(1)}>1</IconButton>
        <IconButton onPress={handleNumber(2)}>2</IconButton>
        <IconButton onPress={handleNumber(3)}>3</IconButton>
        <IconButton onPress={handleOperation('+')} highlight={operation==='+'} textStyle={styles.plusButtonLabel}>+</IconButton>
      </View>
      <View style={styles.buttonRow}>
        <IconButton onPress={handleNumber('.')}>.</IconButton>
        <IconButton onPress={handleNumber(0)}>0</IconButton>
        <IconButton onLongPress={handleDelAll} onPress={handleDel}>c</IconButton>
        <IconButton onPress={handleOperation('/')} highlight={operation==='/'} textStyle={styles.equalsButtonLabel}>/</IconButton>
      </View>
      <View style={styles.buttonRow}>
        <IconButton onPress={handleOperation('**')} highlight={operation==='**'} textStyle={styles.xButtonLabel}>^</IconButton>
        <IconButton style={styles.button} onPress={handleOperation('=')} textStyle={styles.equalsButtonLabel}>=</IconButton>

        {/* <IconButton onPress={handleOperation('=')} highlight={operation==='='} textStyle={styles.equalsButtonLabel}>=</IconButton> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
    paddingBottom: 18,
    width: '100%',
  },
  button: {
    backgroundColor: "#ff9100",
    marginLeft: 24,
    flex: 3,
  }, 
  result: {
    fontSize: 48
  },
  xButtonLabel: {
    top: 10
  },
  plusButtonLabel: {
    top: -5
  },
  minusButtonLabel: {
    top: -3
  },
  equalsButtonLabel: {
    top: -3,
  },
});
