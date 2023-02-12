import * as React from 'react';
import AccountListItem from './AccountListItem';
import { Block, List } from '@tremor/react';
import '../../App.css';
import AddAccountButton from '../../features/addAccount/components/AddAccountButton';
import { testAccounts } from '../../test/testData';

import AccountListSearch from '../Form/AccountListSearch';

export default function AccountList() {
  const [data, setData] = React.useState(testAccounts);
  const [filteredList, setFilteredList] = React.useState(data);
  const [searchInput, setSearchInput] = React.useState('');

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredList(filteredData);
    } else {
      setFilteredList(data);
    }
  };

  return (
    <Block spaceY="space-y-6">
      <AccountListSearch searchItems={searchItems} />
      {/* <form action="">
        <TextInput onChange={(e) => searchItems(e.target.value)} icon={MagnifyingGlassIcon} placeholder="Search..." />
      </form> */}
      <AddAccountButton />
      <List>
        {searchInput.length > 1
          ? filteredList.map((item) => {
              return (
                <AccountListItem
                  title={item.name}
                  address={item.address}
                  currentDistance={'1 mile'}
                  key={item.id}
                  id={item.id}
                />
              );
            })
          : data.map((item) => {
              return (
                <AccountListItem
                  title={item.name}
                  address={item.address}
                  currentDistance={'1 mile'}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
      </List>
    </Block>
  );
}
