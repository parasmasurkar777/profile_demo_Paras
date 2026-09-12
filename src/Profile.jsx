import React from "react";

export default function Profile() {
  const skills = [
    { name: "React JS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Tailwind CSS", level: "92%" },
    { name: "Python", level: "80%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "Artificial Intelligence", level: "75%" },
  ];

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building responsive, modern and high-performance websites using React and modern frontend technologies.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      description:
        "Creating dynamic and interactive web applications using React, APIs, components and modern development practices.",
    },
    {
      icon: "🤖",
      title: "AI Projects",
      description:
        "Exploring Artificial Intelligence and Python to build intelligent applications and solve real-world problems.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Exam Seating Arrangement System",
      category: "Python • Database • Web",
      description:
        "An intelligent system designed to automatically allocate and reshuffle examination seating arrangements for students from multiple branches.",
      icon: "🎓",
    },
    {
      number: "02",
      title: "React Product Store",
      category: "React • API • JavaScript",
      description:
        "A modern e-commerce product application using API integration, dynamic routing and interactive product details.",
      icon: "🛒",
    },
    {
      number: "03",
      title: "AI Learning Projects",
      category: "Python • AI • Machine Learning",
      description:
        "A collection of Artificial Intelligence experiments and projects focused on learning and implementing intelligent systems.",
      icon: "🤖",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background Effects */}

      <div className="fixed left-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]"></div>

      <div className="fixed right-0 top-96 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]"></div>

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-3xl font-bold tracking-tight">
            Paras<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 lg:flex">
            <a href="#home" className="transition hover:text-blue-400">
              Home
            </a>

            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>

            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>

            <a href="#services" className="transition hover:text-blue-400">
              Services
            </a>

            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500"
          >
            Let's Talk →
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
              Available for opportunities
            </div>

            <p className="text-lg text-blue-400">HELLO, I'M</p>

            <h1 className="mt-4 text-6xl font-black leading-tight sm:text-7xl lg:text-8xl">
              Paras
              <br />

              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Masurkar
              </span>
            </h1>

            <h2 className="mt-7 text-2xl font-medium text-gray-300 sm:text-3xl">
              Building Ideas Into
              <span className="text-blue-400"> Digital Experiences.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              I'm an aspiring developer and Artificial Intelligence student
              passionate about creating modern web applications, solving
              real-world problems and continuously learning new technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500"
              >
                Explore My Work →
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition duration-300 hover:border-blue-500 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}

            <div className="mt-12 flex gap-5 text-gray-400">
              <button className="transition hover:text-blue-400">
                GitHub
              </button>

              <button className="transition hover:text-blue-400">
                LinkedIn
              </button>

              <button className="transition hover:text-blue-400">
                Instagram
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-blue-600/30 blur-[100px]"></div>

            <div className="relative flex h-[420px] w-[320px] items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl backdrop-blur-xl sm:h-[500px] sm:w-[380px]">
              <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <p className="text-xs text-gray-400">ROLE</p>
                <p className="font-semibold text-blue-400">
                  React Developer
                </p>
              </div>

              <div className="absolute bottom-6 right-6 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <p className="text-xs text-gray-400">FOCUS</p>
                <p className="font-semibold text-purple-400">
                  AI & Technology
                </p>
              </div>

              <span className="text-[150px] sm:text-[200px]">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-blue-400">10+</h3>
            <p className="mt-2 text-gray-400">Projects Built</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-400">8+</h3>
            <p className="mt-2 text-gray-400">Technologies</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">100%</h3>
            <p className="mt-2 text-gray-400">Passion</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">∞</h3>
            <p className="mt-2 text-gray-400">Learning</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur">
              <p className="text-sm font-semibold tracking-widest text-blue-400">
                ABOUT ME
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Passionate About
                <span className="block text-blue-400">Technology.</span>
              </h2>

              <p className="mt-7 leading-8 text-gray-400">
                I am passionate about technology, web development and
                Artificial Intelligence. I enjoy transforming ideas into
                functional and visually appealing applications.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My journey focuses on continuously improving my programming
                skills, exploring modern technologies and working on projects
                that solve practical problems.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-blue-500/10 p-5">
                  <p className="text-2xl font-bold text-blue-400">
                    React
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Frontend Development
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-500/10 p-5">
                  <p className="text-2xl font-bold text-purple-400">
                    Python
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    AI & Programming
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-blue-400">MY JOURNEY</p>

            <h2 className="mt-4 text-4xl font-bold">
              Learning.
              <br />
              Building.
              <br />
              <span className="text-purple-400">Growing.</span>
            </h2>

            <div className="mt-10 space-y-6">
              <div className="border-l-2 border-blue-500 pl-6">
                <p className="text-sm text-blue-400">STEP 01</p>
                <h3 className="mt-2 text-xl font-semibold">
                  Learning Development
                </h3>
                <p className="mt-2 text-gray-400">
                  Building a strong foundation in programming and web
                  technologies.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-6">
                <p className="text-sm text-purple-400">STEP 02</p>
                <h3 className="mt-2 text-xl font-semibold">
                  Building Projects
                </h3>
                <p className="mt-2 text-gray-400">
                  Applying knowledge by creating real-world applications.
                </p>
              </div>

              <div className="border-l-2 border-pink-500 pl-6">
                <p className="text-sm text-pink-400">STEP 03</p>
                <h3 className="mt-2 text-xl font-semibold">
                  Exploring Artificial Intelligence
                </h3>
                <p className="mt-2 text-gray-400">
                  Learning AI concepts and using Python for intelligent
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-blue-400">TECHNICAL EXPERTISE</p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              My <span className="text-blue-400">Skills</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{skill.name}</h3>

                  <span className="text-blue-400">{skill.level}</span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <p className="text-blue-400">WHAT I DO</p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Areas of <span className="text-purple-400">Interest</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-500/50 hover:bg-blue-500/[0.05]"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="mt-7 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {service.description}
              </p>

              <button className="mt-8 text-blue-400 transition group-hover:translate-x-2">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="bg-white/[0.02] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-blue-400">FEATURED WORK</p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Selected <span className="text-pink-400">Projects</span>
              </h2>
            </div>

            <button className="rounded-xl border border-white/20 px-6 py-3 transition hover:border-blue-500">
              View All Projects →
            </button>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-3 hover:border-blue-500"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
                  <span className="text-[110px] transition duration-500 group-hover:scale-125">
                    {project.icon}
                  </span>

                  <span className="absolute right-6 top-6 text-5xl font-black text-white/30">
                    {project.number}
                  </span>
                </div>

                <div className="p-8">
                  <p className="text-sm text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <button className="mt-7 font-semibold transition hover:text-blue-400">
                    Explore Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 p-8 md:p-16">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="font-semibold tracking-widest text-blue-400">
                GET IN TOUCH
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-tight">
                Let's Build
                <br />
                Something
                <span className="text-blue-400"> Amazing.</span>
              </h2>

              <p className="mt-7 leading-8 text-gray-300">
                Have an idea, project or opportunity? Feel free to contact me.
                I'm always interested in connecting with people and exploring
                new opportunities.
              </p>

              <div className="mt-10 space-y-4">
                <p className="text-gray-300">📧 Email Me</p>

                <p className="text-gray-300">💼 LinkedIn</p>

                <p className="text-gray-300">💻 GitHub</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
                ></textarea>

                <button
                  type="button"
                  className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">
          <h2 className="text-2xl font-bold">
            Paras<span className="text-blue-500">.</span>
          </h2>

          <p className="text-sm text-gray-500">
            © 2026 Paras Masurkar. Built with React & Tailwind CSS.
          </p>

          <div className="flex gap-5 text-sm text-gray-400">
            <span className="cursor-pointer hover:text-blue-400">
              GitHub
            </span>

            <span className="cursor-pointer hover:text-blue-400">
              LinkedIn
            </span>

            <span className="cursor-pointer hover:text-blue-400">
              Instagram
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}