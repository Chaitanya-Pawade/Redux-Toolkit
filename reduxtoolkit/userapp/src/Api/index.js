import Chance from 'chance';

const chance = Chance();
// console.log(chance);
export const fakeUserData = () => {

    console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
}

// fakeUserData();