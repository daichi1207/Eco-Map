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

type ShareIconType={
    top:string
    left:string
}
export function ShareIcons(props:ShareIconType){
    return (
        <Box sx={{height:'20%',wedth:'100%',transform:'scale(1.2)',marginLeft:props.left+'%',marginTop:props.top+'%'}}>
            <FacebookShareButton
                url={"https://eco-map-dev-kapikei.web.app/"}
                quote={"フェイスブックはタイトルが付けれるようです"}
                hashtag={"#hashtag"}

                className="Demo__some-network__share-button"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                title={"test"}
                url={"https://eco-map-dev-kapikei.web.app/"}
                hashtags={["hashtag1", "hashtag2"]}
            >
                <TwitterIcon size={32} round />

            </TwitterShareButton>
            <LinkedinShareButton
                title={"test"}
                url={"https://eco-map-dev-kapikei.web.app/"}

            >
                <LinkedinIcon size={32} round />

            </LinkedinShareButton>
            <WhatsappShareButton
                title={"test"}
                url={"https://eco-map-dev-kapikei.web.app/"}

            >
                <WhatsappIcon size={32} round />

            </WhatsappShareButton>
        </Box>
    )
}
