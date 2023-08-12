import { Scroll, useScroll } from "@react-three/drei";
import { HalfWidthDiv, ImageList, Image2 } from "./PagesStyle";


export const Dock = () => {
    return (
        <HalfWidthDiv>
            <ImageList>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image2 src={process.env.PUBLIC_URL + '/res/man.png'} alt="LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image2 src={process.env.PUBLIC_URL + '/res/home.png'} alt="LinkedIn" />
                </a>
                <a href="https://www.twitter.com/banjo_dayo" target="_blank" rel="noopener noreferrer">
                    <Image2 src={process.env.PUBLIC_URL + '/res/twitter.png'} alt="Twitter" />
                </a>
                <a href="https://github.com/banjodayo39" target="_blank" rel="noopener noreferrer">
                    <Image2 src={process.env.PUBLIC_URL + '/res/github.png'} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/banjo-dayo-samuel/" target="_blank" rel="noopener noreferrer">
                    <Image2 src={process.env.PUBLIC_URL + '/res/linkedin.png'} alt="LinkedIn" />
                </a>
                <a href="https://banjodayo39.medium.com/" target="_blank" rel="noopener noreferrer">
                    <Image2 src={process.env.PUBLIC_URL + '/res/medium.png'} alt="LinkedIn" />
                </a>

            </ImageList>
        </HalfWidthDiv>
    );
};

