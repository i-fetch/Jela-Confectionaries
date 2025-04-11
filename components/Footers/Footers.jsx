import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footers = () => {
  return (
    <footer className="bg-[#0e110d] text-white px-4 py-16 sm:py-52 md:py-10 md:px-20">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div className='pt-16 md:pt-10'>
          <h3 className="text-xl font-bold mb-2">Jela's Confectionary</h3>
          <div className="text-sm text-[#f7dd9b] space-y-1">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="w-4 h-4 text-[#cd9d22]" />
              4517 Unizik, Anambra 39495
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="w-4 h-4 text-[#cd9d22]" />
              +01 780 859 632
            </p>
          </div>

          {/* Social Media Icons Below Contact Section */}
          <div className="flex gap-4 mt-4">
            <Link href="#" aria-label="Facebook" className="bg-[#cd9d22] p-2 rounded-full text-black hover:bg-[#b1a369] transition">
              <FaFacebook size={16} />
            </Link>
            <Link href="#" aria-label="Instagram" className="bg-[#cd9d22] p-2 rounded-full text-black hover:bg-[#b1a369] transition">
              <FaInstagram size={16} />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        Copyright © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footers;