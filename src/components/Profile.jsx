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
          <h2 className="text-2xl font-bold">M.Yusran</h2>
          <p className="text-gray-400">MERN Developer</p>
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
          "Hi, I'm Yusran, a passionate web developer who specializes in
          creating dynamic web applications. I enjoy crafting user-friendly and
          high-performance solutions that deliver exceptional experiences."
        </p>
      </div>
    </section>
  );
};

export default Profile;
