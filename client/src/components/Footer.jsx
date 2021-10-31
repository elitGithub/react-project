import styled from "styled-components";
import {
    Facebook,
    Instagram,
    Map,
    Pinterest,
    Twitter,
    Phone,
    Mail,
    MailOutlined,
    LocationOn, Room
} from "@mui/icons-material";

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;


const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
width: 50%;
`;


const Footer = () => {
    return (<Container>
        <Left>
            <Logo>
                LAMA.
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi officiis, quia? Earum est et explicabo
                fugiat inventore ipsam ipsum, iusto labore natus praesentium vitae voluptate!
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                {linkList.map(item => <ListItem>{item}</ListItem>)}
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{ marginRight: " 10px" }}/>666 - Magical Lamp, Over the Rainbow</ContactItem>
            <ContactItem><Phone style={{ marginRight: " 10px" }}/>1800 - call-us-here</ContactItem>
            <ContactItem><MailOutlined style={{ marginRight: " 10px" }}/>contact@why.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>);
};

const linkList = [
    'Home', 'Cart', "Men's Fashion", "Women's Fashion", 'Accessories', 'My Account', 'Order Tracking', 'Wishlist', 'Terms',
];

export default Footer;