import React from 'react';

const SpecialMenu = () => {
  const menuItems = [
    {
      title: 'Starters',
      img: '/special-menu-img-1.jpg', // replace with actual image
    },
    {
      title: 'Desserts',
      img: '/special-menu-img-4.jpg',
    },
    {
      title: 'Beverages',
      img: '/special-menu-img-5.jpg',
    },
  ];

  return (
    <section className="bg-[#0e100f] text-white py-16 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs text-yellow-500 mb-1 tracking-widest">• TASTE THE BEST THAT SURPRISE YOU</p>
        <h2 className="text-3xl font-bold mb-2">
          OUR SPECIAL <span className="text-yellow-600">MENU</span>
        </h2>
        <p className="text-sm text-gray-300 mb-12">
          Enjoy the unique dishes from the basilico restaurant that only our restaurant has.<br />
          Fusce malesuada, lorem vitae euismod lobortis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md mb-2">
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
