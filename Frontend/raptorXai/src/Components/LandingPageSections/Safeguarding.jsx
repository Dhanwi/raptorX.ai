import React from "react";

const Safeguarding = () => {
  return (
    <>
      <div className="content-container pb-20 px-4 lg:px-6">
        <img className="background-image-3" src="background-image-3.svg"></img>
        <div id="_bg__frame_67">
          <div id="adjust-text" className="text-3xl text-center">
            Safeguarding Trust, Defining Security: Your Partner in Fraud
            Prevention Excellence
          </div>
          <div className="text-center font-Gilroy-SemiBold text-2xl font-normal leading-normal max-w-34rem text-white flex md:hidden">
            Full confidence and security, no matter what comes your way.
          </div>
        </div>
        <div className="transaction-image-wrapper">
          <div className="authorized-section">
            <img src="object1.svg" className="max-h-96"></img>
          </div>
          <div className="wallet-info">
            <div className="transaction-title">
              <img src="wallet-icon.svg"></img>
              <h1>TRANSACTION FORTIFICATION</h1>
            </div>
            <div className="fraud-handling-info">
              Enhance your transactional prowess with RaptorX&apos;s robust
              solutions. From deterring criminal fraud to streamlining
              chargeback management, countering friendly fraud, and bolstering
              revenue recovery – all accessible through our user-friendly
              platform. Boost authorized transactions and minimize false
              positives, ensuring a secure and efficient transaction experience.
            </div>
            <div className="trust-safety-info">
              Learn more about trust and safety in payments
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
        </div>
        <div className="transaction-image-wrapper">
          <div className="wallet-info lg:order-first">
            <div className="transaction-title">
              <img src="profile-icon.svg"></img>
              <h1>PRECISE USER PROFILING</h1>
            </div>
            <div className="fraud-handling-info">
              Harness extensive data-driven profiles with RaptorX, unveiling
              valuable insights such as spending likelihood, purchase patterns,
              and payment history. Pinpoint your ideal audience and engage them
              at the opportune juncture, delivering a secure and delightful
              experience that strengthens your brand connection.
            </div>
            <div className="trust-safety-info">
              Learn more about customer identity data
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
          <div className="authorized-section order-first lg:order-last">
            <img src="object2.svg" className="max-h-96"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safeguarding;
