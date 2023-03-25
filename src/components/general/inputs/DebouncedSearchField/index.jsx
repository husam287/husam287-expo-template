import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useMemo, useEffect, useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from 'constants/Colors';
import { debounce } from 'lodash-es';
import PureInput from '../PureInput';

const styles = StyleSheet.create({
  spaceEnd: {
    marginEnd: 10,
  },
});

export default function DebouncedSearchField({
  onSearchChange = () => { },
  withCloseButton,
  onSubmit = () => {},
}) {
  const [searchValue, setSearchValue] = useState(null);

  const debouncedSearchHandler = useMemo(
    () => debounce(onSearchChange, 300),
    [onSearchChange],
  );

  useEffect(() => {
    if (searchValue === null) return;

    debouncedSearchHandler(searchValue);
  }, [searchValue, debouncedSearchHandler]);

  const onDismiss = () => {
    setSearchValue('');
  };

  return (
    <PureInput
      prefix={(
        <Ionicons
          style={styles.spaceEnd}
          name="search"
          size={24}
          color={Colors.dark}
        />
      )}
      placeholderText="ابحث هنا"
      onChange={setSearchValue}
      onSubmit={onSubmit}
      value={searchValue}
      suffix={!!(withCloseButton && searchValue)
        && (
        <TouchableOpacity onPress={onDismiss}>
          <AntDesign name="close" size={20} color={Colors.dark} />
        </TouchableOpacity>
        )}
    />
  );
}
