import { View } from "native-base";
import React from "react";

import { Props } from './types';
import { getStyles } from './styles';
import { SafeAreaView } from "react-native";
import { Header } from "common/components";

function FormTeamsScreen(props: Props) {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Escalar a seleção"
        onPressLeftIcon={props.onGoBack}
        leftIcon="arrow-back"
      />
    </SafeAreaView>
  )
}

export default FormTeamsScreen;