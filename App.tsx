import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// import assets
import Dice1 from './src/assets/1.png';
import Dice2 from './src/assets/2.png';
import Dice3 from './src/assets/3.png';
import Dice4 from './src/assets/4.png';
import Dice5 from './src/assets/5.png';
import Dice6 from './src/assets/6.png';

type DiceProps = PropsWithChildren<{
  imageUrl?: ImageSourcePropType;
}>;

const Dice: React.FC<DiceProps> = ({imageUrl}) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = React.useState<ImageSourcePropType>(Dice1);
  const [diceResult, setDiceResult] = React.useState('1');

  const handleDiceChange = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setDiceResult(dice.toString());
    switch (dice) {
      case 1:
        setDiceImage(Dice1);
        break;
      case 2:
        setDiceImage(Dice2);
        break;
      case 3:
        setDiceImage(Dice3);
        break;
      case 4:
        setDiceImage(Dice4);
        break;
      case 5:
        setDiceImage(Dice5);
        break;
      case 6:
        setDiceImage(Dice6);
        break;
      default:
        setDiceImage(Dice1);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Text style={{fontSize: 30, marginVertical: 20}}>
        You rolled a {diceResult}
      </Text>
      <Pressable onPress={handleDiceChange} style={{zIndex: 1}}>
        <Text style={styles.rollButtonText}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#E5E0FF',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 30,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
