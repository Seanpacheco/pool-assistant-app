import * as React from 'react';
import { Card, Icon, Title, Flex } from '@tremor/react';

export const WeatherCard = (props: { date: string; icon: React.ElementType }) => {
  return (
    <Card maxWidth="max-w-xs">
      <Title>{props.date}</Title>
      <Icon color="teal" icon={props.icon} />
    </Card>
  );
};
