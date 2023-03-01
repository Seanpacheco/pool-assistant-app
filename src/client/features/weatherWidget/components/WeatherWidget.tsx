import * as React from 'react';
import { Block } from '@tremor/react';
import { WeatherCard } from './WeatherCard';
import { Sunny, StrongRain, Cloudy, XmarkCircle } from '@vectopus/atlas-icons-react';

const testData = [
  {
    date: '12/25',
    weatherCondition: 'Sunny',
    id: 1,
  },
  {
    date: '12/26',
    weatherCondition: 'Cloudy',
    id: 2,
  },
  {
    date: '12/27',
    weatherCondition: 'Rainy',
    id: 3,
  },
  {
    date: '12/28',
    weatherCondition: 'Cloudy',
    id: 4,
  },
  {
    date: '12/29',
    weatherCondition: 'Sunny',
    id: 5,
  },
  {
    date: '12/30',
    weatherCondition: 'Rainy',
    id: 6,
  },
  {
    date: '12/31',
    weatherCondition: 'Rainy',
    id: 7,
  },
];

export const WeatherWidget = () => {
  return (
    <Block marginTop="mt-2">
      <div className="flex gap-2 flex-col lg:flex-row">
        {testData.map((item) => {
          return (
            <WeatherCard
              key={item.id}
              date={item.date}
              icon={(() => {
                switch (item.weatherCondition) {
                  case 'Sunny':
                    return Sunny;
                  case 'Cloudy':
                    return Cloudy;
                  case 'Rainy':
                    return StrongRain;
                  default:
                    return XmarkCircle;
                }
              })()}
            />
          );
        })}
      </div>
    </Block>
  );
};
