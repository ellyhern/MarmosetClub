import { NFTNode } from "./MComonents/nftNode";
export const Section = () => {
    const nftdata = [
        {
            "gameCover": "img/games/1.png",
            "gameName": "Tank Metaverse",
            "gameBlockchain": {
                title: "Blockchains",
                img: [
                    {
                        src: "img/blockchain/1.png",
                        alt: "BNB"
                    },
                    {
                        src: "img/blockchain/2.png",
                        alt: "Avalanche"
                    }
                ]
            },
            "gameDescription": "Uncover the secrets of a long-forgotten civilization, piecing together clues and solving puzzles to uncover ancient artifacts.",
            "gameList": [
                { after: "Devices", before: "Web, Android, IOS" },
                { after: "Free to Play", before: "NFT Required" },
                { after: "Play to Earn", before: "Crypto" },
                { after: "Status", before: "Presale" }
            ]
        },
        {
            "gameCover": "img/games/2.png",
            "gameName": "Synergy Land",
            "gameBlockchain": {
                title: "Blockchains",
                img: [
                    {
                        src: "img/blockchain/4.png",
                        alt: "Flow"
                    }
                ]
            },
            "gameDescription": "Fight against hordes of zombies and other undead monsters in a post-apocalyptic world.",
            "gameList": [
                { after: "Devices", before: "Windows, MAC, Linux" },
                { after: "Free to Play", before: "Yes" },
                { after: "Play to Earn", before: "NFT & Crypto" },
                { after: "Status", before: "Live" }
            ]
        }
    ]
    return (
        <section className="section">
            <div className="filter filter--home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filter__content filter__content--reverse">
                                <form action="#" className="filter__search">
                                    <input type="text" placeholder="Search..." />
                                    <button type="button" aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                                </form>
                                <div className="filter__wrap">
                                    <select className="filter__select" name="blockchain" id="filter__blockchain">
                                        <option value="0">All blockchains</option>
                                        <option value="1">Avalanche</option>
                                        <option value="2">Binance</option>
                                        <option value="3">Bitcoin</option>
                                        <option value="4">Cardano</option>
                                        <option value="5">Ethereum</option>
                                        <option value="6">Flow</option>
                                        <option value="7">Harmony</option>
                                        <option value="8">Litecoin</option>
                                        <option value="9">Near</option>
                                        <option value="10">NEO</option>
                                        <option value="11">Other</option>
                                    </select>
                                    <select className="filter__select" name="devices" id="filter__devices">
                                        <option value="0">All devices</option>
                                        <option value="1">Android</option>
                                        <option value="2">IOS</option>
                                        <option value="3">Linux</option>
                                        <option value="4">MAC</option>
                                        <option value="5">Playstation</option>
                                        <option value="6">Web</option>
                                        <option value="7">Windows</option>
                                        <option value="8">XBOX</option>
                                    </select>
                                    <select className="filter__select" name="status" id="filter__status">
                                        <option value="0">Public status</option>
                                        <option value="1">Alpha</option>
                                        <option value="2">Beta</option>
                                        <option value="3">Cancelled</option>
                                        <option value="4">Development</option>
                                        <option value="5">Live</option>
                                        <option value="6">Presale</option>
                                    </select>
                                </div>
                                <button className="filter__menu" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path></svg>Filter</button>
                                <span className="filter__amount">Showing 12 of 169</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    {
                        nftdata.map((nft, index) => {
                            return (<NFTNode data={nft} key={index} />);
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="paginator">
                            <span className="paginator__pages">12 from 169</span>

                            <ul className="paginator__list-mobile">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg>
                                        <span>Prev</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Next</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg>
                                    </a>
                                </li>
                            </ul>

                            <ul className="paginator__list">
                                <li>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" /></svg></a>
                                </li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><span>...</span></li>
                                <li><a href="#">18</a></li>
                                <li><a href="#">19</a></li>
                                <li>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
