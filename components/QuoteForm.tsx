"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [lengthError, setLengthError] = useState("");
  const [widthError, setWidthError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function validateLength(value: string) {
    if (!value) {
      setLengthError("");
      return;
    }

    const number = Number(value);

    if (number <= 0) {
      setLengthError("Please enter a valid length.");
    } else if (number > 24) {
      setLengthError("Maximum length is 24 inches.");
    } else {
      setLengthError("");
    }
  }

  function validateWidth(value: string) {
    if (!value) {
      setWidthError("");
      return;
    }

    const number = Number(value);

    if (number <= 0) {
      setWidthError("Please enter a valid width.");
    } else if (number > 12) {
      setWidthError("Maximum width is 12 inches.");
    } else {
      setWidthError("");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const length = Number(formData.get("length"));
    const width = Number(formData.get("width"));

    let invalid = false;

    setSubmitError("");

    if (!length || length <= 0) {
      setLengthError("Please enter a valid length.");
      invalid = true;
    } else if (length > 24) {
      setLengthError("Maximum length is 24 inches.");
      invalid = true;
    } else {
      setLengthError("");
    }

    if (!width || width <= 0) {
      setWidthError("Please enter a valid width.");
      invalid = true;
    } else if (width > 12) {
      setWidthError("Maximum width is 12 inches.");
      invalid = true;
    } else {
      setWidthError("");
    }

    if (invalid) {
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Something went wrong while sending your request."
        );
      }

      formElement.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl font-black text-green-700">
          ✓
        </div>

        <h3 className="mt-6 text-3xl font-black">
          Quote request received.
        </h3>

        <p className="mt-4 max-w-xl leading-7 text-zinc-600">
          Thanks for contacting Harbour Vinyl Co. We&apos;ve received
          your request and will review the details before getting back
          to you with pricing.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSubmitError("");
            setLengthError("");
            setWidthError("");
          }}
          className="mt-8 rounded-full bg-black px-6 py-3 font-bold text-white transition hover:bg-zinc-800"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10"
    >
      {/* NAME + EMAIL */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold">
            Your Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold">
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
          />
        </div>
      </div>

      {/* PHONE */}
      <div className="mt-6">
        <label htmlFor="phone" className="text-sm font-bold">
          Phone Number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(902) 555-1234"
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />
      </div>

      {/* DECAL TYPE */}
      <div className="mt-6">
        <label htmlFor="decalType" className="text-sm font-bold">
          What are you looking for? *
        </label>

        <select
          id="decalType"
          name="decalType"
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        >
          <option value="" disabled>
            Select an option
          </option>

          <option value="Vehicle Decal">
            Vehicle Decal
          </option>

          <option value="Business / Logo Decal">
            Business / Logo Decal
          </option>

          <option value="Window Decal">
            Window Decal
          </option>

          <option value="Laptop / Personal Decal">
            Laptop / Personal Decal
          </option>

          <option value="Other Custom Design">
            Other Custom Design
          </option>
        </select>
      </div>

      {/* SIZE */}
      <div className="mt-6">
        <label className="text-sm font-bold">
          Approximate Size *
        </label>

        <p className="mt-1 text-xs text-zinc-500">
          Enter the dimensions in inches.
        </p>

        <div className="mt-3 grid grid-cols-2 gap-4">

          {/* LENGTH */}
          <div>
            <label
              htmlFor="length"
              className="text-xs font-semibold text-zinc-600"
            >
              Length
            </label>

            <div className="relative mt-2">
              <input
                id="length"
                name="length"
                type="number"
                min="0.5"
                step="0.5"
                required
                placeholder="24"
                onChange={(e) => validateLength(e.target.value)}
                className={`w-full rounded-xl border bg-zinc-50 px-4 py-3.5 pr-14 outline-none transition focus:ring-2 ${
                  lengthError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                    : "border-zinc-200 focus:border-red-500 focus:ring-red-100"
                }`}
              />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-zinc-400">
                in
              </span>
            </div>

            {lengthError && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {lengthError}
              </p>
            )}
          </div>

          {/* WIDTH */}
          <div>
            <label
              htmlFor="width"
              className="text-xs font-semibold text-zinc-600"
            >
              Width
            </label>

            <div className="relative mt-2">
              <input
                id="width"
                name="width"
                type="number"
                min="0.5"
                step="0.5"
                required
                placeholder="12"
                onChange={(e) => validateWidth(e.target.value)}
                className={`w-full rounded-xl border bg-zinc-50 px-4 py-3.5 pr-14 outline-none transition focus:ring-2 ${
                  widthError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                    : "border-zinc-200 focus:border-red-500 focus:ring-red-100"
                }`}
              />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-zinc-400">
                in
              </span>
            </div>

            {widthError && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {widthError}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* QUANTITY */}
      <div className="mt-6">
        <label htmlFor="quantity" className="text-sm font-bold">
          Quantity *
        </label>

        <input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          defaultValue="1"
          required
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />
      </div>

      {/* DESIGN FILE */}
      <div className="mt-6">
        <label htmlFor="design" className="text-sm font-bold">
          Upload Design / Reference
        </label>

        <div className="mt-2 rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50 p-6">
          <input
            id="design"
            name="design"
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.svg"
            className="block w-full text-sm text-zinc-600 file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-5 file:py-2.5 file:font-bold file:text-white hover:file:bg-zinc-800"
          />

          <p className="mt-3 text-xs text-zinc-500">
            JPG, PNG, PDF or SVG. Maximum 10 MB.
          </p>
        </div>
      </div>

      {/* API ERROR */}
      {submitError && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-700">
            {submitError}
          </p>
        </div>
      )}

      {/* SUBMITTING BUTTON */}
      <button
        type="submit"
        disabled={
          status === "sending" ||
          Boolean(lengthError) ||
          Boolean(widthError)
        }
        className="mt-8 w-full rounded-full bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        {status === "sending"
          ? "Sending Request..."
          : "Request My Free Quote"}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
        No payment is required. We&apos;ll contact you with pricing
        before anything is produced.
      </p>
    </form>
  );
}