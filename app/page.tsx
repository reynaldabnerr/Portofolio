export const metadata = {
  title: "Reynald Abner Tananda - Portfolio",
  description: "Portfolio of Reynald Abner Tananda - Mobile and Web Developer",
};

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-sans">
      {/* Header */}
      <header className="flex flex-col items-center justify-center bg-blue-900 text-white p-8 sm:p-12 animate-fade-in">
        <Image
          src="/assets/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full transition-transform duration-700 hover:scale-110"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 animate-slide-in-down">
          Reynald Abner Tananda
        </h1>
        <p className="text-md sm:text-lg font-light animate-slide-in-up text-center">
          Mobile App Developer | Web Developer | CTF Player | Freelancer
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center p-6 sm:p-8">
        {/* About Me Section */}
        <section className="max-w-4xl text-center mb-12 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-sm sm:text-base">
            Hi! I’m Reynald Abner Tananda, a passionate developer with a strong
            interest in mobile and web development. I have experience in
            building mobile and web applications and enjoy tackling complex
            problems to create elegant solutions. Additionally, I am an active
            CTF (Capture the Flag) player, which reflects my passion for
            cybersecurity and problem-solving. I take pride in my ability to
            develop robust and innovative mobile or web applications.
          </p>
        </section>

        {/* Projects Section */}
        <section className="max-w-4xl text-center mb-12 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Project Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Project Mobile App
              </h3>
              <p className="text-sm sm:text-base text-black">
                A modern social media platform designed to connect alumni of
                Fakultas Teknik Universitas Hasanuddin (FT-UH). This platform
                allows alumni to seamlessly network, share updates, and
                collaborate on professional and academic opportunities. It
                serves as a digital hub for fostering meaningful connections
                among alumni.
              </p>
              <a
                href="https://github.com/arctanziru/alumni_hub_ft_uh.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 block"
              >
                View on GitHub
              </a>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Project Web App
              </h3>
              <p className="text-sm sm:text-base text-black">
                Jokka Web is a travel platform that showcases the rich culture
                and attractions of Makassar. It allows users to explore popular
                events, destinations, and culinary delights unique to the
                region. With its user-friendly interface, Jokka Web aims to
                promote Makassar as a must-visit destination while providing a
                seamless travel planning experience.
              </p>
              <a
                href="https://github.com/reynaldabnerr/Jokka-Web.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl text-center animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-sm sm:text-base">
            Feel free to reach out to me via email or follow me on social media.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-lg sm:text-2xl">
            {/* Email */}
            <a
              href="mailto:reynald030685@gmail.com"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/reynaldabnerr"
              className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* Instagram */}
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
      <footer className="flex items-center justify-center bg-gray-900 text-white py-4 animate-fade-in">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Reynald Abner Tananda. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
