import React, {createContext, useState, useContext, useCallback} from 'react';

interface ImageCutPickerContextData {
  imagePath?: string;
  handleImagePath(newImagePath: string): void;
}

const ImageCutPickerContext = createContext<ImageCutPickerContextData>(
  {} as ImageCutPickerContextData,
);

const ImageCutPickerProvider: React.FC = ({children}) => {
  const [imagePath, setImagePath] = useState<string>();

  const handleImagePath = useCallback((newImagePath: string) => {
    setImagePath(newImagePath);
  }, []);

  return (
    <ImageCutPickerContext.Provider value={{imagePath, handleImagePath}}>
      {children}
    </ImageCutPickerContext.Provider>
  );
};

const useImageCutPicker = (): ImageCutPickerContextData => {
  const context = useContext(ImageCutPickerContext);

  if (!context) {
    throw new Error(
      'useImageCutPicker must be used within an ImageCutPickerProvider',
    );
  }

  return context;
};

export {useImageCutPicker, ImageCutPickerProvider};
