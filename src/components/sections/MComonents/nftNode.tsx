interface NFTdataProps {
    data: any; // Replace with the correct type for your slideinfo prop
    key: number;
}
export const NFTNode = ({ data, key }: NFTdataProps) => {
    return (
        <div className="col-12 col-md-6 col-xl-4">
            <div className="game">
                <div className="game__head">
                    <div className="game__cover">
                        <img src={data.gameCover} alt="" />
                    </div>
                    <div className="game__title">
                        <h3 className="game__name">
                            <a href="/game">{data.gameName}</a>
                        </h3>
                        <span className="game__blockchain">
                            {data.gameBlockchain.title}
                            {
                                data.gameBlockchain.img.map((bda: any, index: number) => {
                                    return (<img src={bda.src} key={index}
                                        alt={bda.alt}
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="bottom"
                                        data-bs-title={bda.alt} />)
                                })
                            }
                        </span>
                    </div>
                </div>
                <p className="game__description">{data.gameDescription}</p>
                <ul className="game__list">
                    {
                        data.gameList.map((list: any, index: number) => {
                            return (
                                <>
                                    <li key={index}>
                                        {list.after} <span className={list.after.includes("Devices") ? "required" : ""}>{list.before}</span>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
                <a href="/game" className="game__more"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
            </div>
        </div>
    )
}