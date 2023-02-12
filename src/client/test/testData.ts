import Account from '../interfaces/Account';

export const testUser = {
  id: 777,
  firstName: 'Sean',
  lastName: 'Pacheco',
  email: 'sp@email.com',
  password: 'password',
  accountIds: [1, 2, 3],
  chemSettings: {
    raiseChlorine: 'sodium dichloro-s-triazinetrione',
    raisePh: 'sodium carbonate',
    lowerPh: 'muriatic acid',
    raiseAlkalinity: 'sodium bicarbonate',
    lowerAlkalinity: 'muriatic acid',
    raiseCalciumHardness: 'calcium chloride',
  },
};
export const testAccounts = [
  {
    id: 1,
    name: 'Santos',
    address: '123 Main St.',
    zipCode: '01010',
    state: 'HI',
    gallons: 12000,
    sanitizer: 'chlorine',
  },
  {
    id: 2,
    name: 'Wittman',
    address: '34 Yellowbrick Rd.',
    zipCode: '01010',
    state: 'HI',
    gallons: 500,
    sanitizer: 'bromine',
  },
  {
    id: 3,
    name: 'Cliff',
    address: '77 Broadway Ave.',
    zipCode: '01010',
    state: 'HI',
    gallons: 30000,
    sanitizer: 'chlorine',
  },
];
// export const testAccountOne = {
//   id: 1,
//   name: "Santos",
//   address: "123 Main St.",
//   zipCode: "01010",
//   state: "HI",
// };

// export const testAccountTwo = {
//   id: 2,
//   name: "Wittman",
//   address: "34 Yellowbrick Rd.",
//   zipCode: "01010",
//   state: "HI",
// };

// export const testAccountThree = {
//   id: 3,
//   name: "Cliff",
//   address: "77 Broadway Ave.",
//   zipCode: "01010",
//   state: "HI",
// };
