import React from 'react';
import {
  Box,
  useMediaQuery,
  Center,
  Flex,
  Button,
  Avatar,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

function CardItem({ avatarSrc, name, timeAmt, timeNotation, content }) {
  const [isMobilePhone] = useMediaQuery('(max-width: 767px)');
  return (
    <Center minH={'100vh'}>
      <Box
        borderRadius={'20px'}
        bg="#272B35"
        w={isMobilePhone ? '370px' : '640px'}
      >
        <Flex
          direction={isMobilePhone ? 'column' : 'row'}
          align={'center'}
          justify={'space-between'}
          p={'4'}
        >
          <Flex direction={isMobilePhone ? 'column' : 'row'} align={'center'}>
            <Button
              m={'2'}
              bg={'#BE4444'}
              color="white"
              colorScheme={'whiteAlpha'}
              borderRadius={'3xl'}
              h={'12'}
            >
              Funding
            </Button>

            <Avatar m={'2'} name={`${name}`} src={`${avatarSrc}`} />
            <Text
              fontSize={'18px'}
              m={'2'}
              color={'white'}
              fontWeight={'semibold'}
            >
              {name}
            </Text>

            <Text fontSize={'12px'} color={'#FFFFFF'} opacity={'0.5'}>
              {timeAmt}
              {timeNotation} ago
            </Text>
          </Flex>
          <Box mx={4}>
            <img src="/icons/dots.png" alt="icon" />
          </Box>
        </Flex>
        <Box color={'white'} fontSize={'18px'} mb={8} mx={5}>
          {content}
        </Box>
        <Box bg={'#5F74951A'} h={'132px'}>
          <Text
            color={'white'}
            fontSize={'16px'}
            fontWeight={'semibold'}
            mx={'5'}
            pt={'4'}
          >
            How can you help with this Request?
          </Text>

          <Stack spacing={4}>
            <InputGroup
              h={'48px'}
              w={isMobilePhone ? '320px' : '592px'}
              mx={'5'}
              my={'5'}
            >
              <Input
                borderRadius={'30px'}
                borderColor={'#00000000'}
                bg={'#5F7495'}
                opacity={0.2}
                color={'white'}
                placeholder={'Type here...'}
                _placeholder={{ color: 'white' }}
              />
              <InputRightElement
                children={<img src="/icons/iconSend.svg" alt="icon-send" />}
              />
            </InputGroup>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default CardItem;
