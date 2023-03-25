import React from 'react';
import ScreenWrapper from 'components/general/ScreenWrapper';
import ScrollViewWithoutBar from 'components/general/ScrollViewWithoutBar';
import CustomText from 'components/general/CustomText';
// import { useGetCategoriesQuery } from 'apis/services/category';

export default function HomeScreen() {
  // const { data: categories, isFetching: isCategoryLoading } = useGetCategoriesQuery();

  return (
    <ScreenWrapper>
      <ScrollViewWithoutBar>
        <CustomText>Home</CustomText>
      </ScrollViewWithoutBar>
    </ScreenWrapper>
  );
}
