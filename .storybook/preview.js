import {
  ChakraProvider,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const withChakra = (StoryFn, context) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()
  
  React.useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])


  return (
    <ChakraProvider>
      <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh'}}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
