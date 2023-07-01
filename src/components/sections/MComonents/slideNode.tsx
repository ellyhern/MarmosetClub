interface SlideNodeProps {
    slideinfo: any; // Replace with the correct type for your slideinfo prop
    slideKey: number;
}
const handleDragStart = (event: React.DragEvent<HTMLLIElement>): void => { event.preventDefault(); };

export const SlideNode = ({ slideinfo, slideKey }: SlideNodeProps) => {
    return (
        <li className="splide__slide" key={3} onDragStart={handleDragStart}>
            <div className="hero__content hero__content--left hero__content--slider">
                <h1 className="hero__title">{slideinfo.heroTitle}</h1>
                <p className="hero__text">{slideinfo.heroText}</p>
                <div className="hero__btns hero__btns--left">
                    <a href="#" className="hero__btn"><span>Buy an NFT</span></a>
                </div>
                <div className="game game--cover">
                    <div className="game__bg">
                        <img src={slideinfo.img} alt="Realms Of Ethernity" />
                    </div>
                </div>
            </div>
        </li>
    );
};