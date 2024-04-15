import 'react-native-gesture-handler';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

// const [jurusan, setJurusan] = useState('');

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [tab, setTab] = useState('new');

  const header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>

        <TouchableOpacity
          onPress={() => setTab('new')}
          style={{backgroundColor: 'green', borderRadius: 15}}>
          <Text style={{paddingHorizontal: 20, color: 'white'}}>New</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab('confirm')}
          style={{backgroundColor: 'blue', borderRadius: 15}}>
          <Text style={{paddingHorizontal: 20, color: 'white'}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const home = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              shadowOpacity: 0.27,
              paddingHorizontal: 17,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              shadowRadius: 4.65,
              elevation: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                SBOOKXXXXXXX
              </Text>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>New</Text>
              </View>
            </View>
            <Text style={{fontSize: 14, color: 'black'}}>16/03/2024</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10, // Sesuaikan dengan margin yang diinginkan
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                09123213213
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  color: 'blue',
                }}>
                Warranty
              </Text>
            </View>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              NBAXZBOOK
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              Mybook 8/SSD256/Core-i3/Blue
            </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              P. Amir - 081399999999
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>LCD Rusak</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              shadowOpacity: 0.27,
              paddingHorizontal: 17,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              shadowRadius: 4.65,
              elevation: 10,
              marginVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                SBOOKXXXXXXX
              </Text>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>New</Text>
              </View>
            </View>
            <Text style={{fontSize: 14, color: 'black'}}>16/03/2024</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10, // Sesuaikan dengan margin yang diinginkan
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                09123213213
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  color: 'blue',
                }}>
                Warranty
              </Text>
            </View>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              NBAXZBOOK
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              Mybook 8/SSD256/Core-i3/Blue
            </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              P. Amir - 081399999999
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>LCD Rusak</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              shadowOpacity: 0.27,
              paddingHorizontal: 17,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              shadowRadius: 4.65,
              elevation: 10,
              marginVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                SBOOKXXXXXXX
              </Text>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>New</Text>
              </View>
            </View>
            <Text style={{fontSize: 14, color: 'black'}}>16/03/2024</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10, // Sesuaikan dengan margin yang diinginkan
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                09123213213
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  color: 'blue',
                }}>
                Warranty
              </Text>
            </View>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              NBAXZBOOK
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              Mybook 8/SSD256/Core-i3/Blue
            </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              P. Amir - 081399999999
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>LCD Rusak</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              shadowOpacity: 0.27,
              paddingHorizontal: 17,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              shadowRadius: 4.65,
              elevation: 10,
              marginVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                SBOOKXXXXXXX
              </Text>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>New</Text>
              </View>
            </View>
            <Text style={{fontSize: 14, color: 'black'}}>16/03/2024</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10, // Sesuaikan dengan margin yang diinginkan
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                09123213213
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  color: 'blue',
                }}>
                Warranty
              </Text>
            </View>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              NBAXZBOOK
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              Mybook 8/SSD256/Core-i3/Blue
            </Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              P. Amir - 081399999999
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>LCD Rusak</Text>
          </TouchableOpacity>
          {/* <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            /> */}
        </ScrollView>
      </View>
    );
  };

  const detailScreen = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <TouchableOpacity
          style={{
            shadowOpacity: 0.27,
            paddingHorizontal: 17,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            shadowRadius: 4.65,
            elevation: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              SBOOKXXXXXXX
            </Text>
            <View
              style={{
                backgroundColor: 'blue',
                borderRadius: 10,
                paddingHorizontal: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>Confirm</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, color: 'black'}}>16/03/2024</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginVertical: 10, // Sesuaikan dengan margin yang diinginkan
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              09123213213
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
                color: 'blue',
              }}>
              Warranty
            </Text>
          </View>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            NBAXZBOOK
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>
            Mybook 8/SSD256/Core-i3/Blue
          </Text>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            P. Amir - 081399999999
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>LCD Rusak</Text>
        </TouchableOpacity>
        {/* <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            /> */}
      </View>
    );
  };

  function HomeScreen({navigation}) {
    const Icon = () => {
      if (tab === 'new') {
        return (
          <>
            {header()}
            {home()}
          </>
        );
      }

      if (tab === 'confirm') {
        return (
          <>
            {header()}
            {detailScreen()}
          </>
        );
      }
    };

    return (
      <View style={{flex: 1}}>
        <Icon />
      </View>
    );
  }

  function DetailsScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {header()}
        {detailScreen()}
      </View>
    );
  }
  
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detail' }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
