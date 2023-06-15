/* eslint-disable react/react-in-jsx-scope */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RoomApiService} from '../../services/room.apiService';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

// const URL_KEY = 'API2axhtoc6oUxm';
// const TOKEN_KEY = 'SVVLMwejKKlqmgf9LV255fWOmEeLLEYM41O1Ma1rIZ6B';

export const PreJoinScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'PreJoinPage'>) => {
  const [partipantName, setParticipantName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const {colors} = useTheme();

  const joinRoom = async () => {
    setIsloading(true);
    try {
      if (!partipantName || !roomName) {
        Toast.show({
          type: 'error',
          text1: 'Please!',
          text2: 'Enter room and participant name',
        });

        return;
      }
      const response = await RoomApiService.getToken(roomName, partipantName);
      if (response.success) {
        navigation.push('RoomPage', {token: response.payload.token});
      } else {
        Toast.show({
          type: 'error',
          text1: 'unable to connect',
          text2: 'unable to connect',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'unable to connect',
        text2: 'unable to connect',
      });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Your Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setParticipantName}
        value={partipantName}
      />

      <Text style={{color: colors.text}}>Room Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setRoomName}
        value={roomName}
      />
      {isLoading ? (
        <Button color={'red'} title="Connecting.." />
      ) : (
        <Button color={'red'} title="Connect" onPress={joinRoom} />
      )}

      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  spacer: {
    height: 10,
  },
});
