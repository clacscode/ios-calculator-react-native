import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'

interface Props {
  label: string;
  color?: string;
  width?: number;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButtons = ({
  label,
  color = colors.darkGray,
  width = styles.button.width,
  blackText = false,
  onPress
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        width,
        opacity: (pressed) ? 0.8 : 1,
      })}>
      <Text style={{
        ...styles.buttonText,
        color: blackText ? 'black' : 'white'
      }}>{label}</Text>
    </Pressable>
  )
}
