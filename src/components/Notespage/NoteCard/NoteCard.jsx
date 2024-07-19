import {Text, Button, Card, CardBody, Flex, Heading, VStack} from '@chakra-ui/react';

export default function NoteCard({title, body, user, _id}) {
    return <Card mt={5} maxW={300}>
        <CardBody>
            <VStack>
                <Heading>{title}</Heading>
                <Text>{body}</Text>

                <Flex gap={10}>
                    <Button>Update</Button>
                    <Button>Delete</Button>
                </Flex>
            </VStack>
        </CardBody>
    </Card>
}