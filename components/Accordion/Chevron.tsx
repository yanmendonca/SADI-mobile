import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import * as Progress from 'react-native-progress';

type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Chevron = ({progress}: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));
  return (
    <Animated.View style={iconStyle}>
      {/* <Progress.Circle
        progress={0.1}
        size={30}
        thickness={3}
        color='#94ED6B'
        unfilledColor={'#BBBBBB'}
        borderWidth={0}
        animated={false}
        /> */}
        <Image source={require('./Chevron.png')} style={styles.chevron} />
    </Animated.View>
  );
};

export default Chevron;

const styles = StyleSheet.create({
  chevron: {
    width: 24,
    height: 24,
  },
});