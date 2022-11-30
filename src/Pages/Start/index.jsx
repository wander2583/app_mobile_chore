import { Image, ScrollView, Text, View } from "react-native";
import React from "react";

export default function Start(){
  return(
  <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../../assets/icons/logo3.png")} />
            <Text>
            Vamos trasnformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "} O melhor nivel.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
