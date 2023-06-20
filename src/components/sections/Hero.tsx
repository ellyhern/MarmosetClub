import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SlideNode } from "./MComonents/slideNode";
import { useEffect, useState } from 'react';
import axios from 'axios';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Hero = () => {
    const [slidedata, setSlideData] = useState([
        {
            "heroTitle": "Realms Of Ethernity",
            "heroText": "Each NFT includes a one-time access pass to our Telegram and Discord groups, which will allow you to interact with other members and enjoy our exclusive content.",
            "img": "img/posts/m1.jpg",
            "devices": "Web, Android, IOS",
            "freetoplay ": "Yes",
            "playtoearn": "Crypto",
            "Status": "Presale"
        },
        {
            "heroTitle": "Marmoset Club!",
            "heroText": "Is a thrilling multiplayer game where players work together to build, defend, and expand their colonies while facing a range of environmental and alien threats",
            "img": "img/posts/m2.jpg",
            "devices": "Web, Android, IOS",
            "freetoplay ": "Yes",
            "playtoearn": "Crypto",
            "Status": "Presale"
        },
        {
            "heroTitle": "Realms Of Ethernity",
            "heroText": "Each NFT includes a one-time access pass to our Telegram and Discord groups, which will allow you to interact with other members and enjoy our exclusive content.",
            "img": "img/posts/m3.jpg",
            "devices": "Web, Android, IOS",
            "freetoplay ": "Yes",
            "playtoearn": "Crypto",
            "Status": "Presale"
        }
    ]);
    useEffect(() => {
        axios.post("/api/carousel-data").then((res) => {
            // console.log(res);
            setSlideData(res.data);
        }).catch();
    }, []);
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="hero__slider-wrap">

                            <div className="hero__slider splide">

                                <div className="splide__track">

                                    <ul className="splide__list">
                                        <AliceCarousel
                                            autoPlay
                                            autoPlayControls
                                            autoPlayStrategy="none"
                                            autoPlayInterval={8000}
                                            animationDuration={2000}
                                            animationType="slide"
                                            infinite
                                            touchTracking={false}
                                            responsive={responsive}
                                            mouseTracking
                                            items={slidedata.map((data, index) => <SlideNode slideinfo={data} key={index} slideKey={index} />)}

                                        />
                                    </ul>
                                </div>
                            </div>
                            {/* <div id="canvas" className="hero__canvas"></div> */}
                            <div id="canvas" className="hero__canvas">
                                <canvas
                                    className="vanta-canvas"
                                    width="744"
                                    height="366"
                                    style={{
                                        position: "absolute",
                                        zIndex: 0,
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </section >
    );
};
