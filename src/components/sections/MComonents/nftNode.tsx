import { getCloudFlareImage } from "../../../utils";
import { useEffect, useState } from "react";
interface NFTdataProps {
    data: any; // Replace with the correct type for your slideinfo prop
    key: number;
}
export const NFTNode = ({ data, key }: NFTdataProps) => {
    const [nftdata, setNftData] = useState<any>({});
    useEffect(() => {
        // console.log(data.nftName);
        getCloudFlareImage(data.avatar, 500).then((res) => {
            data.avatarUrl = res;
            setNftData(data);

        }).catch(() => { console.log("error"); });
    }, [data]);
    return (
        <div className="col-12 col-md-6 col-xl-4 aos-item__inner"
            data-aos="fade-up"
            data-aos-delay="100"
            key={key}>
            <div className="game">
                <div className="game__head">
                    <div className="game__cover">
                        <img src={nftdata.avatarUrl} alt="" style={{ height: 300, width: "100%" }} />
                    </div>
                    <div className="game__title">
                        <h3 className="game__name">
                            <a href="/game">{nftdata.nftName}</a>
                        </h3>

                    </div>
                </div>
                <p className="game__description">{nftdata.description}</p>
                <a href="/game" className="game__more"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
            </div>
        </div>
    )
}