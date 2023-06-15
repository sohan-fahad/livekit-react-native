import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {GazeIconData, GazeIconType} from './gazeIconData';

const GazeIcon = (props: {
  icon: GazeIconType;
  width?: number;
  heigh?: number;
  color?: string;
}) => {
  const {icon, width, heigh, color} = props;

  const renderPaths = () => {
    if (GazeIconData[icon]) {
      return GazeIconData[icon].map((pathData, index) => (
        <Path key={index} d={pathData} fill="none" />
      ));
    }
    return null;
  };

  return (
    <Svg
      width={width > 0 ? width : 25}
      height={heigh > 0 ? heigh : 25}
      fill="none"
      stroke={color ? color : '#ffff'}
      strokeWidth={1.5}
      viewBox="0 0 24 24">
      {renderPaths()}
    </Svg>
  );
};
export default GazeIcon;
