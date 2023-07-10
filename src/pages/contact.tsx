
import NextLink from 'next/link'


import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, Input, FormControl, FormLabel, FormHelperText, Textarea, FormErrorMessage, RadioGroup, Radio, useColorModeValue,
 } from "@chakra-ui/react"
import React, { useEffect } from 'react'

import { FaEnvelope, FaPhone } from "react-icons/fa";

const email = "yourdomain@gmail.com";

const partnerSubject = `Potential Partnership Between [ORGANIZATION] and Companions For Life`;
const partnerBody = `Dear Companions For Life Team,

Hello! I am [NAME] from [ORGANIZATION]. We would love to partner and work with Companions For Life to further progress toward our mutual goals. 

In particular, we were thinking that we could work with Companions For Life by [SPECIFIC_PARTNERSHIP_GOAL].

If you have any questions, you can reach us at [PREFERRED_CONTACT]. Thank you!

Sincerely,
[NAME]
[ORGANIZATION]
[PREFERRED_CONTACT]`;

const teamSubject = "Request To Join Partners For Life Team";
const teamBody = `Dear Companions For Life Team,

Hello! I am [NAME]. I am interested in joining the Companions For Life team.

I am passionate and ready to help animals find safe homes while simultaneously providing better conditions and outcomes for prisoners. I am also ready to explore new avenues of aid.

[OPTIONAL_EXTRA_INFO_ABOUT_YOU]

If you have any questions, you can reach me at [PREFERRED_CONTACT]. Thank you!

Sincerely,
[NAME]
[PREFERRED_CONTACT]`;


const otherSubject = "";
const otherBody = 
`Dear Companions For Life Team,

Hello! I am [NAME]. I am emailing to discuss [REASON].

[EMAIL_CONTENT]

If you have any questions, you can reach me at [PREFERRED_CONTACT]. Thank you!

Sincerely,
[NAME]
[PREFERRED_CONTACT]`;


export default function ContactPage() {
  const [subjectLineValue, setSubjectLineValue] = React.useState("");
  const [bodyValue, setBodyValue] = React.useState("");

  const [reason, setReason] = React.useState("partner");

  useEffect(()=>{
    if(reason == "other") {
      setSubjectLineValue(otherSubject)
      setBodyValue(otherBody)
    } else if(reason=="partner") {
      setSubjectLineValue(partnerSubject)
      setBodyValue(partnerBody)
    } else if(reason=="team") {
      setSubjectLineValue(teamSubject)
      setBodyValue(teamBody)
    }
  },[reason])

  const onButtonClick = ()=>{
    const subject = encodeURIComponent(subjectLineValue);
    const body = encodeURIComponent(bodyValue);
    window.location.href = 'mailto:'+email+'?subject=' + subject + "&body=" + body;
  }

  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnContact={true}/>

        <Flex direction="column" bg="brand.400" p={["20px","20px","40px"]}>
          <Flex direction="column" border="4px solid" borderColor="black" borderRadius={["0px","0px","25px"]}>
            <Flex id="contact-info-box" direction="column" bg="brand.100" p="20px" borderTopRadius={["0px","0px","25px"]} borderBottom="2px solid black" >
              <Heading mb="10px" size="2xl" fontWeight="900">Contact Information</Heading>
              <Flex direction="row" gap="10px" align="center">
                <FaEnvelope />
                <Text fontSize="2xl">{email}</Text>
              </Flex>
              <Flex direction="row" gap="10px" align="center">
                <FaPhone />
                <Text fontSize="2xl">1-512-555-555</Text>
              </Flex>
            </Flex>

            <Flex direction="column" bg="brand.100" p="5" borderBottomRadius={["0px","0px","25px"]} borderTop="2px solid black" gap="5">
              <Heading fontWeight="900" size="2xl">Email Template Generator</Heading>

              <FormControl>
                <FormLabel fontWeight="900">Reason For Email</FormLabel>
                <RadioGroup onChange={setReason} value={reason}>
                  <Flex direction={["column","column","row"]} gap={["10px","10px","40px"]}>
                    <Radio value='partner' bgColor="white" border="4px solid" borderColor="black" _checked={{border: "4px solid", borderColor:"blue.600"}}>Partnership</Radio>
                    <Radio value='team' bgColor="white" border="4px solid" borderColor="black" _checked={{border: "4px solid", borderColor:"blue.600"}}>Joining the Team</Radio>
                    <Radio value='other' bgColor="white" border="4px solid" borderColor="black" _checked={{border: "4px solid", borderColor:"blue.600"}}>Other Inquiries</Radio>
                  </Flex>
                </RadioGroup>
                <FormHelperText>*Changing your selection will reset the subject and body text</FormHelperText>
              </FormControl>


              <FormControl>
                <FormLabel fontWeight="900">Subject Line</FormLabel>
                <Input placeholder="Sample Subject Line" value={subjectLineValue} onChange={(e)=>{setSubjectLineValue(e.target.value)}} bgColor="white" border="4px solid" borderColor="black"/>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="900">Body</FormLabel>
                <Textarea minH={["600px","500px","400px"]} placeholder='Sample Email Body' resize="vertical" value={bodyValue} onChange={(e)=>{setBodyValue(e.target.value)}} bgColor="white" border="4px solid" borderColor="black"/>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>

              <FormControl>
                <Button colorScheme='yellow' onClick={()=>{onButtonClick()}} border="4px solid" borderColor="black" fontWeight="900">Open in Email</Button>
                <FormHelperText>Either copy and paste email or open in your computer&apos;s default email</FormHelperText>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
        <Footer/>
    </Flex>
  )
}
