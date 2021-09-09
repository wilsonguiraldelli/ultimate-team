import React, { useState } from "react";


import { SafeAreaView } from "react-native";
import { Header } from "common/components";
import { PlayerSelector, TeamList } from 'games/components';
import { Center, Column, Row, ScrollView, Text, View, Radio, theme } from "native-base";

import { PlayerProps } from "players/types";
import { Props } from './types';
import { getStyles } from './styles';

function FormTeamsScreen(props: Props) {
  const styles = getStyles();

  const [sortablePlayers, setSortablePlayers] = useState<PlayerProps[]>(props.playersToSort);
  const [blueTeam, setBlueTeam] = useState<PlayerProps[]>([]);
  const [redTeam, setRedTeam] = useState<PlayerProps[]>([]);

  const [selecting, setSelecting] = useState<string>('Azul');

  const teamsComplete = blueTeam.length === 7 && redTeam.length === 7;

  const handleSelect = (player: PlayerProps) => {
    if (selecting === 'Azul') setBlueTeam([...blueTeam, player])
    if (selecting === 'Vermelho') setRedTeam([...redTeam, player])

    setSortablePlayers(sortablePlayers.filter(sortPlayer => sortPlayer.id !== player.id));
  }

  const Structions = () => {
    if (!teamsComplete && !sortablePlayers.length) {
      return (
        <Center>
          <Text bold textAlign="center">Não há mais jogadores para completar os times</Text>
        </Center >
      )
    }

    if (!teamsComplete) {
      <Center>
        <Text bold textAlign="center">{`Selecione um jogador para o time ${selecting}`}</Text>
      </Center>
    }

    return <View />
  }

  const handleRemoveFromBlueTeam = (player: PlayerProps) => {
    setBlueTeam(blueTeam.filter(bluePlayer => bluePlayer.id !== player.id))
    setSortablePlayers([...sortablePlayers, player]);
  }

  const handleRemoveFromRedTeam = (player: PlayerProps) => {
    setRedTeam(redTeam.filter(redPlayer => redPlayer.id !== player.id))
    setSortablePlayers([...sortablePlayers, player]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Escalar a seleção"
        onPressLeftIcon={props.onGoBack}
        leftIcon="arrow-back"
      />
      <ScrollView style={styles.content}>
        <Column space={4}>
          <Row>
            <Radio.Group
              name="selectTeam"
              value={selecting}
              onChange={(nextValue) => {
                setSelecting(nextValue)
              }}
            >
              <Radio
                value="Azul"
                my={1}
                colorScheme="blue"
              >
                Azul
              </Radio>
              <Radio
                value="Vermelho"
                my={1}
                colorScheme="red"
              >
                Vermelho
              </Radio>
            </Radio.Group>
          </Row>
          <Structions />
          <Row flex={1} flexWrap="wrap">
            {sortablePlayers.map(player => (
              <PlayerSelector
                key={`${player.id}`}
                player={player}
                onPress={() => handleSelect(player)}
              />
            ))}
          </Row>
          <Column>
            <TeamList
              players={blueTeam}
              removePlayer={handleRemoveFromBlueTeam}
            />
            <TeamList
              players={redTeam}
              removePlayer={handleRemoveFromRedTeam}
            />
          </Column>
        </Column>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FormTeamsScreen;