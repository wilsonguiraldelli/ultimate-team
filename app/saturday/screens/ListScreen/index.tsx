import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { Header, DateTimePicker } from 'common/components';
import { DayCard } from 'saturday/components';
import { getStyles } from './styles';

import { Props } from './types';

function ListScreen(props: Props): React.ReactElement {

  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon="add"
        onPressRightIcon={() => props.handleDatePicker(true)}
        title="Sábado"
      />
      <DateTimePicker
        placeholder="Selecine o dia de jogo"
        isOpen={props.isDatePickerOpen}
        onClose={() => props.handleDatePicker(false)}
        onSubmit={props.onSubmit}
        minimumDate={new Date()}
      />

      <FlatList
        data={props.days}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ item }) => (
          <DayCard
            date={item.date}
            onSelect={() => props.onSelect(item)}
            onDelete={() => props.onDelete(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default ListScreen;
