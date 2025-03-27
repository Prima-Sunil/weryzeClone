"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div
      className="bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#1c1d1d" }}
        >
          Refund policy
        </h1>
        <h2
          className="text-xl md:text-2xl font-bold text-center mb-8"
          style={{ color: "#1c1d1d" }}
        >
          REFUNDS AND CANCELLATION POLICY
        </h2>
        <p className="text-xl text-gray-800 mb-6">
          Updated 01 January 2024
        </p>

        <div className="space-y-6">
          <p className="text-[#1C1D1D] text-xl leading-relaxed" style={{ fontSize: '17px' }}>
            This Refunds and Cancellation Policy (Policy) applies to the
            services provided by VLPCPL ECOMMERCE PVT LTD (VLPCPL or we or our
            or us or Company) on its website www.weryze.com (Website). We may
            change this Policy, anytime by posting the changes on the Website
            and you agree that it shall be your responsibility to view the
            changes to this Policy, by reviewing the revised Policy. We will not
            be responsible for your failure to remain informed about such
            changes.
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            RETURNS POLICY
          </h3>
          <p className="text-[#1C1D1D] text-xl leading-relaxed mb-4" style={{ fontSize: '17px' }}>
            When is the replacement policy applicable?
          </p>
          <ul className="list-disc ml-6 mb-4 text-[#1C1D1D] text-xl" style={{ fontSize: '17px' }}>
            <li>
              You received the wrong item. Oops, this isn't very pleasant! We'll
              replace the item as soon as we are notified.
            </li>
            <li>
              You found an item missing. We will analyze and try to send you the
              missing item.
            </li>
            <li>
              You received a damaged/defective product. We will check and send
              you a replacement.
            </li>
          </ul>

          <p className="text-[#1c1d1d] leading-relaxed mb-4 font-bold">Note:</p>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            In case of replacement for damaged/missing/defective/wrong products,
            customers need to contact us within{" "}
            <span className="font-bold">48 hours</span>.
          </p>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            If you would like to replace the item, please note the product must
            not be used and shall be returned in the original packaging within{" "}
            <span className="font-bold">48 hours</span> of purchase.
          </p>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            Before applying for our replacement policy, you must showcase an
            unboxing video.
          </p>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            In addition to the unboxing video, we also request you share with us
            the following:
          </p>
          <ul className="list-disc ml-6 mb-4 text-[#1C1D1D] text-xl" style={{ fontSize: '17px' }}>
            <li>
              Picture of the outer box (front and back) with the carrier label.
            </li>
            <li>
              A small video with the functioning of the damaged item (if any).
            </li>
            <li>Pictures of all products received.</li>
          </ul>

          {/*  */}
          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            Products purchased from a third party
          </h3>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            If you have purchased a Ryze Gum product from a third-party reseller
            or a third-party platform, please contact your original point of
            sale to check if you are entitled to a refund under the
            third-party’s return policy. Should you need more information,
            please email us at{" "}
            <a
              href="mailto:hello@weryze.com"
              className="text-[#ff0025] hover:underline"
            >
              hello@weryze.com
            </a>
            .
          </p>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            In case of any queries, you are requested to email{" "}
            <a
              href="mailto:hello@weryze.com"
              className="text-[#ff0025] hover:underline"
            >
              hello@weryze.com
            </a>{" "}
            with the order details. If you have any complaints regarding returns
            or refunds, please refer to the Ryze Gum Terms and Conditions.
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            CANCELLATION POLICY
          </h3>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            1. What is Ryze Cancellation Policy?
          </h3>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            Once you raise a cancellation request, the cancellation of item(s)
            in your order happens immediately if the order has yet to be
            dispatched by us. No cancellation requests will be entertained if
            your order has already been dispatched. However, you can refuse to
            accept the order at the time of delivery if it has already been
            dispatched.
          </p>
          <p className="text-[#1c1d1d] leading-relaxed mb-4 font-bold">
            *Note- No return requests will be entertained if the customer
            accepts the delivery.
          </p>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            2.How do I cancel my order?
          </h3>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            For cancellation, please write to us at hello@weryze.com{" "}
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            3. How will I get refunded for the cancelled orders and how long
            will this process take?
          </h3>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            In case of cancellation before shipment, we process the refund
            within 5-7 business days after receiving the cancellation request.
            Please note that your refund will be processed, and a credit will
            automatically be applied to your original method of payment (wallet,
            card, UPI id or bank account) within 7 – 10 business days.{" "}
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#1c1d1d" }}>
            4. What if I used discount vouchers at the time of payment and I had
            to cancel my order?
          </h3>
          <p className="text-[#1c1d1d] leading-relaxed mb-4">
            If a discount voucher was used when you placed your order and the
            order was cancelled, we shall refund the actual paid amount and the
            discount voucher back to you. This scenario only applies if you
            request to cancel your order within 24 hours of placing the order.
          </p>

          <p className="text-[#1c1d1d] leading-relaxed mb-4">
          In case you have any complaints concerning the cancellation of your order, please refer to the Ryze Gum Terms and Conditions.
            
            .
          </p>
        </div>
      </div>
    </div>
  );
}
