import { useEffect, useState } from "react";

const CompanyForm = ({
    company,
    setCompany,
}) => {
    useEffect(() => {
        setCompany({
            name: company.name || '',
            logo: company.logo || '',
            cr_no: company.cr_no || '',
            vat_registration_no: company.vat_registration_no || '',
            cr_copy: company.cr_copy || '',
            vat_certificate_copy: company.vat_certificate_copy || '',
            building_no: company.building_no || '',
            street_name: company.street_name || '',
            district_name: company.district_name || '',
            city_name: company.city_name || '',
            zip_code: company.zip_code || '',
            additional_number: company.additional_number || '',
            unit_number: company.unit_number || '',
            iban_no: company.iban_no || '',
            bank_name: company.bank_name || '',
            iban_certificate: company.iban_certificate || '',
        });
    }, []);

    return (
        <>
        <h3>COMPANY INFORMATION</h3>
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Name</label>
            <input
              className="input-box px-3"
              required
              placeholder="Name"
              value={company.name}
              onChange={(e) => setCompany({...company, name: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Logo</label>
            <input
              className=""
              type="file"
              accept="image/*"
              onChange={(e) => setCompany({...company, logo: e.target.files[0]})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">CR No.</label>
            <input
              className="input-box px-3"
              required
              placeholder="CR No."
              value={company.cr_no}
              onChange={(e) => setCompany({...company, cr_no: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">VAT Registration No.</label>
            <input
              className="input-box px-3"
              required
              placeholder="VAT Registration No."
              value={company.vat_registration_no }
              onChange={(e) => setCompany({...company, vat_registration_no : e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">CR Copy</label>
            <input
              className=""
              type="file"
              onChange={(e) => setCompany({...company, cr_copy: e.target.files[0]})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">VAT Certificate Copy</label>
            <input
              className=""
              type="file"
              onChange={(e) => setCompany({...company, vat_certificate_copy: e.target.files[0]})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Building No</label>
            <input
              className="input-box px-3"
              required
              placeholder="Building No"
              value={company.building_no}
              onChange={(e) => setCompany({...company, building_no: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Street Name</label>
            <input
              className="input-box px-3"
              required
              placeholder="Street Name"
              value={company.street_name}
              onChange={(e) => setCompany({...company, street_name: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">District Name</label>
            <input
              className="input-box px-3"
              required
              placeholder="District Name"
              value={company.district_name}
              onChange={(e) => setCompany({...company, district_name: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">City Name</label>
            <input
              className="input-box px-3"
              required
              placeholder="City Name"
              value={company.city_name}
              onChange={(e) => setCompany({...company, city_name: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Zip Code</label>
            <input
              className="input-box px-3"
              required
              placeholder="Zip Code"
              value={company.zip_code}
              onChange={(e) => setCompany({...company, zip_code: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Additional Number</label>
            <input
              className="input-box px-3"
              required
              placeholder="Additional Number"
              value={company.additional_number}
              onChange={(e) => setCompany({...company, additional_number: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Unit Number</label>
            <input
              className="input-box px-3"
              required
              placeholder="Unit Number"
              value={company.unit_number}
              onChange={(e) => setCompany({...company, unit_number: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">IBAN No</label>
            <input
              className="input-box px-3"
              required
              placeholder="IBAN No"
              value={company.iban_no}
              onChange={(e) => setCompany({...company, iban_no: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Bank Name</label>
            <input
              className="input-box px-3"
              required
              placeholder="Bank Name"
              value={company.bank_name}
              onChange={(e) => setCompany({...company, bank_name: e.target.value})}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">IBAN Certificate</label>
            <input
              className=""
              type="file"
              onChange={(e) => setCompany({...company, iban_certificate: e.target.files[0]})}
            />
          </div>
        </div>
        </>
    );
}
 
export default CompanyForm;