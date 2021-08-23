import React from 'react';
import { AnalyticsScreen } from 'players/screens';

import { useNavigation } from '@react-navigation/native';
import { selectCurrentSaturday } from 'saturday/hooks';

function AnalyticsContainer(): React.ReactElement {
  const navigation = useNavigation();

  const current = selectCurrentSaturday();

  const handleGoBack = () => {
    navigation.goBack()
  }


  return (
    <AnalyticsScreen
      onGoBack={handleGoBack}
      current={current}
    />
  );
}

export default AnalyticsContainer;
