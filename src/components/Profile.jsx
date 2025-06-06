import React from "react";

const Profile = () => {
  return (
    <section className="mt-8 text-sm ">
      {/* Bagian pertama: Gambar di kiri, teks di kanan */}
      <div className="flex justify-center items-center">
        <img
          src="/uu.jpg"
          alt="Profile"
          style={{ clipPath: "circle()", overflow: "hidden" }}
          width="80px"
        />
        <div className="m-4">
          <h2 className="text-2xl font-bold">Yusran</h2>
          <p className="text-gray-400">Golang Developer</p>
          <p className="text-gray-400">
            <a
              className="hover:underline"
              href="mailto:yyuussrraann1992@gmail.com"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </p>
        </div>
      </div>

      {/* Bagian kedua: Heading "About" dan teks deskripsi */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-sm text-gray-400">
          I'm a backend-focused developer specializing in Go, passionate about
          building fast, scalable systems. With a solid foundation in React +
          Vite, I bring a full-stack mindset and clear understanding of frontend
          needs. I rely on PostgreSQL for robust, structured data handling and
          thrive in clean, efficient codebases.
        </p>
      </div>
    </section>
  );
};

export default Profile;
