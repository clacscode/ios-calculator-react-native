import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButtons } from '../components/CalculatorButtons';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResult}>0</Text>
        <Text style={styles.subResult}>0</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { console.log('C') }} blackText label='C' color={colors.lightGray} />
        <CalculatorButtons onPress={() => { console.log('+/-') }} blackText label='+/-' color={colors.lightGray} />
        <CalculatorButtons onPress={() => { console.log('del') }} blackText label='del' color={colors.lightGray} />
        <CalculatorButtons onPress={() => { console.log('÷') }} label='÷' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { console.log('7') }} label='7' />
        <CalculatorButtons onPress={() => { console.log('8') }} label='8' />
        <CalculatorButtons onPress={() => { console.log('9') }} label='9' />
        <CalculatorButtons onPress={() => { console.log('×') }} label='×' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { console.log('4') }} label='4' />
        <CalculatorButtons onPress={() => { console.log('5') }} label='5' />
        <CalculatorButtons onPress={() => { console.log('6') }} label='6' />
        <CalculatorButtons onPress={() => { console.log('-') }} label='-' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { console.log('1') }} label='1' />
        <CalculatorButtons onPress={() => { console.log('2') }} label='2' />
        <CalculatorButtons onPress={() => { console.log('3') }} label='3' />
        <CalculatorButtons onPress={() => { console.log('+') }} label='+' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { console.log('0') }} label='0' width={180} />
        <CalculatorButtons onPress={() => { console.log('.') }} label='.' />
        <CalculatorButtons onPress={() => { console.log('=') }} label='=' color={colors.orange} />
      </View>

    </View >
  )
}
