import React from 'react';
import { useHomeContext } from '../context/HomeProvider';
import AddByPlate from './AddByPlate';
import AddByInput from './AddByInput';

function PlateDisplay({ plateNumbers }) {
  const { modeAddPlates } = useHomeContext();

  //Reverse plate calculator
  if (modeAddPlates) return <AddByPlate plateNumbers={plateNumbers} />;

  //Normal Plate Caluculator
  return <AddByInput plateNumbers={plateNumbers} />;
}

export default PlateDisplay;
