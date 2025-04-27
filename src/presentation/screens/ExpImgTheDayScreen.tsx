import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExplainImgOfDay from '../components/apod/ExplainImgOfDay'
import { useApodViewModel } from '../viewmodels/useApodViewModel';

const ExpImgTheDayScreen = () => {
  const { todayApod } = useApodViewModel();

  return (
    <View style={{flex: 1}}>
      <ExplainImgOfDay data={todayApod.data} loading={todayApod.loading} error={todayApod.error} />
    </View>
  )
}

export default ExpImgTheDayScreen

const styles = StyleSheet.create({})