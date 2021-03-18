import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useImageCutPicker} from './context';

import * as SC from './styles';

interface ImageCropPickerType {
  width?: number;
  backgroundColor?: string;
}

const ImageCropPicker: React.FC<ImageCropPickerType> = ({
  width = 100,
  backgroundColor = 'white',
}) => {
  const {imagePath, handleImagePath} = useImageCutPicker();

  useEffect(() => {
    handleImagePath(
      'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg',
    );
  }, [handleImagePath]);

  return (
    <SC.Container width={width} backgroundColor={backgroundColor}>
      <TouchableOpacity
        onPress={() => {
          try {
            ImagePicker.openPicker({}).then(image => {
              console.log(image);
              ImagePicker.openCropper({
                width: width,
                height: width,
                mediaType: 'photo',
                path: image.path,
                cropperToolbarTitle: 'Ajuste a sua imagem',
              })
                .then(cropedImage => {
                  console.log(cropedImage);
                  handleImagePath(cropedImage.path);
                })
                .catch(error => {
                  console.log(error.message);
                });
            });
          } catch (error) {
            console.log(error.message);
          }
        }}>
        <SC.Image
          source={{
            uri: imagePath,
          }}
        />
      </TouchableOpacity>
    </SC.Container>
  );
};

export default ImageCropPicker;
