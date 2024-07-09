import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-4 flex justify-center items-center -mb-14">
      <div className="p-8 bg-white rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Welcome to the Online Police Complaint Portal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Online Police Complaint Portal is committed to providing a
              secure, efficient, and accessible platform for citizens to report
              crimes and lodge complaints. We strive to enhance public safety
              through timely and transparent resolution of complaints.
            </p>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower citizens by offering a convenient
              and reliable way to interact with law enforcement agencies.
              We aim to ensure justice and security by addressing complaints
              promptly and effectively.
            </p>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Our Services
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Complaint Registration:</strong> Easily file complaints
                related to any criminal activity or public safety issue.
              </li>
              <li>
                <strong>Complaint Tracking:</strong> Track the status of your
                complaint and receive updates in real-time.
              </li>
              <li>
                <strong>Emergency Services:</strong> Quick access to emergency
                contact numbers and immediate assistance.
              </li>
              <li>
                <strong>Information & Resources:</strong> Access valuable
                information on crime prevention, safety tips, and legal rights.
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Additional Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Anonymous Reporting:</strong> Submit complaints
                anonymously to ensure your privacy and safety.
              </li>
              <li>
                <strong>Mobile Accessibility:</strong> Our portal is optimized
                for mobile devices, allowing you to file and track complaints on
                the go.
              </li>
              <li>
                <strong>Community Engagement:</strong> Participate in community
                forums and discussions to help improve public safety in your area.
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              Why Choose Our Portal?
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>Reliability:</strong> Our platform ensures your
                complaints are handled with utmost priority and confidentiality.
              </li>
              <li>
                <strong>Accessibility:</strong> Available 24/7 to cater to your
                needs at any time.
              </li>
              <li>
                <strong>Transparency:</strong> We provide clear and transparent
                communication regarding the status and progress of your complaints.
              </li>
            </ul>
          </section>
        </div>

        <p className="text-center text-gray-700 mt-8 text-lg leading-relaxed">
          Join us in making our community safer and more secure. Report any
          suspicious activities or crimes through our Online Police Complaint
          Portal, and contribute to the well-being of our society.
        </p>
      </div>
    </div>
  );
};

export default About;
