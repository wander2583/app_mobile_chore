import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LifeStatus from "../../Components/Common";

export default function Start(){
  return(
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image 
            source={require("../../assets/icons/logo3.png")} 
            style={styles.logo }
            />
            <LifeStatus />
          <Text style={styles.description }>
            Vamos trasnformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "} O melhor nivel.
          </Text>
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
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20,
  },
  description: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
});
