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
    ]
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 align-self-center">
                        <div className="section__title section__title--grid-right">
                            <strong>Become a partner</strong>
                            <h2>Welcome to the Marmoset Club!</h2>
                            <p>Each NFT includes a one-time access pass to our Telegram and Discord groups, which will allow you to interact with other members and enjoy our exclusive content. Once inside, you’ll be surrounded by passionate and creative individuals who share your interests and are willing to collaborate on exciting projects.</p>
                            <p>If you already have an invitation and acquire one of the 1000 NFTs, you’ll have the opportunity to invite someone of your choosing to join our exclusive community. This is a way to share the Marmoset Club experience with others who may be interested.</p>
                            <a href="/contacts" className="section__btn section__btn--grid"><span>Become</span></a>
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
