//Generate plate components based on weight, and whether 35lb plates are enabled
export const genPlateComponents = (weight, thirtyFive, barWeight) => {
  const plates = [];

  const plateNumbers = {};

  weight = weight - barWeight;

  while (weight >= 90) {
    //45lb Plates
    plates.push({ color: '#0F52BA', width: 15, height: 65 });
    plateNumbers['fortyFive'] = plateNumbers['fortyFive'] + 1 || 1;
    weight = weight - 90;
  }

  if (thirtyFive) {
    while (weight >= 70) {
      plates.push({ color: '#FCF55F', width: 15, height: 65 });
      plateNumbers['thirtyFive'] = plateNumbers['thirtyFive'] + 1 || 1;
      weight = weight - 70;
    }
  }

  while (weight >= 50) {
    //25lb Plates
    plates.push({ color: '#009E60', width: 15, height: 65 });
    plateNumbers['twentyFive'] = plateNumbers['twentyFive'] + 1 || 1;
    weight = weight - 50;
  }

  while (weight >= 20) {
    //10lb plates
    plates.push({ color: '#FAF9F6', width: 9, height: 43 });
    plateNumbers['ten'] = plateNumbers['ten'] + 1 || 1;
    weight = weight - 20;
  }

  while (weight >= 10) {
    //5lb plates
    plates.push({ color: '#880808', width: 9, height: 33 });
    plateNumbers['five'] = plateNumbers['five'] + 1 || 1;
    weight = weight - 10;
  }

  while (weight >= 5) {
    //2.5lb plates
    plates.push({ color: 'black', width: 6, height: 25 });
    plateNumbers['twoPointFive'] = plateNumbers['twoPointFive'] + 1 || 1;
    weight = weight - 5;
  }

  plates.push(plateNumbers);

  return plates;
};
