import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, NativeBaseProvider, Box, HStack, Pressable, Center, Icon, MaterialCommunityIcons, MaterialIcons, ImageBackground, Dimensions } from 'react-native';


export default function Home() {

  return (
    
   <View style={styles.container}>
    <ScrollView>
    <View>
        <Image source={require('./assets/sailor2.png')} style={styles.image2}/>
          <Text style={styles.texto1}> Sailor Moon é um anime e mangá japonês criado por Naoko Takeuchi. A </Text>
        <Image source={require('./assets/sailor4.png')} style={styles.image4}/>
          <Text style={styles.texto2}>história segue Usagi{"\n"}Tsukino, uma adolescente{"\n"}comum que se transforma na 
          guerreira Sailor Moon para proteger a Terra de ameaças mágicas. Ela é acompanhada por outras guerreiras que têm{"\n"}                    poderes mágicos e{"\n"}                    são responsáveis{"\n"}                    por defender o{"\n"}                    planeta contra{"\n"}                    forças das trevas.{"\n"}        O anime combina elementos de ação, romance e amizade, e se tornou um ícone da cultura pop japonesa, conhecido por sua forte presença feminina{"\n"}e influência{"\n"}duradoura no{"\n"}gênero mahou{"\n"}shoujo (garotas{"\n"}mágicas).
          </Text>
        <Image source={require('./assets/sailor3.png')} style={styles.image3}/>
        <Image source={require('./assets/sailor1.png')} style={styles.image1}/>
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

  image1: {
    width: 200,
    height: 200,
    left: 210,
    top: -60,
    marginBottom: -70,
    marginTop: 160,
  },

  image2: {
    width: 200,
    height: 200,
    right: -110,
 },

   image3: {
    width: 200,
    height: 200,
    left: -10,
    marginTop: -520,
 },

   image4: {
    width: 130,
    height: 100,
    right: -265,
    marginBottom: -125,
    top: -65,
    
 },

  texto1: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "justify",
    margin: 32,
  },

  texto2: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "justify",
    margin: 32,
    marginTop: -10,
  },

});