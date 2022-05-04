import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge'


const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border: .5px solid lightgray  ;
display: flex;
align-items: center;
margin-left: 25px ;
padding: 5px;
`
const Input = styled.input`
border: none ;
`
const Center= styled.div`
flex: 1;
`
const Logo = styled.h1`
font-weight:bold ;
text-align: center;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px ;
`
const Navbar = () => {
    return (
        <Container>
          <Wrapper>
            <Left > 
             <Language>FR</Language>
             <SearchContainer>
             <Input />
               <Search style={{color:"gray" , fonSize:16}}/>
               
             </SearchContainer>
             </Left>
           
            <Center > 
              <Logo>
                Logo
              </Logo> 
            </Center>
            <Right > 
             <MenuItem>INSCRIPTION</MenuItem>
             <MenuItem>LOGIN</MenuItem>
             <MenuItem>
                <Badge  badgeContent={7} color="secondary">
                <ShoppingCartOutlined/>
              </Badge>
             </MenuItem>
            </Right>
          </Wrapper>
        </Container>
    )
}

export default Navbar
