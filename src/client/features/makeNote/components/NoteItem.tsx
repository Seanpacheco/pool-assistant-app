import * as React from 'react';
import { Text, Block, Flex, Icon, Bold, ListItem } from '@tremor/react';
import { PencilIcon } from '@heroicons/react/24/solid';

export default function NoteItem(props: { title: string; date: string; key: number }) {
  return (
    <ListItem key={props.id}>
      <Flex justifyContent="justify-start" spaceX="space-x-4" truncate={true}>
        <Icon variant="light" icon={PencilIcon} size="md" color="teal" />
        <Block truncate={true}>
          <Text truncate={true}>
            <Bold>{props.title}</Bold>
          </Text>
          <Text truncate={true}>{props.date}</Text>
        </Block>
      </Flex>
    </ListItem>
  );
}
