import { Button } from '@chakra-ui/button'
import { Code, Flex, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Logo } from '@/styles/theme'

export default function Home() {
  const auth = useAuth()

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Logo boxSize="32px" />

      <Text>
        Current user : <Code>{auth.user ? auth.user.email : "Unauthenticated"}</Code>
      </Text>
      {
        !auth?.user &&
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      }
      {
        auth?.user &&
        <Button variant="outline" mt={4} onClick={(e) => auth.signout()}>Sign Out</Button>
      }
    </Flex>

  )
}
