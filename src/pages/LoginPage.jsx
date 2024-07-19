import { useState } from 'react'
import {Box, Flex, VStack} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/users/user.actions'
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

export default function LoginPage() {
    const {auth, token, loading, error} = useSelector((state)=> state.userReducer)
    const nav = useNavigate()
    console.log(auth, token)
    if(auth) {
        nav('/notes')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(getUser({email, password}))
    }
    if(loading) return <h1 style={{marginTop:'80px'}}>Loading...</h1>
    if(error) return <h1 style={{marginTop:'80px'}}>Error</h1>
    return <Flex w="100%">
        <VStack w={'100%'}>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={ucmv('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                rounded={'lg'}
                bg={ucmv('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </FormControl>
                    <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Text color={'blue.400'}>Forgot password?</Text>
                    </Stack>
                    <Button
                        onClick={handleLogin}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Sign in
                    </Button>
                    </Stack>
                </Stack>
                </Box>
            </Stack>
            </Flex>
        </VStack>
    </Flex>
}