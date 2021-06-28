import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Row, Column, Item } from '@mui-treasury/components/flex';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';
import  './index.css'
import FakeCoin_Scarlet from '../../assets/FakeCoin_Scarlet.png';
import FakeCoin_Lime from '../../assets/FakeCoin_Lime.png';
import FakeCoin_Orange from '../../assets/FakeCoin_Orange.png';
import FakeCoin_Grey from '../../assets/FakeCoin_Grey.png';
import FakeCoin_Violet from '../../assets/FakeCoin_Violet.png';
import FakeCoin_Minimal_Circle_Blue from '../../assets/FakeCoin_Minimal_Circle_Blue.svg';




const colors = [FakeCoin_Scarlet, FakeCoin_Grey, FakeCoin_Orange, FakeCoin_Lime, FakeCoin_Violet]


function determineAvatarColor(styleKey) {
    let idx = styleKey % colors.length;
    return colors[idx];
}
 const DarkRapListItem = (props) => {
    const avatarStyles = useDynamicAvatarStyles({ size: 90 });
    console.log(props)
    let avatarColor = determineAvatarColor(props.styleKey);
    return (
        <Row style={{backgroundColor : '#3D85C6' }}>
            <Item>
                <Avatar
                    variant={'rounded'}
                    classes={avatarStyles}
                    src={
                        avatarColor
                    }
                />
            </Item>
            <Info useStyles={useD01InfoStyles}>
                <InfoCaption>{props.hash}</InfoCaption>
                <InfoTitle style={{color: 'black'}}>{props.timestamp}</InfoTitle>
               
            </Info>
        </Row>


    );
}
export default DarkRapListItem;
 