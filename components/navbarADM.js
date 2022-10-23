import {
  Spacer,
  Center,
  Box,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  WrapItem,
  Avatar,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  ButtonGroup,
  MenuDivider,
  Flex,
  Heading,
  Stack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Router from "next/router";

export default function NavbarADM() {

  const { colorMode, toggleColorMode } = useColorMode();
  function goHome() {
    Router.push('/');
  }

  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading fontSize='40px' ml='100'>GestON</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='2'>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
            <Button colorScheme='orange.400' onClick={() => goHome()} bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}> Home</Button>
          </ButtonGroup>
          <Wrap>
            <WrapItem>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Nome da Pessoa</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => { goHome() }}> Deslogar </MenuItem>
                </MenuList>
              </Menu>
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
    </>
  )
}