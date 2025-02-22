import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { fetchPromotionList } from "../../redux/listPromotion";
import { fetchTruckList } from "../../redux/listTruck";
import { fetchCityListByCountry } from "../../redux/CityListSlice";
import axios from "axios";
import "./rewards.css";

const Rewards = () => {
  const dispatch = useDispatch();
  const [promotionList, setpromotionList] = useState([]);
  const [truck_types, setTruckTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [cookie] = useCookies(["eload_token"]);

  const data = promotionList.map((item) => {
    return {
      id: item.id,
      name: item.name,
      details: item.details,
    };
  });

  useEffect(() => {
    dispatch(fetchTruckList({ token: cookie.eload_token }))
      .then((res) => {
        let data = res.payload.data.map((object) => {
          return {
            value: object.id,
            label: object.name,
          };
        });
        setTruckTypes(data);

        dispatch(fetchCityListByCountry({ token: cookie.eload_token }))
          .then((cities_res) => {
            let data = cities_res.payload.data.data.states.map((object) => ({
              label: object.name,
              options: object.cities.map((sub_object) => ({
                value: sub_object.id,
                label: sub_object.name,
              })),
            }));
            setCities(data);

            dispatch(fetchPromotionList({ token: cookie.eload_token }))
              .then((res) => {
                // console.log(res, "response from api");
                const data = res.payload.data;
                setpromotionList(data);
              })
              .catch((e) => {
                // console.log(e);
              });
          })
          .catch((e) => {
            // console.log(e);
          });
      })
      .catch((e) => {
        // console.log(e);
      });
  }, []);

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  const intial_state = {
    name: "",
    description: "",
    details: {
      conditions: {
        achievement: "all",
        delivered_shipments: {
          value: 1,
        },
      },
      actions: {
        total: {
          type: "fixed",
          value: "",
        },
      },
    },
  };

  // we can also set default values
  const default_values = {
    start_time: null,
    end_time: null,
    from_city_id: null,
    to_city_id: null,
    truck_type_id: null,
  };

  /// dropdown
  const typesOptions = [
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];

  const optionsRewards = [
    { value: "start_time", label: "Start Time" },
    { value: "end_time", label: "End Time" },
    { value: "from_city_id", label: "Source" },
    { value: "to_city_id", label: "Destination" },
    { value: "truck_type_id", label: "Truck Type" },
  ];

  const handleSelectedOptionsRewards = (conditions) => {
    let selected_options = [];

    for (let i = 0; i < optionsRewards.length; i++) {
      if (conditions.hasOwnProperty(optionsRewards[i].value)) {
        selected_options.push(optionsRewards[i]);
      }
    }

    return selected_options;
  };

  const handleSelectedOptionsCities = (city_id) => {
    let selected_option = {};

    for (let i = 0; i < cities.length; i++) {
      for (let city of cities[i].options) {
        if (city_id == city.value) {
          return city;
        }
      }
    }

    return selected_option;
  };

  const handleSelectedTime = (time) => {
    return Date.parse(time);
  };

  const handleSelectedRewardsOptions = (options, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    let current_promotion = promotions[index];

    // remove condition if not in the options
    if (options.length == 0) {
      let conditions = current_promotion.details.conditions;
      current_promotion.details.conditions = {
        achievement: conditions.achievement,
        delivered_shipments: conditions.delivered_shipments,
      };
    } else {
      for (const condition in current_promotion.details.conditions) {
        if (condition == "achievement" || condition == "delivered_shipments") {
          continue;
        }

        for (let i = 0; i < options.length; i++) {
          if (condition == options[i].value) {
            break;
          }

          // the condition isn't in the options and thus we have to delete it
          if (i == options.length - 1) {
            delete current_promotion.details.conditions[condition];
          }
        }
      }
    }

    // insert option if not exist
    for (let i = 0; i < options.length; i++) {
      if (
        !current_promotion.details.conditions.hasOwnProperty(options[i].value)
      ) {
        current_promotion.details.conditions[options[i].value] = {
          value: default_values[options[i]],
        };
      }
    }

    promotions[index] = current_promotion;
    // console.log('current_promotion', current_promotion);
    setpromotionList(promotions);
  };

  const handleAddBtn = () => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions.push(intial_state);
    setpromotionList(promotions);

    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleName = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].name = value;
    setpromotionList(promotions);
  };

  const handleRewardType = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.actions.total.type = value;
    setpromotionList(promotions);
  };

  const handleRewardAmount = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.actions.total.value = value;
    setpromotionList(promotions);
  };

  const handleDeliveredShipments = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.conditions.delivered_shipments.value = value;
    setpromotionList(promotions);
  };

  const handleStartTime = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.conditions.start_time.value = value;
    setpromotionList(promotions);
  };

  const handleEndTime = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.conditions.end_time.value = value;
    setpromotionList(promotions);
  };

  const handleFromCityId = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.conditions.from_city_id.value = value;
    setpromotionList(promotions);
  };

  const handleToCityId = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.conditions.to_city_id.value = value;
    setpromotionList(promotions);
  };

  const handleTruckTypeId = (value, index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    promotions[index].details.conditions.truck_type_id.value = value;
    setpromotionList(promotions);
  };

  const handleSubmit = async (index) => {
    let promotions = JSON.parse(JSON.stringify(promotionList));
    let current_promotion = promotions[index];

    if (current_promotion.details.conditions.hasOwnProperty("start_time")) {
      let time_value = moment(
        current_promotion.details.conditions.start_time.value
      ).format("YYYY-MM-DD HH:mm:ss");
      current_promotion.details.conditions.start_time.value = time_value;
    }

    if (current_promotion.details.conditions.hasOwnProperty("end_time")) {
      let time_value = moment(
        current_promotion.details.conditions.end_time.value
      ).format("YYYY-MM-DD HH:mm:ss");
      current_promotion.details.conditions.end_time.value = time_value;
    }

    let endpoint = "promotions";

    if (current_promotion.hasOwnProperty("id")) {
      endpoint += `/${current_promotion.id}`;
      delete current_promotion.id;
      current_promotion["_method"] = "put";
    }

    // console.log('endpoint', endpoint);
    // console.log('current_promotion', current_promotion);

    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/${endpoint}`,
        current_promotion,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      // console.log(response.data.data);

      /**
       * if it's a new promotion we will update the current object and add the id to it
       * so when we submit again without refreshing the page we update it and not creating a new one
       */
      if (endpoint == "promotions") {
        current_promotion["id"] = response.data.data.id;
        promotions[index] = current_promotion;
        setpromotionList(promotions);
      }

      // it has to be a better alert
      alert("Successfully Saved!");
    } catch (e) {
      // console.log(e);
    }
  };

  // // console.log(count3, "count");

  return (
    <div className="container my-rewards px-4">
      {/* header */}
      <div className="row p-4">
        <div className="col-md-4">
          <h2>Rewards</h2>
        </div>
        <div className="col-md-8">
          <button className="btn add-btn" onClick={() => handleAddBtn()}>
            Add new reward
          </button>
        </div>
      </div>
      <hr />
      {/* section-1 */}
      {data.map(({ id, name, details }, index) => {
        return (
          <>
            <div className="row px-4 py-2" key={id}>
              {/* first-row */}
              <div className="row justify-content-between">
                <div className="col-md-6 align-items-center">
                  <div className="icon-box d-flex align-items-center">
                    <svg
                      width="71"
                      height="71"
                      viewBox="0 0 71 71"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M62.8655 54.6404L57.9843 55.7942C56.8897 56.0604 56.0318 56.8888 55.7951 57.9833L54.7597 62.3321C54.1976 64.6987 51.1801 65.4383 49.6122 63.5746L40.7668 53.3979C40.0568 52.5696 40.4414 51.2679 41.5064 51.0017C46.7426 49.7296 51.4464 46.8008 54.9076 42.6296C55.4697 41.9492 56.4755 41.8604 57.0968 42.4817L63.6643 49.0492C65.9126 51.2975 65.1139 54.1079 62.8655 54.6404Z"
                        fill="#FDC500"
                      />
                      <path
                        d="M7.98762 54.6404L12.8689 55.7942C13.9634 56.0604 14.8214 56.8888 15.058 57.9833L16.0934 62.3321C16.6555 64.6987 19.673 65.4383 21.2409 63.5746L30.0864 53.3979C30.7964 52.5696 30.4118 51.2679 29.3468 51.0017C24.1105 49.7296 19.4068 46.8008 15.9455 42.6296C15.3834 41.9492 14.3776 41.8604 13.7564 42.4817L7.18887 49.0492C4.94053 51.2975 5.73928 54.1079 7.98762 54.6404Z"
                        fill="#FDC500"
                      />
                      <path
                        d="M35.5001 5.9165C24.0513 5.9165 14.7917 15.1761 14.7917 26.6248C14.7917 30.9144 16.0638 34.849 18.253 38.1328C21.448 42.8661 26.5067 46.209 32.3938 47.0669C33.3997 47.2444 34.4351 47.3332 35.5001 47.3332C36.5651 47.3332 37.6005 47.2444 38.6063 47.0669C44.4934 46.209 49.5522 42.8661 52.7472 38.1328C54.9363 34.849 56.2084 30.9144 56.2084 26.6248C56.2084 15.1761 46.9488 5.9165 35.5001 5.9165ZM44.5526 25.974L42.0972 28.4294C41.683 28.8436 41.4463 29.6423 41.5943 30.234L42.3043 33.2811C42.8663 35.6773 41.5942 36.624 39.4643 35.3519L36.5059 33.6065C35.9734 33.2811 35.0859 33.2811 34.5534 33.6065L31.5951 35.3519C29.4651 36.5944 28.193 35.6773 28.7551 33.2811L29.4651 30.234C29.5834 29.6719 29.3763 28.8436 28.9622 28.4294L26.4476 25.974C24.998 24.5244 25.4713 23.0748 27.483 22.7494L30.6484 22.2169C31.1809 22.1282 31.8022 21.6548 32.0388 21.1815L33.7842 17.6907C34.7309 15.7973 36.2692 15.7973 37.2159 17.6907L38.9613 21.1815C39.198 21.6548 39.8192 22.1282 40.3813 22.2169L43.5468 22.7494C45.5288 23.0748 46.0022 24.5244 44.5526 25.974Z"
                        fill="#FDC500"
                      />
                    </svg>
                    {/* <h4>{name}</h4> */}
                    <div className="input-side">
                      <label htmlFor="address">
                        Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name of the reward"
                        value={name}
                        onChange={(v) => handleName(v.target.value, index)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 justfy-content-end pt-3 ">
                  <Select
                    classNamePrefix="select"
                    className="basic-multi-select"
                    isMulti
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={true}
                    name="rewards_options"
                    options={optionsRewards}
                    defaultValue={handleSelectedOptionsRewards(
                      details.conditions
                    )}
                    onChange={(options) =>
                      handleSelectedRewardsOptions(options, index)
                    }
                  />
                </div>
              </div>
              {/* secound-row */}
              <div className="row py-5 align-items-center">
                <div className="col-md-4 input-side">
                  <label htmlFor="address">
                    Reward Type<span>*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    className="basic-multi-select mt-10"
                    isMulti={false}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={true}
                    name="rewards_options"
                    options={typesOptions}
                    defaultValue={typesOptions.find(
                      ({ value }) => value === details.actions.total.type
                    )}
                    onChange={(choice) => handleRewardType(choice.value, index)}
                  />
                </div>
                <div className="col-md-4 input-side">
                  <label htmlFor="address">
                    Reward Amount<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ie. 500 SAR"
                    value={details.actions.total.value}
                    onChange={(v) => handleRewardAmount(v.target.value, index)}
                  />
                </div>
                <div className="col-md-4 numbers-box text-center">
                  <label htmlFor="address">
                    Number of trips<span>*</span>
                  </label>
                  <div className="qty">
                    {/* <span
                onClick={() => {
                  if (count1 > 1) {
                    setCount1((prevState) => prevState - 1);
                  }
                }}
                className="minus"
              >
                -
              </span> */}
                    {/* <span>{count1}</span> */}
                    <input
                      // readOnly
                      type="number"
                      min="1"
                      className="count"
                      name="qty"
                      value={details.conditions.delivered_shipments.value}
                      onChange={(v) =>
                        handleDeliveredShipments(v.target.value, index)
                      }
                    />
                    {/* <span
                onClick={() => {
                  if (count1 < 50) {
                    setCount1((prevState) => prevState + 1);
                  }
                }}
                className="plus "
              >
                +
              </span> */}
                  </div>
                </div>
                {details.conditions.hasOwnProperty("start_time") ? (
                  <div className="col-md-4 input-side">
                    <label htmlFor="address">
                      Start Time<span>*</span>
                    </label>
                    <DatePicker
                      selected={handleSelectedTime(
                        details.conditions.start_time.value
                      )}
                      onChange={(date) => handleStartTime(date, index)}
                      timeInputLabel="Time:"
                      dateFormat="yyyy-MM-dd h:mm aa"
                      showTimeInput
                    />
                  </div>
                ) : (
                  ""
                )}

                {details.conditions.hasOwnProperty("end_time") ? (
                  <div className="col-md-4 input-side">
                    <label htmlFor="address">
                      End Time<span>*</span>
                    </label>
                    <DatePicker
                      selected={handleSelectedTime(
                        details.conditions.end_time.value
                      )}
                      onChange={(date) => handleEndTime(date, index)}
                      timeInputLabel="Time:"
                      dateFormat="yyyy-MM-dd h:mm aa"
                      showTimeInput
                    />
                  </div>
                ) : (
                  ""
                )}

                {details.conditions.hasOwnProperty("from_city_id") ? (
                  <div className="col-md-4 input-side">
                    <label htmlFor="address">
                      Source<span>*</span>
                    </label>
                    <Select
                      classNamePrefix="select"
                      className="basic-multi-select mt-10"
                      isMulti={false}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={true}
                      name="source"
                      options={cities}
                      defaultValue={handleSelectedOptionsCities(
                        details.conditions.from_city_id.value
                      )}
                      onChange={(choice) =>
                        handleFromCityId(choice.value, index)
                      }
                    />
                  </div>
                ) : (
                  ""
                )}

                {details.conditions.hasOwnProperty("to_city_id") ? (
                  <div className="col-md-4 input-side">
                    <label htmlFor="address">
                      Destination<span>*</span>
                    </label>
                    <Select
                      classNamePrefix="select"
                      className="basic-multi-select mt-10"
                      isMulti={false}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={true}
                      name="destination"
                      options={cities}
                      defaultValue={handleSelectedOptionsCities(
                        details.conditions.to_city_id.value
                      )}
                      onChange={(choice) => handleToCityId(choice.value, index)}
                    />
                  </div>
                ) : (
                  ""
                )}

                {details.conditions.hasOwnProperty("truck_type_id") ? (
                  <div className="col-md-4 input-side">
                    <label htmlFor="address">
                      Truck Type<span>*</span>
                    </label>
                    <Select
                      classNamePrefix="select"
                      className="basic-multi-select mt-10"
                      isMulti={false}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={true}
                      name="truck_types"
                      options={truck_types}
                      defaultValue={truck_types.find(
                        ({ value }) =>
                          value === details.conditions.truck_type_id.value
                      )}
                      onChange={(choice) =>
                        handleTruckTypeId(choice.value, index)
                      }
                    />
                  </div>
                ) : (
                  ""
                )}

                <div className="col-md-4 d-flex justify-content-center mt-4">
                  <button
                    className="btn add-btn"
                    style={{ padding: "6px 20px", height: "52%", width: "46%" }}
                    onClick={() => {
                      handleSubmit(index);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </>
        );
      })}
      {/* modal */}
      <div
        className="modal fade"
        id="SuccessModalToggle"
        aria-hidden="true"
        aria-labelledby="SuccessModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{ borderRadius: "25px", width: "80%" }}
          >
            <div className="modal-header border-0 justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body d-flex text-center my-3 "
              style={{ marginLeft: "12%" }}
            >
              <h3
                className="my-4 mx-4"
                style={{ fontSize: "40px", fontWeight: "500" }}
              >
                Saved!
              </h3>
              <svg
                width="105"
                height="105"
                viewBox="0 0 105 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.8313 8.75H34.1687C18.2437 8.75 8.75 18.2437 8.75 34.1687V70.7875C8.75 86.7562 18.2437 96.25 34.1687 96.25H70.7875C86.7125 96.25 96.2062 86.7563 96.2062 70.8313V34.1687C96.25 18.2437 86.7563 8.75 70.8313 8.75ZM73.4125 42.4375L48.6062 67.2437C47.9937 67.8563 47.1625 68.2062 46.2875 68.2062C45.4125 68.2062 44.5812 67.8563 43.9688 67.2437L31.5875 54.8625C30.3187 53.5938 30.3187 51.4937 31.5875 50.225C32.8562 48.9562 34.9562 48.9562 36.225 50.225L46.2875 60.2875L68.775 37.8C70.0438 36.5313 72.1438 36.5313 73.4125 37.8C74.6813 39.0688 74.6813 41.125 73.4125 42.4375Z"
                  fill="#CBFF39"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
