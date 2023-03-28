import * as React from 'react';
import { Card, Icon, Title, Flex } from '@tremor/react';

export const WeatherCard = (props: { date: string; icon: React.ElementType }) => {
  return (
    <Card maxWidth="max-w-xs">
      <div className="flex justify-center flex-col text-center">
        <Title>{props.date}</Title>
        <Icon color="teal" icon={props.icon} />
      </div>
    </Card>
  );
};
