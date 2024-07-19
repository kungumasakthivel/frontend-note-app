import {Box, Grid, IconButton, Textarea} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../Redux/notes/note.actions'
import NoteCard from '../components/Notespage/NoteCard';
import { BsPlusLg } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react';
import { Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import { createNotes } from '../Redux/notes/note.actions';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


export default function NotesPage() {
    const {loading, error, data} = useSelector((state)=>state.noteReducer)
    console.log(loading, error, data)
    const [notes, setNotes] = useState()
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    useEffect(() => {
        dispatch(getNotes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setNotes(data);
    }, [data])

    const createNote = () => {
        dispatch(createNotes({title, body}))
        onClose()
    }


    return <Box m={20}>
        <Grid w={'100%'} margin={"auto"} gridTemplateColumns="repeat(4, 1fr)">
            {notes?.map((el) => <NoteCard {...el}/>)}
        </Grid>
        


        <>
        <IconButton position={'fixed'} top={0} left={0} margin={10} icon={<BsPlusLg/>} onClick={onOpen} ></IconButton>

            <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>create new note</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input value={title} placeholder='Title' onChange={(e) => {
                        setTitle(e.target.value);
                    }} ></Input>
                    <Textarea value={body} placeholder='Body' onChange={(e) => {
                        setBody(e.target.value);
                    }} ></Textarea>
                </ModalBody>

                <ModalFooter>
                <Button colorScheme='blue'  mr={3} onClick={createNote}>
                    Create
                </Button>
                <Button onClick={onClose} variant='ghost'>Close</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>





        
    </Box>
}