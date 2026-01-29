"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupScreen() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    phone: "",
    acceptTerms: false,
    newsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes - redirect on successful signup
    router.push("/dashboard");
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex  items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* You can replace this with your actual background image */}
        <div 
          className="absolute  inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.pinimg.com/1200x/af/30/c2/af30c2a8726869fdf410d649a7bae063.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        />
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/70 via-[var(--brand-dark)]/50 to-[#081a36]/60" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHpNMCAzMGg2MFYwSDB6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        

        {/* Two-column layout for larger screens */}
        <div className="flex mt-20 flex-col lg:flex-row gap-8">
          {/* Left Column - Info */}
          <div className="lg:w-2/5">
            <div className="bg-gradient-to-br from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/80 to-[#081a36]/90 rounded-2xl p-8 h-full text-white backdrop-blur-sm border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Join HISSOL</h2>
              <p className="text-white/90 mb-6">
                Create your account to access enterprise-grade system integration solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enterprise Security</h3>
                    <p className="text-white/80 text-sm">Military-grade encryption and security protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-white/80 text-sm">Round-the-clock technical support and consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scalable Solutions</h3>
                    <p className="text-white/80 text-sm">Infrastructure that grows with your business needs</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/30">
                <p className="text-white/80 text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-white font-semibold hover:text-white/90 transition-colors">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-3/5">
            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50/80 border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm`}
                      placeholder="John"
                      required
                    />
                    {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50/80 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm`}
                    placeholder="john.doe@company.com"
                    required
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50/80 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm`}
                      placeholder="••••••••"
                      required
                    />
                    {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50/80 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-dark)] focus:border-transparent transition-all backdrop-blur-sm`}
                      placeholder="••••••••"
                      required
                    />
                    {errors.confirmPassword && <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Checkboxes
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className={`h-4 w-4 mt-1 rounded border-gray-300 bg-gray-100 ${errors.acceptTerms ? 'text-red-500' : 'text-[var(--brand-dark)]'} focus:ring-[var(--brand-dark)]`}
                      required
                    />
                    <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[var(--brand-dark)] font-semibold hover:text-[#081a36] transition-colors">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[var(--brand-dark)] font-semibold hover:text-[#081a36] transition-colors">
                        Privacy Policy
                      </Link>
                      *
                    </label>
                  </div>
                  {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}
                  
                  <div className="flex items-start">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="h-4 w-4 mt-1 rounded border-gray-300 bg-gray-100 text-[var(--brand-dark)] focus:ring-[var(--brand-dark)]"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                      Subscribe to our newsletter for updates, tips, and special offers
                    </label>
                  </div>
                </div> */}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}