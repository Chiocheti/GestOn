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
    Stack
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { MdBuild } from "react-icons/md"
  import UseAuth from '../hooks/useAuth'
  import Router from "next/router";
  
  export default function navbarLogOnFornecedor() {
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
  
    const { user, signin, signout } = UseAuth();
   
    function goHome() {
      Router.push('/');
    }
    function goEditProduct() {
      Router.push('/listMyProducts');
    }

    function goMyPerfil() {
      Router.push('/authFornecedor');
    }
    function goSuggest() {
      Router.push('/listProducts');
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
                <Menu>
                <MenuButton
                  leftIcon={<MdBuild />}
                  rightIcon={<MdBuild />}
                  marginRight={300}
                  as={Button}
                  rounded={'full'}
                  cursor={'pointer'}
                  colorScheme='pink'
                  variant='solid'
                  width={220}
                  minW={0}>
                  Settings
                </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={user.photoURL}
                      />
                    </Center>
                    <MenuDivider />
                    <MenuItem onClick={() => { goMyPerfil() }} >Abrir meu Perfil</MenuItem>
                    <MenuItem onClick={() => { goEditProduct() }} >Meus Produtos</MenuItem>
                    <MenuItem onClick={() => { goSuggest() }} >Cadastro de Produto</MenuItem>
                    <MenuItem onClick={() => { goHome() }} > Deslogar </MenuItem>
                  </MenuList>
                </Menu>
              </WrapItem>
            </Wrap>
          </Flex>
        </Box>
      </>
    )
  }