import React from 'react'
import { useState,useEffect } from 'react'
//MUI
import { Box, Typography, styled } from '@mui/material'

//CSS
const Heading = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`
const HeadingText = styled(Typography)`
  color: #878787;
`
const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  &>p{
    margin-bottom: 20px;
    font-size: 14px;
  },
  &>h6{
    margin-bottom: 20px;
  }
`
const Price = styled(Box)`
  float: right;
`
const Discount= styled(Typography)`
  color: green;
  font-weight: 500;
`
export default function TotalView({ cartItems }) {

  const[price,setPrice] = useState(0);
  const[discount,setDiscount] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[cartItems]);

  const totalAmount = ()=>{
    let price = 0, discount = 0;
    cartItems.map(item=>{
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost);
  });
  setPrice(price);
  setDiscount(discount);
  }
  return (
    <Box>
      <Heading>
        <HeadingText>
          PRICE DETAILS
        </HeadingText>
      </Heading>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component='span'>
            ₹{price}
          </Price></Typography>
        <Typography>Discount
          <Price component='span'>
            -₹{discount}
          </Price></Typography>
        <Typography>Delievery Charges
          <Price component='span'>
            {price>500 ? <strike>₹40</strike> : '₹40' }
          </Price></Typography>
        <Typography variant='h6'>Total Amount
          <Price component='span'>
            ₹{price>500 ? price-discount : price-discount+40 }
          </Price></Typography>
        <Discount>You will save ₹{price>500 ? discount+40 : discount-40} on this order</Discount>
      </Container>
    </Box>
  )
}
