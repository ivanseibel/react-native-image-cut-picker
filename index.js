/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ImageCutPickerContext from './src/components/ImageCropPicker/context';
import ImageCutPicker from './src/components/ImageCropPicker';

AppRegistry.registerComponent(appName, () => App);

export {ImageCutPicker, ImageCutPickerContext};
