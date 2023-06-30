
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Icon
 } from "@chakra-ui/react"

export default function AboutPage() {
  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnAbout={true}/>

        <Flex direction="column" bg="white">
          <Flex direction="column" gap="5" bg="lightblue" p="10">

            <Flex direction="row" align="end" gap="5">
              <Heading size="3xl">Partners</Heading>
              <Link as={NextLink} href='/contact'>
                <Button colorScheme='teal'>
                  Partner With Us!
                </Button>
              </Link>
            </Flex>

            <SimpleGrid minChildWidth='250px' spacing='40px'>

              <Card maxW='sm' bg="white">
                <CardBody>
                    <Image
                      src='data:image/jpeg;base64,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'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                  <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md'>Paws In Prison</Heading>
                    <Text>
                      We are thankful of the valuable advice of Mrs. Keaton whose guidance taught us the first steps we needed to take (link website)
                    </Text>
                    <Flex direction="row" gap="5">
                      <Icon />
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>

              <Card maxW='xs' bg="white">
                <CardBody>
                    <Image 
                      src="https://www.baylor.edu/content/imglib/2/8/6/4/286447.jpg"
                      alt='image goes here'
                      borderRadius='lg'
                    />
                  <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md'>Baylor Police Deparment</Heading>
                    <Text>
                      for now just say we are thankful of the support of the sheriff
                    </Text>
                    <Flex direction="row" gap="5">
                      <Icon />
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>

              <Card maxW='xs' bg="white">
                <CardBody>
                    <Image 
                      src="data:image/jpeg;base64,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8ZOzroDUZ10yACjd93zNa3iSYgua0Mq0UFMTiCRx7XsClV77NWa1SutNmtsDWSHG9rzQtcc3HWoqTWhApUrStFrsdigkhs7m2qaVuCSUtBiazgwGodnnvzzJyAVPCPww2TSYXVbbRIO0CbOLnOEAZ2mNGhTVRUvtGG/LhAGfqSvxsPfzYybJaBis83ZIOjHOy8Gu0PA58V7XhtBBZGOs12ilcpLSc3u5MPD+bTgM8ShtFsWSzOleGMFSfmuSu1MBQdUNV+Rglvukj3iNTGmRzIJUdOpUIFNgk5CM76D14BdPZS4n220tiaKgu7ZPmS4jxJPCu9fTVz3eyzwsiZo0UrvJ+848yalR3o72SbYLOC4fWvHa4ga4e/efAbgpkti4vdtnu5f39BopKpaxvUtMxckan6C4G+7rbSIiIq6IiIiIiIiIiIiIiIiIiIiIiIiLSvGwsnjMcgxNdqPcQdxBzBW6iZ2KyCWkEGCF839IGw8likL2AuicSQQNOHdTePEZaQpfXNvsUczHRyNDmnUH3g7iOIVF9IHR1JZnGWAF8RPlydwPPQ8jktqdXYs/Lfu5/Xx3qw5gxF2CH6j73FvHe3XNv3VXaws6arCtqkpBs/tVJZInRNiie15xOxhxJNAKHtUpQDKi3DtdA7+Jddld3AD/AMZUTRU6nR+Ge8vc25zMuE+BCmbXqNEA25D6LqMvbBbPpUUbW0e57GH0Wg1DWnDTIA7qLXvW8HWiZ0zw0PfQuwggVAArQk0yAWminbRptcHAXA2Z1jd61uoy4kRxnvSiIvWCFz3BrRVx+a9ylJgXWGtJMNEk/NYijLiGtFSdFevRdsK2zNFpmb9YaFoI8nkbjwG7U56ePRr0etga20WluKTItaRpvBIOnEN8TuAtFUnv6w8PPjy3A81cMUAWgy82J3A5tB3n3nflBiS7KIiKsiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi85Yw4EOAIORBzBHAheiIiqzbjovbNWay5PzJb78I+8P5T4HcqZvG7ZbO8smYWkGmYIqd4z0PI5r65XD2g2as9saRMzOlA8ekOFdzhyNVhjnU/Zy3fQ6cslZNVlX7bP7wz/ADD3uch28uAAXysisbazortEFXwfWR60aDUDmMyPaOYVfTwujNHgtPP4HerTKrX2Ge7X++6QoauHfTG0bt3i4/o8HAHgvJEJUs2S2FtNtcCGljARiJyHid3dryGqy97WC/8A36/7ha0qL6hIbpmTYDiTp5nIAlR+67sltEgjiaXOJpkCczuy1PJXxsD0ex2QCWYB02RGhAO4ncXewczmu/svsrZ7CwCNtXUzeRnzw/hHtO8lSJVXOdUu7Ld9d/lrmrBqMpAto97sieAHujf7x1gdlEREVZERERERERERERERERERERERERERERERERERERERERERERFHL+2QslraetiAccy5tASdakUo7vIqpGiwWg5renVfTO0wweCrW5eiazQzGSR2MA1Y0AjzqTTwz57lYdms7I2BjGhrW5BrQAAOQC90QNi/9lbVKz6gAOQyAAAHGBAniiIiyokRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//9k="
                      alt='image goes here'
                      borderRadius='lg'
                    />
                  <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md'>Waco Police Deparment</Heading>
                    <Text>
                      for now just say we are thankful of the support of the sheriff
                    </Text>
                    <Flex direction="row" gap="5">
                      <Icon />
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>

              <Card maxW='xs' bg="white">
                <CardBody>
                    <Image 
                      src="https://static.wixstatic.com/media/6cd9a7_5796fb5453d04c66a907e927e2b9d3a5~mv2.png/v1/crop/x_0,y_165,w_1786,h_1123/fill/w_420,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/hsctx%20pride_edited.png"
                      alt='image goes here'
                      borderRadius='lg'
                    />
                  <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md'>Humane Society Central Texas</Heading>
                    <Text>
                      we are thankful for the encouragement and willingness to supply shelter animals for us to connect with prisoners
                    </Text>
                    <Flex direction="row" gap="5">
                      <Icon />
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>

            </SimpleGrid>
          </Flex>

          <Flex direction="column" gap="5" p="10" bg="lightgreen">

            <Flex direction="row" align="end" gap="5">
              <Heading size="3xl">Team</Heading>
              <Link as={NextLink} href='/contact'>
                <Button colorScheme='red'>
                  Join Our Team!
                </Button>
              </Link>
            </Flex>
            
            
            <SimpleGrid minChildWidth='400px' spacing='40px'>

              <Card maxW="sm" bg="white">
                <CardBody>
                  <Image
                    src='https://media.licdn.com/dms/image/D5603AQFciK0GmJ1UqQ/profile-displayphoto-shrink_800_800/0/1683444317928?e=2147483647&v=beta&t=Gg6CQo_SwDHIg2z60BiVQHGMzrg_-uTKoXNZdVLBxys'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md'>Warren Huang</Heading>
                    <Text>
                      I love giving prisoners pets!
                    </Text>
                    <Flex direction="row" gap="5">
                      <Icon />
                      <Icon />
                      <Icon />
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>

              <Card maxW='sm' bg="white">
                <CardBody>
                  <Image
                    src='https://media.licdn.com/dms/image/D5603AQHSh6HNmssAgA/profile-displayphoto-shrink_800_800/0/1686180407902?e=2147483647&v=beta&t=qVmSNaHshXEI6-nrz18BC6Cwff74Gke57t7pBfPYY9k'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Flex direction="column" mt='6' gap='3'>
                    <Heading size='md'>Ishan Dasgupta</Heading>
                    <Text>
                      I love programming!
                    </Text>
                    <Flex direction="row" gap="5">
                      <Icon />
                      <Icon />
                      <Icon />
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>

            </SimpleGrid>
          </Flex>
        </Flex>

        <Footer/>
    </Flex>
  )
}
