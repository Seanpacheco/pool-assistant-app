import * as React from 'react';
import { Text, Block, Flex, Icon, Bold, ListItem } from '@tremor/react';
import { BeakerIcon } from '@heroicons/react/24/solid';

export default function AccountListItem(props: {
  title: string;
  address: string;
  currentDistance: string;
  id: number;
}) {
  return (
    <ListItem>
      <Flex justifyContent="justify-start" spaceX="space-x-4" truncate={true}>
        <Icon variant="light" icon={BeakerIcon} size="md" color="teal" />
        <Block truncate={true}>
          <Text truncate={true}>
            <Bold>{props.title}</Bold>
          </Text>
          <Text truncate={true}>{props.address}</Text>
        </Block>
        <Text>{props.currentDistance}</Text>
      </Flex>
    </ListItem>
  );
}
