"use client";

import { Briefcase, Headphones, Mail, MapPin, Phone, Send, MessageSquare, Clock, Building, Users, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../Components/CommoneHero";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-up"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header
        title="Contact Us"
        description="Get in touch and let us know how we can help. Fill out the form and we'll be in touch as soon as possible."
      />

      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-16 md:py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50/20 to-cyan-50/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* LEFT FORM SECTION */}
              <div className="reveal-left opacity-0 translate-x-[-30px] transition-all duration-700 ease-out">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        Direct Communication
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                        Send us a message
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Have questions or need assistance? We're here to help. Fill out the form and our team will respond within 24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200/60 backdrop-blur-sm"
                >
                  <div className="space-y-8">
                    {/* Email Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        Email address
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                       
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          className="w-full pl-14 pr-6 py-4 bg-gray-50/80 border border-gray-300/50 rounded-full focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none text-gray-700 placeholder:text-gray-400 hover:border-gray-400"
                        />
                      </div>
                      <small className="mt-3 text-sm text-gray-500 block pl-5">
                        Your email is safe with us. We respect your privacy.
                      </small>
                    </div>

                    {/* Subject Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        Subject
                      </label>
                      <div className="relative">
                      
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you today?"
                          className="w-full pl-14 pr-6 py-4 bg-gray-50/80 border border-gray-300/50 rounded-full focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 outline-none text-gray-700 placeholder:text-gray-400 hover:border-gray-400"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        Message
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Tell us about your project, inquiry, or any questions you have..."
                          className="w-full px-6 py-5 bg-gray-50/80 border border-gray-300/50 rounded-3xl focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none text-gray-700 placeholder:text-gray-400 resize-none hover:border-gray-400"
                        />
                        <div className="absolute top-5 right-5 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary flex items-center justify-center gap-3 mx-auto group"
                    >
                      <div className={`relative w-6 h-6 flex items-center justify-center ${isSubmitting ? 'animate-spin' : ''}`}>
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"></div>
                        ) : (
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </div>
                </form>

                {/* Response Time Indicator */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-5 py-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Average response: <span className="font-semibold text-green-700">4 hours</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-5 py-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Team: <span className="font-semibold text-blue-700">24/7 Support</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT INFO SECTION */}
              <div className="reveal-right opacity-0 translate-x-[30px] transition-all duration-700 ease-out">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                        Our Network
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                        Connect with our teams
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Reach out to our dedicated teams for specialized assistance.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* ADDRESS CARD */}
                  <div className="bg-gradient-to-br from-white via-blue-50/50 to-white rounded-3xl p-8 border-2 border-blue-200/40 hover:border-blue-300 transition-all duration-500 group hover:bg-blue-50/30">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Office Address</h4>
                        <p className="text-blue-600 font-medium">Visit our headquarters in Jaipur</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 ml-4 pl-16 border-l-2 border-blue-100">
                      <div className="space-y-3">
                        <p className="text-gray-800 font-semibold text-lg">HISSOL Private Limited</p>
                        <p className="text-gray-600 leading-relaxed">
                          215, Shri Balaji Dham, Rajawas,
                          <br />
                          Sikar Road, Amer, Jaipur,
                          <br />
                          Rajasthan, India – 302032
                        </p>
                      </div>
                      
                      <div className="space-y-4 pt-6 border-t border-blue-100/50">
                        <a 
                          href="tel:18005727001"
                          className="flex items-center gap-4 group/contact"
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover/contact:from-blue-200 group-hover/contact:to-cyan-200 transition-all">
                            <Phone className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="text-gray-800 font-semibold text-lg group-hover/contact:text-blue-600 transition-colors">
                              1800 572 7001
                            </p>
                          </div>
                        </a>
                        
                        <a 
                          href="mailto:info@hissol.com"
                          className="flex items-center gap-4 group/contact"
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center group-hover/contact:from-cyan-200 group-hover/contact:to-blue-200 transition-all">
                            <Mail className="w-5 h-5 text-cyan-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email Address</p>
                            <p className="text-gray-800 font-semibold text-lg group-hover/contact:text-cyan-600 transition-colors">
                              info@hissol.com
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* SALES CARD */}
                  <div className="bg-gradient-to-br from-white via-emerald-50/50 to-white rounded-3xl p-8 border-2 border-emerald-200/40 hover:border-emerald-300 transition-all duration-500 group hover:bg-emerald-50/30">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Sales Department</h4>
                        <p className="text-emerald-600 font-medium">Custom quotes & project discussions</p>
                      </div>
                    </div>
                    
                    <div className="ml-4 pl-16">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Looking for a custom quote, project discussion, or demo? Our sales team is ready to help you find the perfect solution.
                      </p>
                      
                      <a 
                        href="mailto:sales@hissol.com"
                        className="inline-flex items-center gap-3 group/email"
                      >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center group-hover/email:from-emerald-200 group-hover/email:to-green-200 transition-all">
                          <Mail className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Primary Contact</p>
                          <p className="text-gray-800 font-semibold text-xl group-hover/email:text-emerald-600 transition-colors">
                            sales@hissol.com
                          </p>
                        </div>
                      </a>
                      
                      <div className="mt-6 pt-6 border-t border-emerald-100/50">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full px-4 py-2">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-700">Response time: 2-4 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SUPPORT CARD */}
                 
                </div>

                {/* Map Preview */}
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal-left.show {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right.show {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom rounded-full focus states */
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--focus-color);
          box-shadow: 0 0 0 4px var(--focus-shadow);
        }
        
        input[type="email"]:focus {
          --focus-color: theme('colors.blue.500');
          --focus-shadow: theme('colors.blue.500 / 0.2');
        }
        
        input[type="text"]:focus {
          --focus-color: theme('colors.green.500');
          --focus-shadow: theme('colors.green.500 / 0.2');
        }
        
        textarea:focus {
          --focus-color: theme('colors.purple.500');
          --focus-shadow: theme('colors.purple.500 / 0.2');
        }
      `}</style>
    </>
  );
}