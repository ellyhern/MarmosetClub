import { useEffect, useState } from "react";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export const Verify = () => {

  const [veri, setVeri] = useState({
    discord: "",
    telegram: "",
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
      console.log("connect wallet");
      toastr.warning("Connect wallet!");
    }
  }, [window.localStorage.getItem("marmoset")]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const discordReg = /^.+#\d{4}$/;
    const telegramReg = /^@[A-Za-z0-9_]{5,32}$/;
    const polkadotReg = /^[\w]{47,48}$/;
    if (!discordReg.test(veri.discord))
      return toastr.error("Discord address is not valid");
    if (!telegramReg.test(veri.telegram))
      return toastr.error("Telegram address is not valid");
    if (!polkadotReg.test(veri.wallet))
      return toastr.error("Wallet address is not valid or You are not connected to Polkadot wallet.");

    axios.post("/api/user-verify", veri).then((res) => {
      console.log(res.data.message);
      toastr.options = {
        // positionClass: 'toast-top-full-width',
        hideDuration: 300,
        timeOut: 60000
      }
      toastr.clear()
      const flg = res?.data?.flg;
      const message = res?.data?.message;
      if (flg === "success")
        toastr.success(message);
      else if (flg === "error") toastr.error(message);

      const { discord, telegram } = res.data;
      setVeri((prevState) => ({ ...prevState, discord, telegram }));
    }).catch();
  }

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setVeri((prevState) => ({ ...prevState, [name]: value }));
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
            <span className="subtitle">Discord:</span>
            <br />
            <input type="text" name="discord" value={veri.discord} onChange={handleChange} />
            <br />
            <span className="subtitle">Telegram:</span>
            <br />
            <input type="text" name="telegram" value={veri.telegram} onChange={handleChange} />
            <br />
            <input type="submit" value="Verify" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};