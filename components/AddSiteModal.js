import { useRef } from 'react'
import { useForm } from "react-hook-form"

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
import { createSite } from '@/lib/db'

const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef()

    const { register, handleSubmit } = useForm()
    const onCreateSite = (data) => createSite(data)

  
    return (
      <>
        <Button fontWeight="medium" maxWidth="fit-content" onClick={onOpen}>
            Add Your First Site
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
            <ModalHeader fontWeight="bold">Add site</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        ref={initialRef}
                        placeholder="My site"
                        {...register("site")}
                        />
                </FormControl>
    
                <FormControl mt={4}>
                    <FormLabel>Link</FormLabel>
                    <Input
                        placeholder="https://website.com"
                        {...register("url")}
                        />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button onClick={onClose} mr={3} fontWeight="medium">Cancel</Button>
                <Button type="submit" backgroundColor="#99FFFE" color="#194D4C" fontWeight="medium">
                    Create
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AddSiteModal