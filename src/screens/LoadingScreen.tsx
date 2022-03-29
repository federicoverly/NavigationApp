import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={50} color={'black'} />
    </View>
  );
};
