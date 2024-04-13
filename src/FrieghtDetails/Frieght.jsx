import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Barcode from "react-barcode";
import "./Frieght-style.css";

const generateTrackingId = () => {
  return Math.floor(Math.random() * 1000000000);
};

const AddFreightDetails = () => {
  const initialValues = {
    shipmentType: "",
    weight: "",
    destination: "",
    shippingCompany: "",
    deliveryDate: "",
  };

  const validationSchema = Yup.object().shape({
    shipmentType: Yup.string().required("Shipment Type is required"),
    weight: Yup.number()
      .min(0, "Weight must be a positive number")
      .required("Weight is required"),
    destination: Yup.string().required("Destination is required"),
    shippingCompany: Yup.string().required("Shipping Company is required"),
    deliveryDate: Yup.date().required("Delivery Date is required"),
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [trackingId, setTrackingId] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    const amountPerKg = 100; // Rate per kg
    const total = values.weight * amountPerKg; // Calculate total amount
    window.alert(
      `Your Freight details successfully Booked. Total Amount: ${total} Rs`
    );
    const id = generateTrackingId();
    setTrackingId(id);
    setSubmittedData({ ...values, totalAmount: total });
    setTotalAmount(total);
    resetForm();
  };

  return (
    <>
      <div className="freight-container">
        <div className="freight-details">
          <h1>Add Freight Details</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="frieght-options">
                  <label htmlFor="shipmentType">Shipment Type</label>
                  <br />
                  <Field as="select" id="shipmentType" name="shipmentType">
                    <option value="">Select Shipment Type</option>
                    <option value="Road Shipment">Road Shipment</option>
                    <option value="Water Shipment">Water Shipment</option>
                    <option value="Air Shipment">Air Shipment</option>
                  </Field>
                  <ErrorMessage
                    name="shipmentType"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="frieght-options">
                  <label htmlFor="weight">Weight (kg)</label>
                  <br />
                  <Field
                    type="number"
                    id="weight"
                    name="weight"
                    placeHolder="Enter Weight"
                  />
                  <ErrorMessage
                    name="weight"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="frieght-options">
                  <label htmlFor="destination">Destination</label>
                  <br />
                  <Field
                    type="text"
                    id="destination"
                    name="destination"
                    placeHolder="Enter Destination"
                  />
                  <ErrorMessage
                    name="destination"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="frieght-options">
                  <label htmlFor="shippingCompany">Shipping Company</label>
                  <br />
                  <Field
                    type="text"
                    id="shippingCompany"
                    name="shippingCompany"
                    placeHolder="Enter Shipping Company"
                  />
                  <ErrorMessage
                    name="shippingCompany"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="frieght-options">
                  <label htmlFor="deliveryDate">Delivery Date</label>
                  <br />
                  <Field type="date" id="deliveryDate" name="deliveryDate" />
                  <ErrorMessage
                    name="deliveryDate"
                    component="div"
                    className="error"
                  />
                </div>

                <button className="frieght-options-btn" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {submittedData && (
        <div className="table-container">
          <h2>Tracking ID</h2>
          <p className="tracking-id-caption">
            (Note : Note Your tracking Id to see your delivery updates ASAP)
          </p>
          <Barcode value={String(trackingId)} className="barcode" />

          <h2 className="table-caption">Your Freight Details</h2>
          <table className="freight-details-table">
            <tbody>
              <tr>
                <td>Shipment Type:</td>
                <td>{submittedData.shipmentType}</td>
              </tr>
              <tr>
                <td>Weight (kg):</td>
                <td>{submittedData.weight}</td>
              </tr>
              <tr>
                <td>Total Amount (Rs):</td>
                <td>{totalAmount}</td>
              </tr>
              <tr>
                <td>Destination:</td>
                <td>{submittedData.destination}</td>
              </tr>
              <tr>
                <td>Shipping Company:</td>
                <td>{submittedData.shippingCompany}</td>
              </tr>
              <tr>
                <td>Delivery Date:</td>
                <td>{submittedData.deliveryDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AddFreightDetails;
