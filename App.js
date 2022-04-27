import React, { useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import {colors} from './src/utils/colors';
import {Focus} from './src/features/Focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  const clearHistory = () => setHistory([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory 
          history={history}
          clearHistory={clearHistory}
        />
        </>
        ) : (
          <Timer 
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject])
            }}
            clearSubject={() => {setCurrentSubject(null)}}
          />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  }
});
