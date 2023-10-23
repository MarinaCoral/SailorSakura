import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, NativeBaseProvider, Box, HStack, Pressable, Center, Icon, MaterialCommunityIcons, MaterialIcons, ImageBackground, Dimensions } from 'react-native';


export default function Home() {

  return (
    
   <View style={styles.container}>
    <ScrollView>
    <View>
               
        <Image source={require('./assets/sakura5.png')} style={styles.sakura5}/>
        <Image source={require('./assets/sakura2.png')} style={styles.sakura2}/> 
          <Text style={styles.texto1}> Sakura Card Captors é um popular anime e mangá japonês criado por{"\n"}CLAMP. 
          A história{"\n"}segue Sakura{"\n"}Kinomoto, uma jovem{"\n"}estudante que acidentalmente libera um conjunto 
          de cartas mágicas chamadas "Cartas Clow". Com  a ajuda de seu{"\n"}                        guardião,{"\n"}                        Keroberos,{"\n"}                        Sakura embarca{"\n"}                        em 
          uma jornada{"\n"}                        para recuperar{"\n"}                        todas as cartas,
          {"\n"}que foram espalhadas e causam problemas mágicos em sua cidade. Durante a série, Sakura se 
          desenvolve como uma poderosa cardcaptor, enquanto enfrenta desafios mágicos, faz novas 
          amizades e lida com questões pessoais. O anime é conhecido{"\n"}por sua mistura{"\n"}de aventura,{"\n"}magia e{"\n"}
          elementos{"\n"}de romance.</Text>
        
        <Image source={require('./assets/sakura1.png')} style={styles.sakura1}/>
        <Image source={require('./assets/sakura3.png')} style={styles.sakura3}/>
      </View>

    </ScrollView>
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
    backgroundColor: '#F6B8EE',
  },

  sakura5: {
    width: 320,
    height: 200,
    right: -55,    
  },

  sakura2: {
    width: 140,
    height: 135,
    right: -260,
    marginBottom: -125,
    top: 95,
 },

  sakura1: {
    width: 200,
    height: 200,
    left: 10,
    marginTop: -700,
 },

   sakura3: {
    width: 190,
    height: 190,
    left: 210,
    top: -105,
    marginBottom: -115,
    marginTop: 365,
    
 },

  texto1: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "justify",
    margin: 32,
  },

});