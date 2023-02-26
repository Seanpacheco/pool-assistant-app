import * as React from 'react';
import { useState } from 'react';
import { TabList, Tab, Card, Title, Metric } from '@tremor/react';
import { BeakerIcon, PresentationChartLineIcon, PencilIcon, SunIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { LogChemicalSection } from '../../features/logChemicals/components/LogChemicalSection';
import { ChemicalHistorySection } from '../../features/chemicalHistory/components/ChemicalHistorySection';
import { MakeNoteSection } from '../../features/makeNote/components/MakeNoteSection';

export const TabSectionLayout = () => {
  const [value, setValue] = useState(1);
  const [showSection, setShowSection] = useState(1);

  return (
    <>
      <TabList color="teal" defaultValue={1} onValueChange={(value) => setShowSection(value)}>
        <Tab value={1} text={'Chem Log'} icon={BeakerIcon} />
        <Tab value={2} text={'Chem History'} icon={PresentationChartLineIcon}></Tab>
        <Tab value={3} text={'Notes'} icon={PencilIcon} />
        <Tab value={4} text={'Weather'} icon={SunIcon} />
        <Tab value={5} text={'Settings'} icon={Cog6ToothIcon} />
      </TabList>
      {(() => {
        switch (showSection) {
          case 1:
            return <LogChemicalSection />;
          case 2:
            return <ChemicalHistorySection />;
          case 3:
            return <MakeNoteSection />;
          case 4:
            return (
              <div className="form-control mt-6">
                <form action="">
                  <label className="input-group input-group-vertical">
                    <span>Promine</span>
                    <input type="text" className="input input-bordered" />
                  </label>
                </form>
              </div>
            );
          case 5:
            return (
              <div className="form-control mt-6">
                <form action="">
                  <label className="input-group input-group-vertical">
                    <span>Godine</span>
                    <input type="text" className="input input-bordered" />
                  </label>
                </form>
              </div>
            );
        }
      })()}
    </>
  );
};
