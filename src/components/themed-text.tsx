import { Text, type TextProps } from "react-native";

export function ThemedText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ color: "#000" }, props.style]}
    />
  );
}
