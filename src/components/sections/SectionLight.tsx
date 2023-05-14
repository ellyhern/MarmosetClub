export const SectionLight = () => {
    return (
        <section className="section section--light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__title section__title--carousel">
                            <h2>Roadmap</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="section__carousel section__carousel--block splide splide--block">
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path></svg></button>
                                <button className="splide__arrow splide__arrow--next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg></button>
                            </div>

                            <div className="splide__track">
                                <ul className="splide__list">
                                    <li className="splide__slide">
                                        <div className="roadmap roadmap--active">
                                            <h3 className="roadmap__title">2023 Q4</h3>
                                            <ul className="roadmap__list">
                                                <li>Project start</li>
                                                <li>Tiers system</li>
                                                <li>Tokenomics</li>
                                                <li>Seed round</li>
                                                <li>Aggregator – MVP</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="roadmap roadmap--active">
                                            <h3 className="roadmap__title">2024 Q1</h3>
                                            <ul className="roadmap__list">
                                                <li>Aggregator – Alpha</li>
                                                <li>MVP Launchpad</li>
                                                <li>Private round</li>
                                                <li>Strategic round</li>
                                                <li>GameFi ratings</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="roadmap">
                                            <h3 className="roadmap__title">2024 Q2</h3>
                                            <ul className="roadmap__list">
                                                <li>Aggregator – Beta</li>
                                                <li>Smart contract audit</li>
                                                <li>KYC integration</li>
                                                <li>Launchpad – Beta</li>
                                                <li>Public round</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="roadmap">
                                            <h3 className="roadmap__title">2024 Q3</h3>
                                            <ul className="roadmap__list">
                                                <li>CEX listing</li>
                                                <li>Staking pools</li>
                                                <li>MVP guild aggregator</li>
                                                <li>MVP NFT pawnshop</li>
                                                <li>Referral program</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="splide__slide">
                                        <div className="roadmap">
                                            <h3 className="roadmap__title">2024 Q4</h3>
                                            <ul className="roadmap__list">
                                                <li>Karma holders</li>
                                                <li>DAO governance launch</li>
                                                <li>NFT pawnshop launch</li>
                                                <li>Guild aggregator launch</li>
                                                <li>Rewards and challenges</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="canvas2" className="section__canvas"></div>
        </section>
    );
};
