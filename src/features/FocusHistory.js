import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';
import {RoundedButton} from '../components/RoundedButton';

export const FocusHistory = ({history, clearHistory}) => {

  if(!history || !history.length) return(
      <Text style={styles.titleNoFocus}>
       We haven't focused on anything yet.
      </Text>
  );
      
  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
       Things we've focused on:
      </Text>
      
      <FlatList
        data={history}
        renderItem={renderItem}
      />

      <View style={styles.buttonWrap}>
        <RoundedButton 
          title="Clear"
          size={100}
          onPress={() => clearHistory()}
          style={{fontSize: 10}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex:1
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  titleNoFocus: {
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  buttonWrap:{
    paddingTop:spacing.md,
    paddingBottom: spacing.md,
    alignItems: 'center',
    justifyContent: 'center'
  }
});