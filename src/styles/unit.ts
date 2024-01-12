import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const designWidth = 428;
const widthPercentage = screenWidth / designWidth;
const unit = Math.min(widthPercentage, 1.5);

export default unit;
