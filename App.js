import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import MyHighScoreScreen from './screens/MyHighScoreScreen';
import HallOfFameScreen from './screens/HallOfFameScreen';



export default function App() {

  const [userNumber, setUserNumber] = useState(0);
  const [guessRound, setGuessRound] = useState(0);
  const [myTimer, setMyTimer] = useState(0);
  const [goHighScore, setGoHighScore] = useState(false);
  const [goHallOfFame,setGoHallOfFame]=useState(false);

  const HallOfFameHandler = (boolean) => {
    setGoHallOfFame(boolean);
  };


  const MyHighScoreHandler = (boolean) => {
    setGoHighScore(boolean);
  };

  const configureNewGameHandler = () => {
    setGoHighScore(false);
    setGoHallOfFame(false);
    setGuessRound(0);
    setUserNumber(null);
  };

  const StartGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (nbOfRound, time) => {
    setGuessRound(nbOfRound);
    setMyTimer(time);
  };
  


  //put after login
  let content = <StartGameScreen onStartGame={StartGameHandler} onMyHighscore={MyHighScoreHandler} onHallOfFame={HallOfFameHandler} />;

  if (goHighScore) {

    content = <MyHighScoreScreen onRestart={configureNewGameHandler}/>

  } else if(goHallOfFame){
    content = <HallOfFameScreen onRestart={configureNewGameHandler}/>
  }
  else {

    if (userNumber && guessRound <= 0) {
      content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
    } else if (guessRound > 0) {
      content = <GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onRestart={configureNewGameHandler} time={myTimer} />;
    }
  }



  return (
    <View style={styles.screen}>

      <Header title="Guess a number" />

      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
