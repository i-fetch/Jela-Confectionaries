import React from 'react';

const Beverages = () => {
  const menuItems = [
    // {
    //   title: 'ICED COFEE',
    //   description: 'Crispy rolls filled with vegetables, served with dipping sauce.',
    //   price: '$16.00',
    //   img: '/starters-img-1.png',
    // },
    {
      title: 'MANGO LASSI',
      description: 'A refreshing yogurt-based mango drink.',
      price: '₦20000.00',
      img: '/starters-img-2.png',
    },
    {
      title: 'ICED COFEE',
      description: 'Chilled coffee with a smooth, rich flavor.',
      price: '₦50000.00',
      img: '/starters-img-1.png',
    },
    {
      title: 'LEMONADE',
      description: 'Sweet and tangy homemade lemonade.',
      price: '₦26000.00',
      img: '/starters-img-3.png',
    },
    {
      title: 'COCONUT WATER',
      description: 'Naturally refreshing and hydrating coconut water.',
      price: '₦10000.00',
      img: '/starters-img-5.png',
    },
    // {
    //   title: 'VEG PAKORAS',
    //   description: 'Crispy vegetable fritters with a dip.',
    //   price: '$22.00',
    //   img: '/starters-img-6.png',
    // },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 h-screen">
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

export default Beverages;
