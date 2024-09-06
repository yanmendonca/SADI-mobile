import {Pressable, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Category} from './data';
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Chevron from './Chevron';
import AccordionNested from './AccordionNested';
import * as Progress from 'react-native-progress';

type Props = {
  value: Category;
  type: string;
  cProgress: number;
};

const Accordion = ({value, type, cProgress}: Props) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(listRef)!.height);
            })();
            // heightValue.value = withTiming(measure(listRef)!.height);
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
        <Text style={styles.textTitle}>{value.title}</Text>
        {/* <Chevron progress={progress} /> */}
        <Progress.Circle
            progress={cProgress}
            size={30}
            thickness={3}
            color='#94ED6B'
            unfilledColor={'#BBBBBB'}
            borderWidth={0}
            animated={false}
            />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          {type === 'regular' &&
            value.content.map((v, i) => {
              return (
                <TouchableOpacity key={i} style={styles.content}>
                  <Text style={styles.textContent}>{v}</Text>
                </TouchableOpacity>
              );
            })}
          {type === 'nested' && (
            <>
              <View style={styles.content}>
                <Text style={styles.textContent}>{value.content}</Text>
              </View>
              {value.contentNested.map((val, ind) => {
                return (
                  <AccordionNested
                    value={val}
                    key={ind}
                    parentHeighValue={heightValue}
                  />
                );
              })}
            </>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  textTitle: {
    padding: 10,
    fontSize: 14,
  },
  titleContainer: {
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  content: {
    padding: 10,
    backgroundColor: '#F2F2F2',
  },
  textContent: {
    fontSize: 14,
    color: 'black',
  },
});