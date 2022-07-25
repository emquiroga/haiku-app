import { useCallback, useEffect, useState } from "react"
import { StyleSheet, NativeSyntheticEvent, TextInput, TextInputChangeEventData, Button } from "react-native"
import lengthInfo from "../helpers/lengthInfo"
import { divide } from "../tools/jsESsyllable"
import { Text, View } from "./Themed"

export interface IVerseBox {
    flag: 5 | 7
}

export const VerseBox = ({flag}: IVerseBox) => {
  const [verse, setVerse] = useState<string>("")
  const [divided, setDivided] = useState<null | string | string[]>(null);

  const onChangeValue = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setVerse(value);
    value.length && setDivided(divide(value))
  },[]);

  useEffect(() => {
    !verse.length && setDivided(null);
  }, [verse])

  return (
    <View style={styles.boxWrapper}>
      <TextInput
        style={{borderBottomColor: lengthInfo(divided?.length ?? 0, flag), width: "100%", borderBottomWidth: 2}}
        focusable={false}
        value={verse}
        onChange={onChangeValue}
      />
      {
        divided && (
            <Text>
                {divided.length}
            </Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    boxWrapper: {
        width: "90%",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    input: {
        width: "100%",
        borderBottomWidth: 1,
    }
})