'use client';
import React from 'react';

const SpecialMenu = () => {
  const menuItems = [
    {
      title: 'Starters',
      img: '/special-menu-img-1.jpg',
      link: '#starters',
    },
    {
      title: 'Desserts',
      img: '/special-menu-img-4.jpg',
      link: '#desserts',
    },
    {
      title: 'Beverages',
      img: '/special-menu-img-5.jpg',
      link: '#beverages',
    },
  ];

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#0e100f] text-white py-16 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs text-yellow-500 mb-1 tracking-widest">
          • TASTE THE BEST THAT SURPRISE YOU
        </p>
        <h2 className="text-3xl font-bold mb-2">
          OUR SPECIAL <span className="text-yellow-600">MENU</span>
        </h2>
        <p className="text-sm text-gray-300 mb-12">
          Enjoy the unique dishes from the basilico restaurant that only our restaurant has.<br />
          Fusce malesuada, lorem vitae euismod lobortis.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-center">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleScroll(item.link)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md mb-2 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
