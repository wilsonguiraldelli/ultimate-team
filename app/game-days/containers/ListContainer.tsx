import React, { useState } from 'react';
import { ListScreen } from 'game-days/screens';

import { useNavigation } from '@react-navigation/native';
import { DateTime } from "luxon";

import { list } from 'game-days/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GameDay } from 'game-days/types';

import { Toast } from 'common/components';
import { useToast } from 'native-base';
import uuid from 'react-native-uuid';


function ListContainer(): React.ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();
const toast = useToast();

  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const gameDays = useSelector<any, GameDay[]>(({ gameDays }) => gameDays.list.days);

  const handleDatePicker = (value: boolean) => {
    setIsDatePickerOpen(value);
  };

  const handleSubmit = (date: Date) => {
    const luxonDate = DateTime.fromJSDate(date);
    const formatedDate = luxonDate.toLocaleString()
    console.log('DIAS', gameDays);

    if (gameDays.some(gameDay => gameDay.date === formatedDate)) {
    handleDatePicker(false);
    return toast.show({
        render: () => <Toast type="error" message="Esse dia já foi criado" />
      })
    }

    const id = uuid.v4();

    dispatch(list.create({
      id: id,
      date: formatedDate,
    }))

    navigation.navigate('Tabs')
    handleDatePicker(false);
  }

  return (
    <ListScreen
      onSubmit={handleSubmit}
      handleDatePicker={handleDatePicker}
      isDatePickerOpen={isDatePickerOpen}
      days={gameDays}
    />
  );

}

export default ListContainer;
