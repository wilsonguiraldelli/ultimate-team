import React, { useState } from 'react';
import { ListScreen } from 'game-day/screens';

import { useNavigation } from '@react-navigation/native';

function ListContainer(): React.ReactElement {
  const navigation = useNavigation();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);


  const handleDatePicker = (value: boolean) => {
    setIsDatePickerOpen(value);
  };

  const handleSubmit = (date: Date) => {
    console.log('Date', date);
    handleDatePicker(false);
  }

  return (
    <ListScreen
      onSubmit={handleSubmit}
      handleDatePicker={handleDatePicker}
      isDatePickerOpen={isDatePickerOpen}
    />
  );
}

export default ListContainer;
