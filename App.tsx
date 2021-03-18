/**
 * @format
 */

import React from 'react';
import {ImageCutPickerProvider} from './src/components/ImageCropPicker/context';
import Home from './src/screen/Home';

const App: React.FC = () => {
  return (
    <ImageCutPickerProvider>
      <Home />
    </ImageCutPickerProvider>
  );
};

export default App;
