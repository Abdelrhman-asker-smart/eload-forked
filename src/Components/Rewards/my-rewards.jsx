import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import axios from "axios";
import "./rewards.css";
import Img from "./prize.png";

const MyRewards = () => {
  const dispatch = useDispatch();
  const [cookie] = useCookies(["eload_token"]);
  const endpoint = 'auth/me?promotions_trackers_status=';
  const [in_progress_rewards, setInProgressRewards] = useState([]);
  const [achieved_rewards, setAchievedRewards] = useState([]);
  const [wallet, setWallet] = useState({});

  const getRewardsByStatus = async (status = 'IN-PROGRESS') => {
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/${endpoint}${status}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      let data = response.data.data;
      if(status == 'IN-PROGRESS') {
        setInProgressRewards(data.promotions_trackers);
      } else {
        setAchievedRewards(data.promotions_trackers);
      }

      if(Object.keys(wallet).length === 0) {
        setWallet(data.wallet);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRewardsByStatus();
    console.log('wallet', wallet);
  }, []);

  return (
    <div className="container my-rewards px-4">
      {/* header */}
      <div className="row p-4">
        <div className="col-md-4 offset-md-4 text-center top-section">
          <div className="col-md-6 float-start">
            <img src={Img} className="img-fluid" alt="" srcset="" />
          </div>
          <div className="col-md-6 float-end balance-section">
            <h6>Available Balance</h6>
            <h4>{wallet.balance} {wallet.currency}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRewards;
