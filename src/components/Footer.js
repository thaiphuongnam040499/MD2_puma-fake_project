import React from 'react'

export default function Footer() {
  return (
    <div>
          <footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="bi bi-facebook"></i>
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="bi bi-twitter"></i>
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="bi bi-google"></i>
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
         <i className="bi bi-instagram"></i>
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="bi bi-github"></i>
        </a>
      </section>
      {/* Section: Social media */}
      {/* Section: Form */}
      <section className="">
        <form action="">
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-5 col-12">
              {/* Email input */}
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-auto">
              {/* Submit button */}
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </section>
      <section className="">
        {/*Grid row*/}
        <div className="row justify-content-center">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <p className="text-white">
                  Customer Service
                </p>
              </li>
              <li>
                <p className="text-white">
                  FAQs
                </p>
              </li>
              <li>
                <p className="text-white">
                  Contact Us
                </p>
              </li>
              <li>
                <p className="text-white">
                  Purchase a Digital Gift Card
                </p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <p className="text-white">
                  Company
                </p>
              </li>
              <li>
                <p className="text-white">
                  Press Center
                </p>
              </li>
              <li>
                <p className="text-white">
                  Investors
                </p>
              </li>
              <li>
                <p className="text-white">
                  Careers
                </p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        PUMA North America, Inc. Imprint and Legal Data
      </a>
    </div>
    {/* Copyright */}
  </footer>
    </div>
  )
}
