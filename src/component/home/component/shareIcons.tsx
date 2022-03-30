import Box from "@mui/material/Box";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton, WhatsappIcon, WhatsappShareButton
} from "react-share";
import * as React from "react";

let shareText="You can visualize data of SDGs indicators in a map"
let shareUrl="https://ecomap-d8c09.firebaseapp.com/"
type ShareIconType={
    top:string
    left:string
}
export function ShareIcons(props:ShareIconType){
    return (
        <Box sx={{height:'20%',width:'85%',transform:'scale(1.2)',marginLeft:props.left+'%',marginTop:props.top+'%'}}>
            <FacebookShareButton
                url={shareUrl}
                quote={shareText}
                hashtag={"#EcoMap"}

                className="Demo__some-network__share-button"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                title={shareText}
                url={shareUrl}
                hashtags={["EcoMap"]}
            >
                <TwitterIcon size={32} round />

            </TwitterShareButton>
            <LinkedinShareButton
                title={shareText}
                url={shareUrl}

            >
                <LinkedinIcon size={32} round />

            </LinkedinShareButton>
            <WhatsappShareButton
                title={shareText}
                url={shareUrl}

            >
                <WhatsappIcon size={32} round />

            </WhatsappShareButton>
        </Box>
    )
}
