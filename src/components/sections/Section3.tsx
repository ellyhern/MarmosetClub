import { useEffect, useState } from 'react';
import axios from 'axios';
export const Section3 = () => {
    const data = [
        {
            "imgsrc": "img/sponsors/logo1.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo2.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo3.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo4.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo5.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo6.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo7.svg",
            "title": "thesponsor.com"
        },
        {
            "imgsrc": "img/sponsors/logo8.svg",
            "title": "thesponsor.com"
        }
    ];

    const [aboutData, setAboutData] = useState({ title: "", text: "" });

    useEffect(() => {
        axios.get("/api/about-data-one").then((res) => {
            console.log(res);
            setAboutData(res.data);
        }).catch();
    }, []);
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 align-self-center">
                        <div className="section__title section__title--grid-right">
                            <strong>Become a partner</strong>
                            <h2 style={{ width: "500px", wordWrap: "break-word" }}>{aboutData.title}</h2>
                            <p style={{ width: "520px", wordWrap: "break-word" }}>{aboutData.text}</p>

                            <a href="/verify" className="section__btn section__btn--grid"><span>Become</span></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center">
                        <ul className="sponsors sponsors--small">
                            {
                                data.map((d, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#">
                                                <img src={d.imgsrc} alt="" />
                                                <span>{d.title}</span>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
