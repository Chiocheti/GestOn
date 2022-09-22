import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import NavbarLogOnConsumidor from '../components/navbarLogOnConsumidor'
  
  export default function Simple() {
    return (
       <>

      <Container maxW={'7xl'}>
          
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
              <div>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://agristore.com/image/cache/catalog/Di%20Solo/milho-ipanema-20kg-1200x1200.png'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
            </div>
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Milho Ipanema
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                R$99.00 BR
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Saca de grão de Milho
                  Saca de 20k de grão de milho americanos
                </Text>
                <Text fontSize={'lg'}>
                Saca de 20k de grão de milho americanos
                Milho tripla aptidão: grão, silagem e milho verde
                Elevado potencial de produção; Baixo investimento;
                adaptação de plantio na maioria das regiões brasileiras;
                Maior Tolerância às doenças; Dupla aptidão; Grão e Silagem
                Ótimo custo-benefício; Boa janela de corte, permitindo maior tempo para operação de ensilagem; Excelente qualidade de grão; ciclo precoce
                Para maiores dúvidas consulte nossa Equipe Técnica, estamos sempre a disposição.

                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Peso:
                    </Text>{' '}
                    20 K
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Nacionalidade:
                    </Text>{' '}
                    Americana
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Tipo:
                    </Text>{' '}
                    Grão e Silagem
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
              textTransform={'uppercase'}
              >
              Adicionar para Cotar
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
      </> 
    );
  }