import { Platform } from "react-native";
import _axios from "../AxiosConfig";
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { SaveFormat } from "expo-image-manipulator";

export class FileServices {
  static async uploadFile(fileInput) {
    let file = fileInput;
    const type = file.substring(file.lastIndexOf('.') + 1)
    if (type !== 'pdf') {
      file = await ImageManipulator.manipulateAsync(
        fileInput,
        [
          { resize: { height: 720 } }
        ],
        { compress: 1, format: SaveFormat.PNG }
      )
      file = file.uri
    }

    let size = await FileSystem.getInfoAsync(file)
    if (size.size > 5000000) {
      throw Error('File is more than 5MB')
    }
    
    const requestData = new FormData();
    requestData.append("formatsAllowed", ".png,.jpg,.pdf,.jpeg");
    requestData.append("maxSize", "5");
    requestData.append("file", {
      name: `photo.${type}`,
      type: `image/${type}`,
      uri: Platform.OS === 'ios' ? file.replace('file://', '') : file,
    });

    return _axios.post(`/FileUpload/UploadFile`, requestData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }
}
