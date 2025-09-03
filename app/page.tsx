"use client";

import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-sans w-full">
      {/* Header */}
      <header className="flex flex-col items-center justify-center bg-gray-800 text-white p-6 sm:p-12 w-full">
        <Image
          src="/assets/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full transition-transform duration-700 hover:scale-110"
        />
        <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-center">
          <Typewriter
            words={[
              "Hello, everyone!",
              "I'm Reynald Abner Tananda",
              "A Mobile App Developer",
              "A Web Developer",
              "And a CTF Player",
              "Welcome to My Portfolio",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-sm sm:text-lg font-light animate-slide-in-up text-center">
          Mobile App Developer | Web Developer | CTF Player
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center p-4 sm:p-8 w-full">
        {/* About Me Section */}
        <section className="max-w-full sm:max-w-4xl text-center mb-12 animate-fade-in-up">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-xs sm:text-base">
            Hi! I’m Reynald Abner Tananda, a passionate developer with a strong
            interest in mobile and web development. I have experience in
            building mobile and web applications and enjoy tackling complex
            problems to create elegant solutions. Additionally, I am an active
            CTF (Capture the Flag) player, which reflects my passion for
            cybersecurity and problem-solving.
          </p>
        </section>

        {/* Projects Section */}
        <section className="max-w-full sm:max-w-4xl text-center mb-12 animate-fade-in-up">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
            {/* Project Card 1 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-md sm:text-xl font-semibold mb-2 text-black">
                Project Mobile App
              </h3>
              <p className="text-xs sm:text-base text-black text-justify">
                A modern social media platform designed to connect alumni of
                Fakultas Teknik Universitas Hasanuddin (FT-UH). This platform
                enables alumni to network seamlessly, share updates, and
                collaborate on professional and academic opportunities. It also
                features tools for event announcements and discussion forums to
                keep alumni engaged with the community. By fostering meaningful
                connections, the platform helps strengthen the bond between
                alumni and their alma mater.
              </p>
              <a
                href="https://github.com/arctanziru/alumni_hub_ft_uh.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline mt-4 block"
              >
                View on GitHub
              </a>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-md sm:text-xl font-semibold mb-2 text-black">
                Project Web App
              </h3>
              <p className="text-xs sm:text-base text-black text-justify">
                Jokka Web is a travel platform that showcases the rich culture
                and attractions of Makassar. It allows users to explore popular
                events, breathtaking destinations, and unique culinary
                experiences that are deeply rooted in the traditions of
                Makassar. With an intuitive and user-friendly interface, Jokka
                Web aims to provide a seamless travel planning experience,
                helping visitors uncover the hidden gems of Makassar while
                promoting local tourism and fostering cultural appreciation.
              </p>
              <a
                href="https://github.com/reynaldabnerr/Jokka-Web.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline mt-4 block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="w-full text-center mb-12 animate-fade-in-up">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4 ">
            GitHub Activity
          </h2>
          <p className="text-sm sm:text-base mb-4 hover:text-gray-600 transition duration-300">
            Here's an overview of my GitHub contributions and coding activity.
          </p>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[350px] sm:max-w-[900px] flex justify-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <GitHubCalendar username="reynaldabnerr" colorScheme="dark" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-full sm:max-w-4xl text-center animate-fade-in-up">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-sm sm:text-base">
            Feel free to reach out to me via email or follow me on social media.
          </p>
            <div className="flex justify-center gap-4 sm:gap-6 mt-4 text-md sm:text-4xl text-lg">
            <a
              href="mailto:reynald030685@gmail.com"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/reynaldabnerr"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/reynaldabnerr/"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center bg-gray-900 text-white py-4">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Reynald Abner Tananda. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
