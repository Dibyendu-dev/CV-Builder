import {  Eye, Zap, Shield,  } from 'lucide-react';
import { Link } from 'react-router-dom';
import CVpage from './CVpage';
export const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-black mb-6">
            Build Your Perfect CV
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create professional, ATS-friendly CVs with our intuitive builder. See your changes in real-time with our live preview feature. No sign-up required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors rounded-md "
            to="/createcv"
            >
              Start Building Now
            </Link>
           
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Why Choose CVCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Live Preview</h3>
              <p className="text-gray-600">
                See your CV come to life as you type. Our real-time preview ensures you know exactly how your CV will look.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Privacy First</h3>
              <p className="text-gray-600">
                Your data stays on your device. No servers, no accounts, no privacy concerns. Complete control over your information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                No loading times, no server delays. Start creating immediately with our instant, browser-based builder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Simple 3-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Choose Template</h3>
              <p className="text-gray-600">
                Select from our collection of professional, clean CV templates designed to pass ATS systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Fill Your Details</h3>
              <p className="text-gray-600">
                Add your information with our intuitive form. Watch your CV update in real-time as you type.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Download & Apply</h3>
              <p className="text-gray-600">
                Export your professional CV as PDF and start applying to your dream jobs immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who have created professional CVs with CVCrafts
          </p>
         
        </div>
      </section>
    </div>
  );
