import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <main className="container mx-auto px-10 py-16 lg:px-20">
        {/* Header Section */}
        <section className="mb-20 text-center">
          <h1 className="mb-4 font-primary text-5xl font-extrabold text-black">
            About Us
          </h1>
          <p className="text-xl text-gray-800">
            Revolutionizing Club Management at KLS GIT
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20 flex flex-col items-center gap-12 lg:flex-row">
          <Image
            src="/img/creation.jpg" // Replace with actual image path
            alt="Our Mission"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Helping Students of KLS GIT Grow Better
            </h2>
            <p className="text-lg text-gray-600">
              We are committed to building a centralized platform that
              revolutionizes how clubs and students interact. By simplifying
              event organization and communication, we aim to empower students
              and club organizers to focus on what matters most: learning and
              collaboration.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="mb-4 text-lg text-gray-600">
              Point Quest was born out of a vision to streamline club
              activities, making them more efficient, engaging, and impactful.
              By providing a centralized platform, we empower students to take
              an active role in their academic and extracurricular journey.
            </p>
            <p className="text-lg text-gray-600">
              Join us in building a vibrant, collaborative community at KLS GIT.
            </p>
          </div>
          <Image
            src="/img/studentss.jpg" // Replace with actual image path
            alt="Our Story"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </section>

        {/* Services Section */}
        <section className="mb-20 mt-20 text-center">
          <h2 className="mb-8 text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Event Management
              </h3>
              <p className="text-gray-600">
                Clubs can post events and manage their schedules effortlessly.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Activity Points
              </h3>
              <p className="text-gray-600">
                Students earn activity points for participating in events,
                motivating greater involvement.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Certification
              </h3>
              <p className="text-gray-600">
                Participants receive certificates as recognition for their
                contributions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
