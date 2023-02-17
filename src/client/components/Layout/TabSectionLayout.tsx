import * as React from 'react';
import { useState } from 'react';
import { TabList, Tab, Card, Title, Metric } from '@tremor/react';
import { BeakerIcon, PresentationChartLineIcon, PencilIcon, SunIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

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
            return (
              <div className="flex flex-col gap-4 lg:flex-row">
                <Card marginTop="mt-4" maxWidth="max-w-sm">
                  <Metric color="gray" truncate={false} marginTop="mt-0">
                    Chemical Log
                  </Metric>
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
                    <label className="input-group input-group-vertical">
                      <span>Cyanuric Acid</span>
                      <input type="text" className="input input-sm input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical">
                      <span>Total Dissolved Solids</span>
                      <input type="text" className="input input-sm input-bordered" />
                    </label>
                    <button type="submit" className="btn bg-teal-400 text-white border-none">
                      Submit Log
                    </button>
                  </form>
                </Card>
                <Card marginTop="mt-4" maxWidth="max-w-sm">
                  <Metric color="gray" truncate={false} marginTop="mt-0">
                    Recommended Additions
                  </Metric>
                  {/* Pass in Chlorine or Bromine from user settings */}
                  <Title color="gray" truncate={false} marginTop="mt-0">
                    Chlorine to add
                  </Title>
                  {/* Pass in chemical for PH from User settings */}
                  <Title color="gray" truncate={false} marginTop="mt-0">
                    Muriatic Acid to add
                  </Title>
                  {/* Pass in chemical for Alkalinity from User settings */}
                  <Title color="gray" truncate={false} marginTop="mt-0">
                    Soda Ash to add
                  </Title>
                  {/* Pass in chemical for Calcium Hardness from User settings */}
                  <Title color="gray" truncate={false} marginTop="mt-0">
                    Add Calcium
                  </Title>
                  {/* Recommend removing water if cyanuric acid is high */}
                  <Title color="gray" truncate={false} marginTop="mt-0">
                    Remove water
                  </Title>
                  {/* Recommend removing water if total dissolved solids is high */}
                  <Title color="gray" truncate={false} marginTop="mt-0">
                    No changes necessary
                  </Title>
                </Card>
              </div>
            );
          case 2:
            return (
              <div className="form-control mt-6">
                <form action="">
                  <label className="input-group input-group-vertical">
                    <span>Bromine</span>
                    <input type="text" className="input input-bordered" />
                  </label>
                </form>
              </div>
            );
          case 3:
            return (
              <div className="form-control mt-6">
                <form action="">
                  <label className="input-group input-group-vertical">
                    <span>Domine</span>
                    <input type="text" className="input input-bordered" />
                  </label>
                </form>
              </div>
            );
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
