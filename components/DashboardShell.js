import React from 'react'
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'
import { Logo } from '@/styles/theme'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({children}) => {
    const auth = useAuth()

    return <Flex flexDirection="column">
      <Flex
        flexDirection="row"
        backgroundColor="white"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems="center">
            <Logo boxSize="32px" />
            <Link>Sites</Link>
            <Link>Feedback</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl}/>
        </Flex>
      </Flex>
      <Flex
        backgroundColor="gray.100"
        p={8}
        h="100vh"
      >
        <Flex
          flexDirection="column"
          w="100%"
          maxWidth="800px"
          ml="auto"
          mr="auto"
        >
            <Breadcrumb>
                <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink color="gray.700" fontSize="sm">Sites </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Heading color="black" mb={4}>My Sites</Heading>
            {children}
        </Flex>
      </Flex>
    </Flex>
}

export default DashboardShell