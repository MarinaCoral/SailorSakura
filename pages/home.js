import { Text, View, StyleSheet, Image, ScrollView, NativeBaseProvider, Box, HStack, Pressable, Center, Icon, MaterialCommunityIcons, MaterialIcons } from 'react-native';


export default function Home() {

  return (
    
  <View style={styles.container}>
  
    <View >
    <Text style={styles.text1}>Sakura Card Captors</Text>
        <Image source={require('./assets/sakura.gif')} style={styles.image2}/>
         
    </View>
    <View style={styles.text}>
        <Image source={require('./assets/sailorMoon.jpg')} style={styles.image1}/>
          <Text style={styles.text2}>Sailor Moon</Text>
    </View>
   
  </View>


  );

  function Example() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
        
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>

          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;
}
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    flexDirection: "column",
  },


  image1: {
    width: 410,
    height: 390,
  },

 image2: {
    width: 410,
    height: 390,
    
  },

  text1: {
    top: 200,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
},

  text2: {
    bottom: 200,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
},

});