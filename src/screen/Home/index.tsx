import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageCropPicker from '../../components/ImageCropPicker';
import {useImageCutPicker} from '../../components/ImageCropPicker/context';

const App: React.FC = () => {
  const {imagePath} = useImageCutPicker();

  return (
    <View style={styles.mainContainer}>
      <ImageCropPicker backgroundColor="gray" width={200} />
      <Text style={{marginTop: 100}}>{imagePath}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default App;
