import * as React from 'react';
import { Card, Metric, Title, Block, List, DateRangePicker, Text } from '@tremor/react';
import AddNoteButton from './AddNoteButton';
import NoteItem from './NoteItem';

const testNoteData = [
  {
    title: 'Pump Motor needs to be replaced',
    date: '1/27/2023',
    id: 1,
    noteBody: 'I noticed the pump making a loud sound so I took a look and noticed the impeller is cracked',
  },
  {
    title: 'Pump Motor needs to be replaced',
    date: '1/27/2023',
    id: 2,
    noteBody: 'I noticed the pump making a loud sound so I took a look and noticed the impeller is cracked',
  },
  {
    title: 'Pump Motor needs to be replaced',
    date: '1/27/2023',
    id: 3,
    noteBody: 'I noticed the pump making a loud sound so I took a look and noticed the impeller is cracked',
  },
  {
    title: 'Pump Motor needs to be replaced',
    date: '1/27/2023',
    id: 4,
    noteBody: 'I noticed the pump making a loud sound so I took a look and noticed the impeller is cracked',
  },
  {
    title: 'Pump Motor needs to be replaced',
    date: '1/27/2023',
    id: 5,
    noteBody: 'I noticed the pump making a loud sound so I took a look and noticed the impeller is cracked',
  },
  {
    title: 'Pump Motor needs to be replaced',
    date: '1/27/2023',
    id: 6,
    noteBody: 'I noticed the pump making a loud sound so I took a look and noticed the impeller is cracked',
  },
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('us').format(number).toString();
};

export const MakeNoteSection = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Card marginTop="mt-4" maxWidth="max-w-sm">
        <Metric color="gray" truncate={false} marginTop="mt-0">
          Notes
        </Metric>
        <Block marginTop="mt-4" spaceY="space-y-6">
          <AddNoteButton />
          <DateRangePicker enableDropdown={false} maxWidth="max-w-lg" />
          <List>
            {testNoteData.map((item) => {
              return <NoteItem title={item.title} key={item.id} date={item.date} />;
            })}
            {/* {searchInput.length > 1
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
            })} */}
          </List>
        </Block>
      </Card>
      <Card marginTop="mt-4" maxWidth="max-w-lg">
        <Title>Date</Title>
        <Text>notes will display body here</Text>
      </Card>
    </div>
  );
};
