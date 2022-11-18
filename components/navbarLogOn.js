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
  IconButton,
  ButtonGroup,
  MenuDivider,
  Flex,
  Heading,
  Stack,
  keyframes
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import UseAuth from '../hooks/useAuth'
import Router from "next/router";

export default function navbarLogOff() {
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, signin, signout } = UseAuth();

  async function criarConta() {
    await signin();
    Router.push('/criarConta');
  }

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
            <Heading fontSize='40px' ml='300'>GestON</Heading>
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
              <Avatar
              marginRight={300}
                src={user.photoURL}
              />
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
    </>
  )
}