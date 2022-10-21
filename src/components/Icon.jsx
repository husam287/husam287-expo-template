import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import IcooMoonSelectionFile from 'assets/icomoon/selection.json';

const Icon = createIconSetFromIcoMoon(
  IcooMoonSelectionFile,
  'IcoMoon',
  'icomoon.ttf',
);

export default Icon;
