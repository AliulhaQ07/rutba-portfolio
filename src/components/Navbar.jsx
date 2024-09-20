const Navbar = () => {
  const navMenu = [
    {
      id: 1,
      name: "HOME",
      link: "#home",
    },
    {
      id: 2,
      name: "ABOUT",
      link: "#about",
    },
    {
      id: 3,
      name: "SERVICES",
      link: "#services",
    },
    {
      id: 4,
      name: "PORTFOLIO",
      link: "#portfolio",
    },
    {
      id: 5,
      name: "CONTACT",
      link: "#contact",
    },
  ];

  return (
    <>
      <div className="min-h-14 border flex items-center justify-between md:justify-evenly font-LuckiestGuy px-4 md:px-20">
        {/* Logo Section */}
        <div className="text-lg md:text-xl lg:text-2xl text-gray-800 hover:text-indigo-500 duration-200">
          <h1>RUTBA ALI KHAN</h1>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 text-gray-800 text-sm md:text-lg lg:text-xl">
            {navMenu.map((item) => (
              <li key={item.id} className="hover:text-indigo-500 duration-200">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
