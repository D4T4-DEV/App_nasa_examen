import React, { useEffect, useRef } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface AnimatedThemeProps {
  isDarkMode: boolean;
  lightColor: string;
  darkColor: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const animationDuration: number = 400;

export const AnimatedThemeView: React.FC<AnimatedThemeProps> = ({
  children,
  lightColor,
  darkColor,
  isDarkMode,
  style,
}) => {
  const progress = useSharedValue(isDarkMode ? 1 : 0);
  const prevIsDarkMode = useRef(isDarkMode); // Referencia del valor

  useEffect(() => {
    // Checamos que realmente cambio de estado, y si es asi lo animamos
    if (prevIsDarkMode.current !== isDarkMode) {
      progress.value = withTiming(isDarkMode ? 1 : 0, { duration: animationDuration });
      prevIsDarkMode.current = isDarkMode;
    }
  }, [isDarkMode, progress]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [lightColor, darkColor]
    );

    return {
      backgroundColor,
    };
  });

  return <Animated.View style={[rStyle, style]}>{children}</Animated.View>;
};

// Codigo basado en:
// https://enzomanuelmangano.medium.com/interpolate-colors-like-a-pro-with-react-native-reanimated-2-253a2695cf0a (consultado el 04/05/2025)