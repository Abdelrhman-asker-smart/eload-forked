import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import axios from "axios";
import "./rewards.css";
import Img from "./prize.png";
import { fetchCityListByCountry } from "../../redux/CityListSlice";

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

        <h5 className="mt-10">In Progress Targets</h5>

      {in_progress_rewards.map((reward) => {
      return (
        <div className="col-md-6 top-section target-section mt-10">
          <h6>{reward.details.conditions.delivered_shipments.value} shipments</h6>
          <div class="progress">
            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p className="mt-10"><i class="fa fa-gift"></i> {reward.details.actions.total.value} {reward.details.actions.total.type == 'fixed' ? 'SAR' : '%'}</p>
          <p className="float-end">{reward.details.conditions.delivered_shipments.current_value}/{reward.details.conditions.delivered_shipments.value}</p>
        </div>
      )
      })}
      </div>
    </div>
  );
};

export default MyRewards;
