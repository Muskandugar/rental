import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Checkbox,
  Select,
} from '@chakra-ui/react';

const Address = () => {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zipCode: '',
    state: '',
    phoneNumber: '',
    agreeToTerms: false // New state for terms checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!address.street || !address.city || !address.zipCode || !address.state || !address.phoneNumber || !address.agreeToTerms) {
      // Show error message or handle invalid form submission
      console.log('Please fill out all fields and agree to terms');
      return;

    }
    // Handle form submission here
    console.log(address);
    // Reset form fields after submission
    setAddress({
      street: '',
      city: '',
      zipCode: '',
      state: '',
      phoneNumber: '',
      agreeToTerms: false
    });
  };
const getdata = async (e) =>{
  e.preventDefault();
  const options ={
    method:'POST',
    headers:
    {
      'Content-Type':'address/json'
    },
    body:JSON.stringify({
      address
    })
  }
  const res = await fetch("https://address-e66e2-default-rtdb.firebaseio.com/address.json",options).then((response)=> response.json())
}
console.log(address)
if(address){
 alert('Message Sent')
}
else{
  alert('Error Occured')
}
  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Heading size="lg" mb={4}>Enter Delivery Address..</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Street Address:</FormLabel>
          <Input
            type="text"
            name="street"
            placeholder="Enter street address"
            value={address.street}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>City:</FormLabel>
          <Input
            type="text"
            name="city"
            placeholder="Enter city"
            value={address.city}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Zip Code:</FormLabel>
          <Input
            type="text"
            name="zipCode"
            placeholder="Enter zip code"
            value={address.zipCode}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>State:</FormLabel>
          <Select
            name="state"
            placeholder="Select state"
            value={address.state}
            onChange={handleChange}
            required
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Mysore">Mysore</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Gandhi Nagar">Gandhi Nagar</option>
            <option value="Kolkata">Kolkata</option>
            {/* Add more states as needed */}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Phone Number:</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={address.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Checkbox
          name="agreeToTerms"
          isChecked={address.agreeToTerms}
          onChange={handleChange}
          mb={4}
        >
          I agree to the terms and conditions
        </Checkbox>


        <br></br>
        <Button onClick={ getdata}colorScheme="teal" type="submit">Confirm Order</Button>
      </form>
    </Box>
  );
};

export default Address;
