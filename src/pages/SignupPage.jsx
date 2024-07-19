import { useState } from 'react'
import {Box, Flex, VStack} from '@chakra-ui/react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getUser } from '../Redux/users/user.actions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue as ucmv,
  } from '@chakra-ui/react'
import { BASE_URL } from '../components/constants/config'

export default function SignupPage() {

    const nav = useNavigate()
    // console.log(auth, token)
    // if(auth) {
    //     nav('notes')
    // }
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async() => {
        let data = await axios.post(BASE_URL+'/user/register', {
            name, email, password
        })
        let {message, status} = data.data 
        if(status === 1) {
            alert(message)
            nav('/login') 
        } else {
            alert(message)
        }
    }
    
    return <Flex w="100%">
        <VStack w={'100%'}>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={ucmv('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign Up into Note's App</Heading>
                </Stack>
                <Box
                rounded={'lg'}
                bg={ucmv('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    </FormControl>
                    <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </FormControl>
                    <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                    <Button
                        onClick={handleSignup}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Sign Up
                    </Button>
                    </Stack>
                </Stack>
                </Box>
            </Stack>
            </Flex>
        </VStack>
    </Flex>
}