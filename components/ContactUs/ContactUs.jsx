import { Facebook, Instagram, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactUs = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left - Contact Information */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8aa7e]"></div>
            <p className="text-sm tracking-wide uppercase">CONTACT US</p>
          </div>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            GET IN TOUCH <span className="text-[#b8aa7e]">WITH US</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Have questions or feedback? Reach out to us through the form below, call us, or visit our restaurant. We're
            here to help and look forward to connecting with you!
          </p>

          <div className="mt-10 space-y-2 text-gray-400">
            <p>28 DLA Road, Delta State, 320104, Nigeria</p>
            <p>+234 80 859 6322</p>
            <p>info@jelaconfectionaries.com</p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#b8aa7e] transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#b8aa7e] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#b8aa7e] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-sm mb-2">Your Name</label>
            <Input
              type="text"
              placeholder="e.g. John"
              className="w-full bg-[#1a1a1a] border-gray-700 focus:border-[#b8aa7e] text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <Input
                type="email"
                placeholder="e.g. John@example.com"
                className="w-full bg-[#1a1a1a] border-gray-700 focus:border-[#b8aa7e] text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <Input
                type="text"
                placeholder="e.g. + 123 456 879 2"
                className="w-full bg-[#1a1a1a] border-gray-700 focus:border-[#b8aa7e] text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <Textarea
              placeholder="Write Message.."
              className="w-full min-h-[120px] bg-[#1a1a1a] border-gray-700 focus:border-[#b8aa7e] text-white"
            />
          </div>

          <button className="w-full bg-[#b8aa7e] hover:bg-[#a89a6e] text-white py-3 px-6 rounded-full font-medium transition-colors">
            Submit Inquiry
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
