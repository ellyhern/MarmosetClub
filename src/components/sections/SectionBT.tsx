import { useEffect, useState } from "react";
import axios from "axios";
export const SectionBT = () => {
    const [staff, setStaff] = useState([]);
    useEffect(() => {

        axios.get("/api/staff-data")
            .then((res) => {
                // console.log(res.data);
                setStaff(res.data);
            }).catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <section className="section section--bt">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__title section__title--carousel">
                            <h2><a href="blog.html">Staff Members</a></h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="section__carousel section__carousel--content splide splide--content">
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path></svg></button>
                                <button className="splide__arrow splide__arrow--next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg></button>
                            </div>

                            <div className="splide__track">
                                <ul className="splide__list">
                                    {
                                        staff?.map((st: any, index: number) => {
                                            // console.log(st);
                                            return (
                                                <li className="splide__slide" key={index}>
                                                    <div className="post post--big-slide">
                                                        <a href="#" className="post__img">
                                                            <img src={st.img} alt="" />
                                                        </a>

                                                        <div className="post__content">
                                                            <a href="#" className="post__category">{st.username}</a>
                                                            <h6 className="post__title hfont"><a href="#">{st.discord}</a></h6>
                                                            <h6 className="post__title hfont"><a href="#">{st.telegram}</a></h6>
                                                            <h6 className="post__title hfont"><a href="#">{st.role}</a></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
