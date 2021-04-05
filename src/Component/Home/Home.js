import React from 'react';
import { Container } from 'react-bootstrap';
import Gift from '../Gift/Gift';


const Home = () => {

    const gifts = [
        {
            title: 'Customized Mug',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://sblelo.com/wp-content/uploads/2020/07/birthday-2.jpg',
            capacity: 12,
            giftType: 'Single',
            price: 119
        },
        {
            title: 'Customized Pen Holder',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://media.istockphoto.com/photos/pen-holder-with-colored-pens-and-pencils-picture-id682866236?k=6&m=682866236&s=612x612&w=0&h=e648ilRx8yumUxoljnfBzb0GYQJZhlnsC5nl6NJR-8g=',
            capacity: 2,
            giftType: 'Double',
            price: 149
        },
        {
            title: 'Customized clock',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://3.imimg.com/data3/TM/GB/MY-6145877/designer-wall-clock-500x500.jpg',
            capacity: 4,
            giftType: 'Family',
            price: 199
        },
        {
            title: 'Hand Bag',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://sc02.alicdn.com/kf/UTB8GgihtdoSdeJk43Ow761a4XXat/727013055/UTB8GgihtdoSdeJk43Ow761a4XXat.png_.webp',
            capacity: 4,
            giftType: 'Family',
            price: 199
        },
        {
            title: 'Cake',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg',
            capacity: 4,
            giftType: 'Family',
            price: 199
        },
        {
            title: 'Camera',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://asset.fujifilm.com/www/ca/files/styles/600x400/public/2020-03/155b4fec94ce7a8bd31b7c265efcb936/thumb_instaxcameras_13.jpg?itok=pd5NDx_c',
            capacity: 4,
            giftType: 'Family',
            price: 199
        }

    ]
    return (
        <Container>
        <div className="row" style={{
                 textAlign: 'center',
                 marginTop:'40px',
                 marginBottom:'40px',
                 marginLeft:'40px',
                 rowGap:'40px',
                 columnGap:'82px',
            }} >
            {
                gifts.map(gift => <Gift key={gift.giftType} gift={gift}></Gift>)
            }
        </div>
        </Container>
    );
};

export default Home;