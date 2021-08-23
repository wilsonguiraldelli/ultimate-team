import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from 'common/components';

import { getStyles } from './styles';
import { Props } from './types';

import { Column, Text, View, Row, Center, theme, Container } from 'native-base';

function AnalyticsScreen(props: Props): React.ReactElement {

  const styles = getStyles();

  const paying = props.current.players.filter(player => player.payment !== 'Isento').length * 10
  const money = props.current.players.filter(player => player.payment === 'Dinheiro').length * 10
  const pix = props.current.players.filter(player => player.payment === 'Pix').length * 10
  const leftAmount = paying - (money + pix);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Resumo financeiro"
        subtitle={props.current?.date}
        leftIcon="arrow-back"
        onPressLeftIcon={props.onGoBack}
      />

      <Column space={4}>
        <Row
          paddingX={8}
          style={styles.paying}
          space={2}
          paddingY={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="lg" >Total a receber:</Text>
          <Text bold>{`R$ ${paying.toFixed(2)}`}</Text>
        </Row>
        <Row
          paddingX={8}
          style={styles.money}
          space={2}
          paddingY={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="lg" >Total em Dinheiro:</Text>
          <Text bold>{`R$ ${money.toFixed(2)}`}</Text>
        </Row>
        <Row
          paddingX={8}
          style={styles.pix}
          space={2}
          paddingY={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="lg">Total em Pix:</Text>
          <Text bold>{`R$ ${pix.toFixed(2)}`}</Text>
        </Row>
        <Row
          paddingX={8}
          style={styles.left}
          space={2}
          paddingY={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="lg">Valor faltante:</Text>
          <Text bold>{`R$ ${leftAmount.toFixed(2)}`}</Text>
        </Row>
      </Column>
    </SafeAreaView>
  );
}

export default AnalyticsScreen;
