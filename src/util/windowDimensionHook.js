import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateWindowDimension } from '../redux/windowDimensionSlice';

const useWindowDimensions = () => {
  const dispatch = useDispatch();
  dispatch(updateWindowDimension(Dimensions.get('window')));

  useEffect(() => {
    const onChange = (result) => {
      dispatch(updateWindowDimension(result.window));
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });
};

export default useWindowDimensions;
