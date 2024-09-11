import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Select from "react-select";

const AccountForm = ({ account, setAccount }) => {
  const [cookie] = useCookies(["eload_token"]);
  const [banks, setBanks] = useState([]);
  const [banksOptions, setBanksOptions] = useState([]);
  const [currenciesOptions, setCurrenciesOptions] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const getBanks = async () => {
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/banks`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      const data = response.data.data;
      setBanks(data);

      let banksOptions = data.map((item) => ({
        label: item.name,
        value: item.code,
      }));

      setBanksOptions(banksOptions);

      // below we are setting the currencies options statically, but later on we can get this data from 3rd party API
      setCurrenciesOptions([
        {
          label: "Saudi Riyal",
          value: "SAR",
        },
        {
          label: "U.S. Dollar",
          value: "USD",
        },
        {
          label: "Euro",
          value: "EUR",
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectedBank = (option) => {
    setAccount({
      ...account,
      bank: option.label,
      bank_clearing_code: option.value,
      bank_code: option.value,
    });
  };

  useEffect(() => {
    getBanks();
    setAccount({
      bank: account.bank || "",
      bank_address: account.bank_address || "",
      bank_clearing_code: account.bank_clearing_code || "",
      bank_code: account.bank_code || "",
      account_number: account.account_number || "",
      name: account.name || "",
      address: account.address || "",
      currency: account.currency || "SAR",
    });
  }, []);

  return (
    <>
      <h3>BANK ACCOUNT INFORMATION</h3>
      <div className="row my-4">
        <div className="col-md-4">
          <label className="my-2 d-block">Beneficiary Bank</label>
          {banksOptions.length > 0 && (
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              style={{ width: "90%" }}
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              options={banksOptions}
              defaultValue={banksOptions.find(
                ({ value }) => value === account.bank_code
              )}
              onChange={(choice) => handleSelectedBank(choice)}
            />
          )}
        </div>
        <div className="col-md-4">
          <label className="my-2 d-block">Beneficiary Bank Address</label>
          <input
            className="input-box px-3"
            placeholder="Beneficiary Bank Address"
            value={account.bank_address}
            onChange={(e) =>
              setAccount({ ...account, bank_address: e.target.value })
            }
          />
        </div>
        <div className="col-md-4">
          <label className="my-2 d-block">Beneficiary Account Number</label>
          <input
            className="input-box px-3"
            placeholder="Beneficiary Account Number"
            value={account.account_number}
            onChange={(e) =>
              setAccount({ ...account, account_number: e.target.value })
            }
          />
        </div>
        <div className="col-md-4">
          <label className="my-2 d-block">Beneficiary Name</label>
          <input
            className="input-box px-3"
            placeholder="Beneficiary Name"
            value={account.name}
            onChange={(e) => setAccount({ ...account, name: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <label className="my-2 d-block">Beneficiary Address</label>
          <input
            className="input-box px-3"
            placeholder="Beneficiary Address"
            value={account.address}
            onChange={(e) =>
              setAccount({ ...account, address: e.target.value })
            }
          />
        </div>
        <div className="col-md-4">
          <label className="my-2 d-block">Beneficiary Currency</label>
          {currenciesOptions.length > 0 && (
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              style={{ width: "90%" }}
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              options={currenciesOptions}
              defaultValue={currenciesOptions.find(
                ({ value }) => value === account.currency
              )}
              onChange={(choice) =>
                setAccount({ ...account, currency: choice.value })
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AccountForm;
