import * as React from 'react';
import { useState } from 'react';
import { TabList, Tab } from '@tremor/react';
import { BeakerIcon, PresentationChartLineIcon, PencilIcon, SunIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

export const TabSectionLayout = () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <TabList color="teal" defaultValue={1} value={value} onValueChange={setValue}>
        <Tab value={1} text={'Chem Log'} icon={BeakerIcon} />
        <Tab value={2} text={'Chem History'} icon={PresentationChartLineIcon}></Tab>
        <Tab value={3} text={'Notes'} icon={PencilIcon} />
        <Tab value={4} text={'Weather'} icon={SunIcon} />
        <Tab value={5} text={'Settings'} icon={Cog6ToothIcon} />
      </TabList>
    </>
  );
};
