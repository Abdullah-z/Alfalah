import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Text, Card, Block, Button} from '../components';
import {useTheme} from '../hooks';
import {useState} from 'react';
import {Checkbox, CheckIcon, FormControl, Input, Select} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function KYC() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <ScrollView>
      <View style={{margin: sizes.sm}}>
        <Text h5 bold>
          Online Account Opening Application
        </Text>
        {step === 1 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Upload Identity Documents
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>ID DOCUMENT TYPE</FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select ID Document Type"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1">
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                DOCUMENT SCAN COPY
              </FormControl.Label>
              <Button onPress={pickImage}>
                <Text primary>Upload Image</Text>
              </Button>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                ID DOCUMENT BACK SCAN COPY
              </FormControl.Label>
              <Button onPress={pickImage} marginBottom={sizes.xs}>
                <Text primary>Upload Image</Text>
              </Button>
            </FormControl>
            <Button
              marginTop={sizes.sm}
              primary
              onPress={() => setStep(2)}
              marginBottom={sizes.xs}>
              <Text white>Continue</Text>
            </Button>
          </Block>
        ) : step === 2 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Basic Details
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>FULL NAME</FormControl.Label>
              <Input />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                FATHER'S/HUSBAND'S NAME
              </FormControl.Label>
              <Input />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                MOTHER'S NAME
              </FormControl.Label>
              <Input />
            </FormControl>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              ID DOCUMENT TYPE
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select ID Document Type"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              ID DOCUMENT NUMBER
            </FormControl.Label>
            <Input />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs}>
              LIFETIME EXPIRY
            </FormControl.Label>
            <Checkbox>Yes</Checkbox>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <Button
              marginTop={sizes.sm}
              primary
              onPress={pickImage}
              marginBottom={sizes.xs}>
              <Text white>Continue</Text>
            </Button>
          </Block>
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
