import React, { useState } from 'react';
import { ListScreen } from 'saturday/screens';

import { useNavigation } from '@react-navigation/native';
import { DateTime } from "luxon";

import * as actions from 'saturday/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { SaturdayProps } from 'saturday/types';

import { Toast } from 'common/components';
import { useToast } from 'native-base';
import uuid from 'react-native-uuid';


function ListContainer(): React.ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const saturdays = useSelector<any, SaturdayProps[]>(({ saturday }) => saturday.data);

  const handleDatePicker = (value: boolean) => {
    setIsDatePickerOpen(value);
  };

  const handleSubmit = (date: Date) => {
    const luxonDate = DateTime.fromJSDate(date);
    const formatedDate = luxonDate.toLocaleString()

    if (saturdays.some(saturday => saturday.date === formatedDate)) {
      handleDatePicker(false);
      return toast.show({
        render: () => <Toast type="error" message="Já jogaram nesse dia, fominha..." />
      })
    }

    const id = uuid.v4();

    dispatch(actions.create({
      id: id,
      date: formatedDate,
    }))

    navigation.navigate('Tabs')
    handleDatePicker(false);
  }

  const handleSelect = (saturday: SaturdayProps) => {
    dispatch(actions.select(saturday));
    navigation.navigate('Tabs', { screen: 'players-list' });
  }

  const handleDelete = (id: string | number[]) => {
    const filteredSaturdays = saturdays.filter(saturday => saturday.id !== id);

    dispatch(actions.update(filteredSaturdays));
  }

  return (
    <ListScreen
      onSubmit={handleSubmit}
      onSelect={handleSelect}
      onDelete={handleDelete}
      handleDatePicker={handleDatePicker}
      isDatePickerOpen={isDatePickerOpen}
      days={saturdays}
    />
  );

}

export default ListContainer;
