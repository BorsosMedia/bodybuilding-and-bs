"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import AffirmLogo from "../media/affirm-logo.webp";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Modal = ({ onClose, TypeOfPlan }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [info, setInfo] = useState({
    shipping_name: "",

    shipping_address_line1: "",
    shipping_address_line2: "",
    shipping_address_city: "",
    shipping_address_state: "",
    shipping_address_zipcode: "",
    shipping_address_country: "",

    shipping_phone_number: "",
    shipping_email: "",

    billing_name: "",

    billing_address_line1: "",
    billing_address_line2: "",
    billing_address_city: "",
    billing_address_state: "",
    billing_address_zipcode: "",
    billing_address_country: "",

    billing_phone_number: "",
    billing_email: "",
  });

  function handleAffirmButton(data) {
    affirm.checkout({
      merchant: {
        user_confirmation_url: `${baseUrl}/checkout`,
        user_cancel_url: `${baseUrl}`,
        user_confirmation_url_action: "GET",
        name: "Bodybuilding & BS",
      },
      shipping: {
        name: {
          full: data.shipping_name,
        },
        address: {
          line1: data.shipping_address_line1,
          line2: data.shipping_address_line2,
          city: data.shipping_address_city,
          state: data.shipping_address_state,
          zipcode: data.shipping_address_zipcode,
          country: data.shipping_address_country,
        },
        phone_number: data.shipping_phone_number,
        email: data.shipping_email,
      },
      billing: {
        name: {
          full: data.billing_name,
        },
        address: {
          line1: data.billing_address_line1,
          line2: data.billing_address_line2,
          city: data.billing_address_city,
          state: data.billing_address_state,
          zipcode: data.billing_address_zipcode,
          country: data.billing_address_country,
        },
        phone_number: data.billing_phone_number,
        email: data.billing_email,
      },
      items: [
        {
          display_name: (() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
              case "f":
                return "Bloodwork";
              case "g":
                return "Gut Health Test";
            }
          })(),
          sku: (() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
              case "f":
                return "Bloodwork";
              case "g":
                return "Gut Health Test";
            }
          })(),
          unit_price: (() => {
            switch (TypeOfPlan) {
              case "a":
                return 29500;
              case "b":
                return 79650;
              case "d":
                return 150450;
              case "e":
                return 283200;
              case "f":
                return 29900;
              case "g":
                return 79900;
            }
          })(),
          qty: 1,
        },
      ],
      metadata: {
        mode: "modal",
      },
      order_id: crypto.randomUUID(),
      currency: "USD",
      shipping_amount: 0,
      tax_amount: 0,
      total: (() => {
        switch (TypeOfPlan) {
          case "a":
            return 29500;
          case "b":
            return 79650;
          case "d":
            return 150450;
          case "e":
            return 283200;
          case "f":
            return 29900;
          case "g":
            return 79900;
        }
      })(),
    });

    affirm.checkout.open();
  }

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const formSchema = z.object({
    shipping_name: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input your full name" })
      .includes(" "),

    shipping_address_line1: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input a valid address" }),
    shipping_address_line2: z.string(),
    shipping_address_city: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input the city name" }),
    shipping_address_state: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input the state name" })
      .toUpperCase(),
    shipping_address_zipcode: z
      .string({ required_error: "Please, complete this field" })
      .min(1, { message: "Please, input a valid ZIP Code" }),
    shipping_address_country: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input the country name" })
      .toUpperCase(),

    shipping_phone_number: z
      .string({
        required_error: "Please, complete this field",
      })
      .min(3, { message: "Please, complete this field" }),
    shipping_email: z
      .string({ required_error: "Please, complete this field" })
      .email({ message: "Invalid email address" })
      .toLowerCase(),

    billing_name: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input your full name" })
      .includes(" "),

    billing_address_line1: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input a valid address" }),
    billing_address_line2: z.string(),
    billing_address_city: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input the city name" }),
    billing_address_state: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input the state name" })
      .toUpperCase(),
    billing_address_zipcode: z
      .string({ required_error: "Please, complete this field" })
      .min(1, { message: "Please, input a valid ZIP Code" }),
    billing_address_country: z
      .string({ required_error: "Please, complete this field" })
      .min(2, { message: "Please, input the country name" })
      .toUpperCase(),

    billing_phone_number: z
      .string({
        required_error: "Please, complete this field",
      })
      .min(3, { message: "Please, complete this field" }),
    billing_email: z
      .string({ required_error: "Please, complete this field" })
      .email({ message: "Invalid email address" })
      .toLowerCase(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a
              href="#"
              onClick={handleCloseClick}
              className="modal-close-button"
            >
              x
            </a>
          </div>
          <div className="modal-body">
            <form action="">
              <fieldset className="modal_fieldset">
                <h4 className="modal_form_title">Shipping Information</h4>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_name">
                    Full Name: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    onChange={handleChange}
                    id="shipping_name"
                    name="shipping_name"
                    required
                    {...register("shipping_name")}
                  />
                  {errors.shipping_name && (
                    <span className="modal_error">
                      {errors.shipping_name.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_address_line1">
                    Address 1: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="633 Folsom St"
                    onChange={handleChange}
                    id="shipping_address_line1"
                    name="shipping_address_line1"
                    required
                    {...register("shipping_address_line1")}
                  />
                  {errors.shipping_address_line1 && (
                    <span className="modal_error">
                      {errors.shipping_address_line1.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_address_line2">Address 2:</label>
                  <input
                    type="text"
                    placeholder="apt.2 (optional)"
                    onChange={handleChange}
                    id="shipping_address_line2"
                    name="shipping_address_line2"
                    {...register("shipping_address_line2")}
                  />
                  {errors.shipping_address_line2 && (
                    <span className="modal_error">
                      {errors.shipping_address_line2.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_address_city">
                    City: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="San Francisco"
                    onChange={handleChange}
                    id="shipping_address_city"
                    name="shipping_address_city"
                    required
                    {...register("shipping_address_city")}
                  />
                  {errors.shipping_address_city && (
                    <span className="modal_error">
                      {errors.shipping_address_city.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_address_state">
                    State: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="CA"
                    onChange={handleChange}
                    id="shipping_address_state"
                    name="shipping_address_state"
                    required
                    {...register("shipping_address_state")}
                  />
                  {errors.shipping_address_state && (
                    <span className="modal_error">
                      {errors.shipping_address_state.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_address_zipcode">
                    ZIP Code: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="94107"
                    onChange={handleChange}
                    id="shipping_address_zipcode"
                    name="shipping_address_zipcode"
                    required
                    {...register("shipping_address_zipcode")}
                  />
                  {errors.shipping_address_zipcode && (
                    <span className="modal_error">
                      {errors.shipping_address_zipcode.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_address_country">
                    Country: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="US"
                    onChange={handleChange}
                    id="shipping_address_country"
                    name="shipping_address_country"
                    required
                    {...register("shipping_address_country")}
                  />
                  {errors.shipping_address_country && (
                    <span className="modal_error">
                      {errors.shipping_address_country.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_phone_number">
                    Phone Number: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="4151234567"
                    onChange={handleChange}
                    id="shipping_phone_number"
                    name="shipping_phone_number"
                    required
                    {...register("shipping_phone_number")}
                  />
                  {errors.shipping_phone_number && (
                    <span className="modal_error">
                      {errors.shipping_phone_number.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="shipping_email">
                    Email: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    onChange={handleChange}
                    id="shipping_email"
                    name="shipping_email"
                    required
                    {...register("shipping_email")}
                  />
                  {errors.shipping_email && (
                    <span className="modal_error">
                      {errors.shipping_email.message}
                    </span>
                  )}
                </div>
              </fieldset>
              <fieldset className="modal_fieldset">
                <h4 className="modal_form_title">Billing Information</h4>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_name">
                    Full Name: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    onChange={handleChange}
                    id="billing_name"
                    name="billing_name"
                    required
                    {...register("billing_name")}
                  />
                  {errors.billing_name && (
                    <span className="modal_error">
                      {errors.billing_name.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_address_line1">
                    Address 1: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="633 Folsom St"
                    onChange={handleChange}
                    id="billing_address_line1"
                    name="billing_address_line1"
                    required
                    {...register("billing_address_line1")}
                  />
                  {errors.billing_address_line1 && (
                    <span className="modal_error">
                      {errors.billing_address_line1.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_address_line2">Address 2:</label>
                  <input
                    type="text"
                    placeholder="apt.2 (optional)"
                    onChange={handleChange}
                    id="billing_address_line2"
                    name="billing_address_line2"
                    {...register("billing_address_line2")}
                  />
                  {errors.billing_address_line2 && (
                    <span className="modal_error">
                      {errors.billing_address_line2.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_address_city">
                    City: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="San Francisco"
                    onChange={handleChange}
                    id="billing_address_city"
                    name="billing_address_city"
                    required
                    {...register("billing_address_city")}
                  />
                  {errors.billing_address_city && (
                    <span className="modal_error">
                      {errors.billing_address_city.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_address_state">
                    State: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="CA"
                    onChange={handleChange}
                    id="billing_address_state"
                    name="billing_address_state"
                    required
                    {...register("billing_address_state")}
                  />
                  {errors.billing_address_state && (
                    <span className="modal_error">
                      {errors.billing_address_state.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_address_zipcode">
                    ZIP Code: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="94107"
                    onChange={handleChange}
                    id="billing_address_zipcode"
                    name="billing_address_zipcode"
                    required
                    {...register("billing_address_zipcode")}
                  />
                  {errors.billing_address_zipcode && (
                    <span className="modal_error">
                      {errors.billing_address_zipcode.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_address_country">
                    Country: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="US"
                    onChange={handleChange}
                    id="billing_address_country"
                    name="billing_address_country"
                    required
                    {...register("billing_address_country")}
                  />
                  {errors.billing_address_country && (
                    <span className="modal_error">
                      {errors.billing_address_country.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_phone_number">
                    Phone Number: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="4151234567"
                    onChange={handleChange}
                    id="billing_phone_number"
                    name="billing_phone_number"
                    required
                    {...register("billing_phone_number")}
                  />
                  {errors.billing_phone_number && (
                    <span className="modal_error">
                      {errors.billing_phone_number.message}
                    </span>
                  )}
                </div>
                <div className="modal_form_label_input">
                  <label htmlFor="billing_email">
                    Email: <span className="modal_required">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    onChange={handleChange}
                    id="billing_email"
                    name="billing_email"
                    required
                    {...register("billing_email")}
                  />
                  {errors.billing_email && (
                    <span className="modal_error">
                      {errors.billing_email.message}
                    </span>
                  )}
                </div>
              </fieldset>

              <a className="purchase-button-link">
                <button
                  type="submit"
                  className="button button--affirm"
                  onClick={handleSubmit(handleAffirmButton)}
                >
                  Pay with
                  <Image
                    src={AffirmLogo}
                    alt="Affirm Logo"
                    className="img--afirm"
                  />
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
