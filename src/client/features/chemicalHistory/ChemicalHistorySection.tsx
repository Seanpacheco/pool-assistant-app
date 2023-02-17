import * as React from 'react';
import { Card, Metric, Title, Block, List, DateRangePicker, AreaChart } from '@tremor/react';

const testChartData = [
  {
    date: 'Jan 22',
    'Chlorine Level': 2,
    'PH Level': 7.0,
  },
  {
    date: 'Feb 22',
    'Chlorine Level': 4,
    'PH Level': 7.4,
  },
  {
    date: 'Mar 22',
    'Chlorine Level': 5,
    'PH Level': 7.6,
  },
  {
    date: 'Apr 22',
    'Chlorine Level': 1,
    'PH Level': 8.0,
  },
  {
    date: 'May 22',
    'Chlorine Level': 3,
    'PH Level': 7.1,
  },
  {
    date: 'Jun 22',
    'Chlorine Level': 7,
    'PH Level': 7.3,
  },
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('us').format(number).toString();
};

export const ChemicalHistorySection = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Card marginTop="mt-4" maxWidth="max-w-sm">
        <Metric color="gray" truncate={false} marginTop="mt-0">
          Chemical Log History
        </Metric>
        <Block marginTop="mt-4" spaceY="space-y-6">
          <DateRangePicker enableDropdown={false} maxWidth="max-w-lg" />
          <List>
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
      <Card marginTop="mt-4" maxWidth="max-w-sm">
        <Metric color="gray" truncate={false} marginTop="mt-0">
          History Data
        </Metric>
        <Card marginTop="mt-4">
          <Title>Chlorine/Bromine levels over time</Title>
          <AreaChart
            data={testChartData}
            categories={['Chlorine Level']}
            dataKey="date"
            height="h-72"
            colors={['yellow']}
            valueFormatter={dataFormatter}
            marginTop="mt-4"
          />
        </Card>
        <Card marginTop="mt-4">
          <Title>PH levels over time</Title>
          <AreaChart
            data={testChartData}
            categories={['PH Level']}
            dataKey="date"
            height="h-72"
            colors={['red']}
            valueFormatter={dataFormatter}
            marginTop="mt-4"
            autoMinValue={true}
          />
        </Card>
      </Card>
    </div>
  );
};
