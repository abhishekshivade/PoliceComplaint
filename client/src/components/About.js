import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen p-4 flex justify-center items-center -mb-14">
      <div className=" p-8 bg-white  rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Welcome to Rupay Bank – Your Trusted Financial Partner
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Rupay Bank, we are dedicated to providing a wide range of
              financial services tailored to meet the diverse needs of our
              customers. Since our inception, we have committed ourselves to
              fostering a banking experience that is secure, convenient, and
              innovative.
            </p>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals and businesses by offering
              comprehensive financial solutions that support their growth and
              financial well-being. We strive to be a bank that understands the
              unique financial needs of our customers and provides personalized
              services to help them achieve their goals.
            </p>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Our Services
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Loans:</strong> We offer a variety of loan products
                designed to meet the financial needs of our customers. Whether
                you are looking to buy a home, finance a car, or fund a personal
                project, our loan solutions are flexible and competitively
                priced.
              </li>
              <li>
                <strong>Credit Cards:</strong> Our range of credit cards offers
                benefits and rewards that cater to different spending habits and
                lifestyles. From cashback and rewards points to travel and
                entertainment perks, our credit cards provide exceptional value
                and convenience.
              </li>
              <li>
                <strong>Fixed Deposit:</strong> Rupay Bank’s fixed deposit
                accounts offer attractive interest rates and flexible tenures to
                help you grow your savings with peace of mind. Secure your
                financial future with our reliable fixed deposit schemes.
              </li>
              <li>
                <strong>NRI Banking:</strong> We understand the unique banking
                needs of Non-Resident Indians (NRIs). Our NRI Banking services
                include specially designed savings accounts, investment options,
                and remittance facilities to make banking seamless and
                accessible no matter where you are in the world.
              </li>
              <li>
                <strong>Personal Loans:</strong> Our personal loans are designed
                to provide you with quick and easy access to funds when you need
                them the most. Whether it's for medical emergencies, education,
                or any other personal needs, our loans are here to support you.
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Additional Services
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Digital Banking:</strong> Embrace the future of banking
                with our cutting-edge digital services. Our online and mobile
                banking platforms offer you the convenience to manage your
                finances anytime, anywhere. From transferring funds to paying
                bills and checking account statements, our digital solutions
                make banking effortless.
              </li>
              <li>
                <strong>Investment Services:</strong> We offer a range of
                investment services to help you build and manage your wealth.
                Our financial advisors provide expert guidance on mutual funds,
                stocks, bonds, and other investment opportunities to ensure your
                financial growth.
              </li>
              <li>
                <strong>Customer Support:</strong> At Rupay Bank, we pride
                ourselves on our customer-centric approach. Our dedicated
                customer support team is always ready to assist you with any
                queries or concerns. We believe in building long-term
                relationships based on trust and transparency.
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Why Choose Rupay Bank?
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Trust and Security:</strong> We prioritize the safety
                and security of your financial information. Our robust security
                systems and protocols ensure that your banking experience is
                secure and confidential.
              </li>
              <li>
                <strong>Innovation:</strong> We continually invest in technology
                and innovation to provide you with the latest banking solutions.
                Our goal is to make banking more convenient, efficient, and
                user-friendly.
              </li>
              <li>
                <strong>Customer Focus:</strong> Your satisfaction is our top
                priority. We listen to your feedback and continuously strive to
                enhance our services to better meet your needs.
              </li>
            </ul>
          </section>
        </div>

        <p className="text-center text-gray-700 mt-8 text-lg leading-relaxed">
          Join us at Rupay Bank and experience a banking partnership that is
          dedicated to your financial success. Whether you're planning for the
          future, managing your daily finances, or seeking expert financial
          advice, we are here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
