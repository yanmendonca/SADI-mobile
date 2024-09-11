import Ionicons from '@expo/vector-icons/Ionicons';
import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View, Text, Image, ImageBackground, ImageSourcePropType, ScrollView, Pressable, ViewStyle, DimensionValue, SafeAreaView } from 'react-native';


export const ReviewButton = (): React.JSX.Element => {
    return (
      <SafeAreaView>
        <ScrollView scrollEnabled={true} contentInsetAdjustmentBehavior="automatic">
          <TouchableOpacity style={styles.ReviewButtonContainer}>
            <Text style={styles.ReviewButtonText} numberOfLines={1}>
              REVISÃO
            </Text>
            <View style={styles.ReviewButtonBackground} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ReviewButtonContainer: {
      width: 159.855,
      height: 47.921,
      borderRadius: 10,
      position: 'relative',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
    },
    ReviewButtonText: {
      height: 23,
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 23,
      color: '#ffffff',
      position: 'relative',
      textAlign: 'left',
      zIndex: 1,
      marginTop: 12.46,
      marginLeft: 35.375,
    },
    ReviewButtonBackground: {
      width: 159.855,
      height: 47.921,
      backgroundColor: '#6083ff',
      borderRadius: 10,
      position: 'absolute',
      top: 0,
      left: 0,
    },
});