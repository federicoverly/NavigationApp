import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {PermissionsContext} from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>
        Please check your permissions to use the screen
      </Text>
      <CustomButton title="Permission" onPress={askLocationPermission} />
      <Text style={screenStyles.status}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  status: {
    marginTop: 20,
  },
});
