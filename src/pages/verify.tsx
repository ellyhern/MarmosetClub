import { useEffect, useState } from "react";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export const Verify = () => {

  const [veri, setVeri] = useState({
    code: "",
    expires: "",
    wallet: ""
  });

  useEffect(() => {
    const wallet = window.localStorage.getItem("marmoset");
    if (wallet !== null) {
      const walletInfo = JSON.parse(wallet);
      setVeri((prevState) => ({ ...prevState, wallet: walletInfo?.address }));
      axios.post("/api/getUserByWallet", { wallet: walletInfo?.address }).then((res) => {
        const { discord, telegram } = res.data;
        setVeri((prevState) => ({ ...prevState, discord, telegram }));
      }).catch();
    }
    else {
      toastr.warning("Connect wallet!");
    }
  }, [window.localStorage.getItem("marmoset")]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const polkadotReg = /^[\w]{47,48}$/;
    if (!polkadotReg.test(veri.wallet))
      return toastr.error("Wallet address is not valid or You are not connected to Polkadot wallet.");

    axios.post("/api/get-verifiCode", veri).then((res) => {
      console.log(res.data);
      const { code, expires } = res.data;
      toastr.options = {
        hideDuration: 300,
        timeOut: 60000
      }
      toastr.clear()
      toastr.success("Please verfy telegram and discord with this code soon. It expires in 15 mins");
      setVeri((prevState) => ({ ...prevState, code, expires }));

    }).catch();
  }


  return (
    <div className="flex-container">
      <div className="content-container">
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3>
              Welcome to Marmoset Club
            </h3>
            <br />
            <br />
            <h2 className="verifycode">{veri.code}</h2>
            <br />
            <br />
            <input type="submit" value="Verify" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};