import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native-gesture-handler";
import DefaultButton from "../../Components/Common/DefaultButton";


export default function AppExplanation () {
  function handleSetShowHome(){
    console.log("Botao clicando!")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center"}}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nivelna vida?
          </Text>
          <Text style={styles.description}>
            Na proxima tela voce vai poder escolher {"\n"} sues 4 habitos de forma individual.
          </Text>
          <DefaultButton
          buttonText={"Continuar"}
          handlePress={handleSetShowHome}
          width={250}
          height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
});
