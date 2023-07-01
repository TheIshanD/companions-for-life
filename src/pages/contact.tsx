
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, Input, FormControl, FormLabel, FormHelperText, Textarea, FormErrorMessage, RadioGroup, Radio
 } from "@chakra-ui/react"
import React, { useEffect } from 'react'

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

Hello! I am [NAME]. I am interested in joining Companions For Life's team.

I am passionate and ready to help animals find safe homes while simultaneously providing better conditions and outcomes for prisoners. I am also ready to explore new avenues of aid.

[OPTIONAL_EXTRA_INFO_ABOUT_YOU]

If you have any questions, you can reach me at [PREFERRED_CONTACT]. Thank you!

Sincerely,
[NAME]
[PREFERRED_CONTACT]`;


const otherSubject = "[Insert Subject Here]";
const otherBody = 
``;


export default function ContactPage() {
  const [subjectLineValue, setSubjectLineValue] = React.useState("");
  const [bodyValue, setBodyValue] = React.useState("");

  const [reason, setReason] = React.useState("other");

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
      <chakra.script src="https://smtpjs.com/v3/smtp.js"></chakra.script>
        <Header isOnContact={true}/>

        <Flex direction="column" bg="lightgreen">
          <Flex id="contact-info-box" direction="column" m="20" mb="0" bg="whitesmoke" p="5" borderTopRadius="25px" borderBottom="2px solid black">
            <Heading>Contact Information</Heading>
            <Text>{email}</Text>
            <Text>1-512-555-555</Text>
          </Flex>
          <Flex direction="column" m="20" mt="0" bg="whitesmoke" p="5" borderBottomRadius="25px" borderTop="2px solid black" gap="5">
              <Heading>Email Template Generator</Heading>

              <FormControl>
                <FormLabel>Reason For Email</FormLabel>
                <RadioGroup onChange={setReason} value={reason}>
                  <Flex direction='row' gap="10">
                    <Radio value='partner'>Partnership</Radio>
                    <Radio value='team'>Joining the Team</Radio>
                    <Radio value='other'>Other</Radio>
                  </Flex>
                </RadioGroup>
                <FormHelperText>*Changing your selection will reset the subject and body text</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Subject Line</FormLabel>
                <Input placeholder="Sample Subject Line" value={subjectLineValue} onChange={(e)=>{setSubjectLineValue(e.target.value)}}/>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
              <FormControl>
                <FormLabel>Body</FormLabel>
                <Textarea minH="400px" placeholder='Sample Email Body' resize="vertical" value={bodyValue} onChange={(e)=>{setBodyValue(e.target.value)}}/>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>

              <FormControl>
                <Button colorScheme='yellow' onClick={()=>{onButtonClick()}}>Open in email</Button>
                <FormHelperText>Either copy and paste email or open in your computer's default email</FormHelperText>
              </FormControl>
          </Flex>
        </Flex>
        <Footer/>
    </Flex>
  )
}
