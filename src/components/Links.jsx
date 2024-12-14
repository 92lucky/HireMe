import React from "react";

const Links = () => {
  // Array containing the link information
  const links = [
    {
      name: "Threads",
      url: "http://www.threads.net/yusran_uca",
      user: "@Yusran_Uca",
    },
    {
      name: "Instagram",
      url: "http://www.instagram.com/yusran_uca",
      user: "@YUsran-Uca",
    },
    {
      name: "Github",
      url: "http://www.github.com/YusranFrontEnd",
      user: "@YusranFrontEnd",
    },
    {
      name: "Youtube",
      url: "http://www.youtube.com/@Yusran_Uca",
      user: "@Yusran-Uca",
    },
  ];

  return (
    <main className="mt-12 space-y-4 mb-28">
      <h2 className="mb-4">Links</h2>

      {links.map((link, index) => (
        <section className="mt-8" key={index}>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4">
              <span className="text-sm text-gray-400">{link.name}</span>
              <div className="text-sm font-semibold">
                <a
                  className="-ml-60"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.user}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Links;
