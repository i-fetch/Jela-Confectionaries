import React from 'react';

const StartersMenu = () => {
  const menuItems = [
    {
      title: 'Spring Rolls',
      description: 'Crispy rolls filled with vegetables, served with dipping sauce.',
      price: '$16.00',
      img: '/starters-img-1.png',
    },
    {
      title: 'Aloo Tikki',
      description: 'Golden potato patties served with chutney.',
      price: '$12.00',
      img: '/starters-img-2.png',
    },
    {
      title: 'Paneer Tikka',
      description: 'Grilled paneer cubes, spiced to perfection.',
      price: '$26.00',
      img: '/starters-img-3.png',
    },
    {
      title: 'Hara Kebab',
      description: 'Green vegetable and herb kebabs, grilled to perfection.',
      price: '$20.00',
      img: '/starters-img-4.png',
    },
    {
      title: 'Chili Mushrooms',
      description: 'Spicy, crispy mushrooms with a tangy twist.',
      price: '$10.00',
      img: '/starters-img-5.png',
    },
    {
      title: 'Veg Pakoras',
      description: 'Crispy vegetable fritters with a dip.',
      price: '$22.00',
      img: '/starters-img-6.png',
    },
  ];

  return (
    <section id='starters' className="bg-[#1a1c1a] text-white py-16 px-6 md:px-20 ">
      <div className="mb-10">
        <p className="text-xs text-yellow-500 tracking-widest mb-2">• MENU & PRICING</p>
        <h2 className="text-3xl font-bold">STARTERS</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {menuItems.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex-1 border-b border-gray-700 pb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-bold uppercase text-sm">{item.title}</h3>
                <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">{item.price}</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartersMenu;
