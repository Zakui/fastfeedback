import React from 'react'
import {
  Heading,
  Text,
  Button,
  Flex
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
    <DashboardShell>
        <Flex
            width="100%"
            backgroundColor="white"
            borderRadius="8px"
            justifyContent="center"
            alignItems="center"
            direction="column"
            p={16}
        >
            <Heading size="lg" mb={2}>You haven't added any state</Heading>
            <Text mb={6}>Welcome 👋 Let's get started.</Text>
            <AddSiteModal />
        </Flex>
    </DashboardShell>
)

export default EmptyState