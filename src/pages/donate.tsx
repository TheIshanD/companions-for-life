
import NextLink from 'next/link'

import Header from "../components/Header"
import Footer from "../components/Footer"

import { 
  Flex, Heading, Link, Spacer, Image, Text, Box, Button, chakra, Divider, RadioGroup, Radio, Tabs, TabList, TabPanels, Tab, TabPanel, Input, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper, Icon, InputGroup, InputLeftElement, InputRightElement, FormControl, Checkbox
 } from "@chakra-ui/react"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import ManAndDogAnimData from "../utils/dog-and-man.json";
import Lottie from "lottie-react";
import React from 'react';

const style = {
  height: 300,
};

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = React.useState(["1.00","1.00","100"]);
  const [currency, setCurrency] = React.useState("USD");
  const [donationPageIndex, setDonationPageIndex] = React.useState(0);
  const [customAmount, setCustomAmount] = React.useState(["0.00","0.00","0"])
  const [smallDonationError, SetSmallDonationError] = React.useState(false);

  const currencies = ["USD", "EUR", "INR"];
  const onCurrencyChange = (index : number)=>{
    setCurrency(currencies[index])
  }

  const OnCustomInputChanged = (event : any) => {

    const word : string = event.target.value;
    const value = (+word).toFixed(2);

    const tmpCustomVals = [...customAmount];
    tmpCustomVals[currencies.indexOf(currency)] = value;
    setCustomAmount(tmpCustomVals);
  }

  const computePaypalFee = (donation : number)=> {
    var percentFee = 0.0289
    var fixedFee = 0;
    //if international:
    if(currency!='USD') {
      percentFee += 0.015;
    }

    if(currency=="USD") {
      fixedFee=0.49;
    } else if (currency=="EUR") {
      fixedFee=0.39;
    }

    const totalFee = donation * percentFee + fixedFee;

    // return totalFee;
    return 0;
  } 

  const currencyInd = ()=>{return currencies.indexOf(currency)}
  const donationCode = ()=>{return donationAmount[currencyInd()]}
  const donationValue = ()=>{return donationCode()=="custom"?+customAmount[0]:+donationCode()}
  const currencySymbol = ()=>{return ["$","€","₹"][currencyInd()]}
  const totalPaymentVal = ()=>{return (computePaypalFee(donationValue()) + donationValue()).toFixed(2).toString()}

  const OnNextClicked = ()=> {
    const currVal = donationValue();

    if(currency=="USD" || currency=="EUR") {
      if(currVal < 1) {
        SetSmallDonationError(true);
      } else {
        setDonationPageIndex(donationPageIndex+1)
        SetSmallDonationError(false);
      }
    } else if (currency=="INR"){
      if(currVal < 100) {
        SetSmallDonationError(true);
      } else {
        setDonationPageIndex(donationPageIndex+1)
        SetSmallDonationError(false);
      }
    }
  }

  const onRadioChange = (val : string)=>{
    const tmpDonoAmt = [...donationAmount];
    tmpDonoAmt[currencyInd()] = val;
    setDonationAmount(tmpDonoAmt);
  }

  return (
    <Flex direction="column" bg="red.100" minH="100vh">
        <Header isOnDonate={true}/>

        <Flex direction="row" justify="center" color="blue.600"
          background="brand.300"
          backgroundSize="30px 30px"
          p="10"
          
        >
          <Flex direction="column" width="70vw" bg="brand.100" p="10" borderRadius="25px" border="4px solid" borderColor="black" borderRightRadius="0px" borderRight="none">
            <Heading size="xl" mb="2">Where Does Your Money Go?</Heading>

            <Text fontSize="2xl" mb="16">We bring <chakra.span color="pink.600" fontWeight="extrabold">shelter animals</chakra.span>, fated to be <chakra.span color="black" fontWeight="extrabold">euthanized</chakra.span>, to prisons, to be cared for by <chakra.span color="green.600" fontWeight="extrabold">approved prisoners</chakra.span></Text>
          </Flex>

          <Flex direction="column" width="30vw" bg="brand.500" p="10" borderRightRadius="25px"  border="4px solid" borderColor="black" borderLeftWidth="4px" borderLeftColor="black" align="center" justify="center">
            <Lottie animationData={ManAndDogAnimData} loop={true} style={style} />
          </Flex>
        </Flex>


        <svg id="visual" viewBox="0 0 3200 225" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="100%" height="100vh" fill="#F5EBE0"></rect><path d="M0 66L26.7 66.2C53.3 66.3 106.7 66.7 160 84.2C213.3 101.7 266.7 136.3 320 150.7C373.3 165 426.7 159 480 157.7C533.3 156.3 586.7 159.7 640 149.2C693.3 138.7 746.7 114.3 800 112.5C853.3 110.7 906.7 131.3 960 145.5C1013.3 159.7 1066.7 167.3 1120 159.7C1173.3 152 1226.7 129 1280 125C1333.3 121 1386.7 136 1440 127.5C1493.3 119 1546.7 87 1600 87.5C1653.3 88 1706.7 121 1760 137.8C1813.3 154.7 1866.7 155.3 1920 160.2C1973.3 165 2026.7 174 2080 164.3C2133.3 154.7 2186.7 126.3 2240 120.7C2293.3 115 2346.7 132 2400 124.8C2453.3 117.7 2506.7 86.3 2560 74.3C2613.3 62.3 2666.7 69.7 2720 78.2C2773.3 86.7 2826.7 96.3 2880 95.7C2933.3 95 2986.7 84 3040 75.2C3093.3 66.3 3146.7 59.7 3173.3 56.3L3200 53L3200 226L3173.3 226C3146.7 226 3093.3 226 3040 226C2986.7 226 2933.3 226 2880 226C2826.7 226 2773.3 226 2720 226C2666.7 226 2613.3 226 2560 226C2506.7 226 2453.3 226 2400 226C2346.7 226 2293.3 226 2240 226C2186.7 226 2133.3 226 2080 226C2026.7 226 1973.3 226 1920 226C1866.7 226 1813.3 226 1760 226C1706.7 226 1653.3 226 1600 226C1546.7 226 1493.3 226 1440 226C1386.7 226 1333.3 226 1280 226C1226.7 226 1173.3 226 1120 226C1066.7 226 1013.3 226 960 226C906.7 226 853.3 226 800 226C746.7 226 693.3 226 640 226C586.7 226 533.3 226 480 226C426.7 226 373.3 226 320 226C266.7 226 213.3 226 160 226C106.7 226 53.3 226 26.7 226L0 226Z" fill="#E3D5CA" stroke-linecap="round" stroke-linejoin="miter"></path></svg>

        <Flex 
        direction="column" 
        background="brand.400"
        backgroundSize="30px 30px"
        align="center" 
        p="5">
          <Flex 
          direction="column" 
          bg="white" 
          minW="50vw" 
          p="10"
          borderRadius="25px"
          minH="65vh"
          border="4px solid" borderColor="black"
          >
            <Heading color="red.600">Donation Form</Heading>
            {/* <Text color="red.600" fontSize="xs">If donation options fail to load, try reloading the page</Text> */}
            <Divider mb="5"/>
            <Flex direction="column" mb="5" hidden={donationPageIndex!=0}>
              <Box>
                <Tabs variant='enclosed' onChange={onCurrencyChange}>
                  <TabList>
                    <Tab>USD $</Tab>
                    <Tab>EUR €</Tab>
                    {/* <Tab>INR ₹</Tab> */}
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={(val)=>{onRadioChange(val)}} value={donationAmount[currencyInd()]}>
                        <Flex direction="column">
                          <Radio value="1.00">$1.00</Radio>
                          <Radio value="10.00">$10.00</Radio>
                          <Radio value="100.00">$100.00</Radio>
                          <Radio value="custom">Use Custom Donation:</Radio>

                          <InputGroup ml="5">
                          <InputLeftElement pointerEvents='none'>
                            <Icon color='gray.300' />
                          </InputLeftElement>

                            <Input
                              onChange={(event)=>{OnCustomInputChanged(event)}}
                              isDisabled={(donationCode() != "custom")}
                              defaultValue="0.00"
                              placeholder="Enter Donation Amount in US Dollars"
                              size="md"
                              type="number"  
                            />

                            <InputRightElement>
                              <Icon color='green.500' />
                            </InputRightElement>
                          </InputGroup>
                          {smallDonationError && <Text ml="5" fontSize="sm" color="red.600">Donation must be at least {currencySymbol()}1.00</Text>}
                        </Flex>

                      </RadioGroup>

                    </TabPanel>
                    {/* TODO: WORK ON THIS */}
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={(val)=>{onRadioChange(val)}} value={donationAmount[currencyInd()]}>
                        <Flex direction='column'>
                          <Radio value="1.00">€1.00</Radio>
                          <Radio value="10.00">€10.00</Radio>
                          <Radio value="100.00">€100.00</Radio>
                          <Radio value="custom">Use Custom Donation:</Radio>

                          <InputGroup ml="5">
                          <InputLeftElement pointerEvents='none'>
                            <Icon color='gray.300' />
                          </InputLeftElement>

                            <Input
                              onChange={(event)=>{OnCustomInputChanged(event)}}
                              isDisabled={(donationCode() != "custom")}
                              defaultValue="0.00"
                              placeholder="Enter Donation Amount in Euros"
                              size="md"
                              type="number"  
                            />

                            <InputRightElement>
                              <Icon color='green.500' />
                            </InputRightElement>
                          </InputGroup>
                          {smallDonationError && <Text ml="5" fontSize="sm" color="red.600">Donation must be at least {currencySymbol()}1.00</Text>}

                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                    <TabPanel>
                      <Heading color="blue.600" size="md">Donation Amount: </Heading>
                      <RadioGroup onChange={(val)=>{onRadioChange(val)}} value={donationAmount[currencyInd()]}>
                        <Flex direction='column'>
                          <Radio value="100">₹100</Radio>
                          <Radio value="1000">₹1000</Radio>
                          <Radio value="10000">₹10000</Radio>
                          <Radio value="custom">Use Custom Donation:</Radio>

                          <InputGroup ml="5">
                          <InputLeftElement pointerEvents='none'>
                            <Icon color='gray.300' />
                          </InputLeftElement>

                            <Input
                              onChange={(event)=>{OnCustomInputChanged(event)}}
                              isDisabled={(donationCode() != "custom")}
                              defaultValue="0.00"
                              placeholder="Enter Donation Amount in Indian Rupees"
                              size="md"
                              type="number"  
                            />

                            <InputRightElement>
                              <Icon color='green.500' />
                            </InputRightElement>
                          </InputGroup>
                          {smallDonationError && <Text ml="5" fontSize="sm" color="red.600">Donation must be at least {currencySymbol()}100</Text>}

                        </Flex>
                      </RadioGroup>
                    </TabPanel>
                  </TabPanels>
                </Tabs>

                <Checkbox defaultChecked>Cover Paypal's Donation Fee of ~{Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(computePaypalFee(donationValue()))} with
                       your {Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(donationValue())} donation</Checkbox>
              </Box>
            </Flex>

            <Flex direction="column" hidden={donationPageIndex!=1}>
              <Heading size="4xl" color="green" mb="5">{Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(+totalPaymentVal())}</Heading>
              <Heading size="lg">Pay Now</Heading>

              <PayPalScriptProvider options={{ clientId:"test", currency: currency }}>
                <PayPalButtons 
                  // TODO: try adding label: 'donate' to style later
                  style={{layout: "horizontal"}} 
                  createOrder={(data, actions)=>{
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: totalPaymentVal(),
                          }
                        }
                      ]
                    })
                  }}

                  onApprove={(data, actions)=>{
                    return actions.order?.capture().then(function (details){
                      alert(
                        "Transaction completed by " + details.payer.name?.given_name)
                    })!
                  }}
                />
              </PayPalScriptProvider>
            </Flex>

            <Spacer></Spacer>
            <Flex direction="row" gap="10"  mt="5">
              <Box width="50%" hidden={donationPageIndex!=0}/>
              <Button width="50%" colorScheme='yellow' hidden={donationPageIndex==0} onClick={()=>{setDonationPageIndex(donationPageIndex-1)}}>
                Back
              </Button>
              <Button width="50%" colorScheme='yellow' hidden={donationPageIndex==1} onClick={OnNextClicked}>
                Next
              </Button>
              <Box width="50%" hidden={donationPageIndex!=1}/>
            </Flex>
          </Flex>
        </Flex>
        <Footer/>
    </Flex>
  )
}
