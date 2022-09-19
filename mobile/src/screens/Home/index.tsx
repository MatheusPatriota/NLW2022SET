import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Heading
        title="Encontre seu Duo"
        subtitle="Selecione o Jogo que deseja jogar"
      />
    </View>
  );
}
