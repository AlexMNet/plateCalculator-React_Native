import React from 'react';
import {
  Badge,
  Button,
  VStack,
  Center,
  NativeBaseProvider,
  StyleSheet,
} from 'native-base';
export function PlateBadge({ text, number, bg }) {
  return (
    <Center mr='5' mb='2'>
      <VStack>
        <Badge // bg="red.400"
          colorScheme='danger'
          rounded='999px'
          mb={-4}
          mr={-4}
          zIndex={1}
          variant='solid'
          alignSelf='flex-end'
          _text={{
            fontSize: 12,
          }}
        >
          {number}
        </Badge>
        <Button
          mx={{
            base: 'auto',
            md: 0,
          }}
          p='2'
          bg={bg}
          _text={{
            fontSize: 14,
          }}
        >
          {text}
        </Button>
      </VStack>
    </Center>
  );
}
