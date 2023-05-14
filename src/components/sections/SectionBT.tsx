export const SectionBT = () => {
    return (
        <section className="section section--bt">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__title section__title--carousel">
                            <h2><a href="blog.html">Latest News</a></h2>
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
                                    <li className="splide__slide">
                                        <div className="post post--big-slide">
                                            <a href="article.html" className="post__img">
                                                <img src="img/posts/m4.jpg" alt="" />
                                            </a>

                                            <div className="post__content">
                                                <a href="#" className="post__category">NFT</a>
                                                <h3 className="post__title"><a href="article.html">How to Create Your 1st Crypto NFTs</a></h3>
                                                <div className="post__meta">
                                                    <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" /></svg> 2 hours ago</span>
                                                    <span className="post__views"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg> 17</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="post post--big-slide">
                                            <a href="article.html" className="post__img">
                                                <img src="img/posts/m2.jpg" alt="" />
                                            </a>

                                            <div className="post__content">
                                                <a href="#" className="post__category">Token</a>
                                                <h3 className="post__title"><a href="article.html">The new token is launching this planet</a></h3>
                                                <div className="post__meta">
                                                    <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" /></svg> 3 hours ago</span>
                                                    <span className="post__views"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg> 11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="post post--big-slide">
                                            <a href="article.html" className="post__img">
                                                <img src="img/posts/m1.jpg" alt="" />
                                            </a>

                                            <div className="post__content">
                                                <a href="#" className="post__category">NFT</a>
                                                <h3 className="post__title"><a href="article.html">Save thousands of lives through this NFT</a></h3>
                                                <div className="post__meta">
                                                    <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" /></svg> 4 hours ago</span>
                                                    <span className="post__views"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg> 14</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="post post--big-slide">
                                            <a href="article.html" className="post__img">
                                                <img src="img/posts/m3.jpg" alt="" />
                                            </a>

                                            <div className="post__content">
                                                <a href="#" className="post__category">Metaverse</a>
                                                <h3 className="post__title"><a href="article.html">New city will be build with metaverse</a></h3>
                                                <div className="post__meta">
                                                    <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" /></svg> 5 hours ago</span>
                                                    <span className="post__views"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg> 18</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="post post--big-slide">
                                            <a href="article.html" className="post__img">
                                                <img src="img/posts/m5.jpg" alt="" />
                                            </a>

                                            <div className="post__content">
                                                <a href="#" className="post__category">Art</a>
                                                <h3 className="post__title"><a href="article.html">The beginner’s guide to creating & selling digital art NFTs</a></h3>
                                                <div className="post__meta">
                                                    <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" /></svg> 9 hours ago</span>
                                                    <span className="post__views"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /></svg> 50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
