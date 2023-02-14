import * as React from 'react';
import { useState } from 'react';
import { TabList, Tab, SelectBox, SelectBoxItem, Card, Title } from '@tremor/react';
import { BeakerIcon, PresentationChartLineIcon, PencilIcon, SunIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

export const TabSectionLayout = () => {
  const [value, setValue] = useState(1);
  const [showSection, setShowSection] = useState(true);

  return (
    <>
      <TabList color="teal" defaultValue={1} onValueChange={(value) => setShowSection(value === 1)}>
        <Tab value={1} text={'Chem Log'} icon={BeakerIcon} />
        <Tab value={2} text={'Chem History'} icon={PresentationChartLineIcon}></Tab>
        <Tab value={3} text={'Notes'} icon={PencilIcon} />
        <Tab value={4} text={'Weather'} icon={SunIcon} />
        <Tab value={5} text={'Settings'} icon={Cog6ToothIcon} />
      </TabList>
      {showSection === true ? (
        <div className="flex flex-col lg:flex-row">
          <Card marginTop="mt-4" maxWidth="max-w-sm">
            <Title color="gray" truncate={false} marginTop="mt-0">
              Chemical Log
            </Title>
            <form className=" flex gap-2 flex-col mt-3" action="">
              <label className="input-group input-group-vertical">
                {/* pull from settings/sanitizer to determine chlorine or bromine */}
                <span>Chlorine/Bromine</span>
                <select className="select select-sm select-bordered">
                  <option>10</option>
                  <option>9</option>
                  <option>8</option>
                  <option>7</option>
                  <option>6</option>
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                  <option>0</option>
                </select>
              </label>
              <label className="input-group input-group-vertical">
                <span>PH</span>
                <select className="select select-sm select-bordered">
                  <option>8.0</option>
                  <option>7.8</option>
                  <option>7.6</option>
                  <option>7.4</option>
                  <option>7.2</option>
                  <option>7.0</option>
                </select>
              </label>
              <label className="input-group input-group-vertical">
                <span>Alkalinity</span>
                <input type="text" className="input input-sm input-bordered" />
              </label>
              <label className="input-group input-group-vertical">
                <span>Calcium Hardness</span>
                <input type="text" className="input input-sm input-bordered" />
              </label>
              <button type="submit" className="btn bg-teal-400 text-white border-none">
                Submit Log
              </button>
            </form>
          </Card>
          <Card marginTop="mt-4" maxWidth="max-w-sm">
            <Title color="gray" truncate={false} marginTop="mt-0">
              Recommended Additions
            </Title>
            <span>add something</span>
            <span>add something</span>
            <span>add something</span>
            <span>add something</span>
            <span>add something</span>
            <span>add something</span>
          </Card>
        </div>
      ) : (
        <div className="form-control mt-6">
          <form action="">
            <label className="input-group input-group-vertical">
              <span>Bromine</span>
              <input type="text" className="input input-bordered" />
            </label>
          </form>
        </div>
      )}
    </>
  );
};
