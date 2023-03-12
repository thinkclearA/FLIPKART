import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar,Toolbar,styled,Box, Typography} from '@mui/material';

//components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height: 55px;
`
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style : italic;
`
const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 3%;
`
export default function Header() {
  return (
    <StyledHeader>
        <Toolbar style={{minHeight: 56}}>
            <Component to='/'>
                <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='Flipkart Logo' style={{width: 75}}/>
                <Box style={{display:'flex'}}>
                   <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500', fontWeight: 600}}>Plus</Box>
                   </SubHeading>
                   <PlusImage src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="sub-logo" />
                </Box>
            </Component>
            <Search />
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}
