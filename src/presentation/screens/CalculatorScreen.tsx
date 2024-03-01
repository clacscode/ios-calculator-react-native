import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButtons } from '../components/CalculatorButtons';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const { number, prevNumber, buildNumber, toggleSign, clean, deleteOperation,
    divideOperation, multiplyOperation, substractOperation, addOperation, calculateResult } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}>{number}
        </Text>

        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.subResult}>
          {(prevNumber === '0' ? ' ' : prevNumber)}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={clean} blackText label='C' color={colors.lightGray} />
        <CalculatorButtons onPress={toggleSign} blackText label='+/-' color={colors.lightGray} />
        <CalculatorButtons onPress={() => deleteOperation(number)} blackText label='del' color={colors.lightGray} />
        <CalculatorButtons onPress={divideOperation} label='÷' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { buildNumber('7') }} label='7' />
        <CalculatorButtons onPress={() => { buildNumber('8') }} label='8' />
        <CalculatorButtons onPress={() => { buildNumber('9') }} label='9' />
        <CalculatorButtons onPress={multiplyOperation} label='×' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { buildNumber('4') }} label='4' />
        <CalculatorButtons onPress={() => { buildNumber('5') }} label='5' />
        <CalculatorButtons onPress={() => { buildNumber('6') }} label='6' />
        <CalculatorButtons onPress={substractOperation} label='-' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { buildNumber('1') }} label='1' />
        <CalculatorButtons onPress={() => { buildNumber('2') }} label='2' />
        <CalculatorButtons onPress={() => { buildNumber('3') }} label='3' />
        <CalculatorButtons onPress={addOperation} label='+' color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButtons onPress={() => { buildNumber('0') }} label='0' width={180} />
        <CalculatorButtons onPress={() => { buildNumber('.') }} label='.' />
        <CalculatorButtons onPress={calculateResult} label='=' color={colors.orange} />
      </View>

    </View >
  )
}
