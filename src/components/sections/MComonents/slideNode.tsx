interface SlideNodeProps {
    slideinfo: any; // Replace with the correct type for your slideinfo prop
    slideKey: number;
}
const handleDragStart = (event: React.DragEvent<HTMLLIElement>): void => { event.preventDefault(); };

export const SlideNode = ({ slideinfo, slideKey }: SlideNodeProps) => {
    return (
        <li className="splide__slide" key={3} onDragStart={handleDragStart}>
            <div className="hero__content hero__content--left hero__content--slider">
                <span className="hero__tagline">Free to Buy</span>
                <h1 className="hero__title">{slideinfo.heroTitle}</h1>
                <p className="hero__text">{slideinfo.heroText}</p>
                <div className="hero__btns hero__btns--left">
                    <a href="#" className="hero__btn"><span>Buy</span></a>
                    <a href="/NFT" className="hero__btn hero__btn--nephrite"><span>Read more</span></a>
                </div>
                <div className="game game--cover">
                    <div className="game__bg">
                        <img src={slideinfo.img} alt="Realms Of Ethernity" />
                    </div>

                    <ul className="game__list">
                        <li>
                            Devices <span>{slideinfo.devices}</span>
                        </li>
                        <li>
                            Free to buy <span className="true">{slideinfo.freetoplay}</span>
                        </li>
                        <li>
                            Play to earn <span className="required">{slideinfo.playtoearn}</span>
                        </li>
                        <li>
                            Status <span className="process">{slideinfo.Status}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};