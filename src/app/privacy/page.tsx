import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Talent Centre',
  description: 'Privacy Policy and data protection guidelines for Talent Centre Consultancy.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-steel-500 mb-12">Last Updated: June 5, 2026</p>

        <div className="prose prose-lg prose-steel max-w-none space-y-8 text-charcoal-700">
          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At Talent Centre, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our professional consultancy services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">2. Data We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect, use, and store different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> First name, last name, and professional title.</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers, and company details.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and operating system.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and interact with our AI assistant.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">3. Cookie Policy & Tracking</h2>
            <p className="leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="leading-relaxed">
              <strong>Your Cookie Settings:</strong> You can instruct your browser to refuse all cookies or to indicate when 
              a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">4. How We Use Your Data</h2>
            <p className="leading-relaxed mb-4">We will only use your personal data when the law allows us to. Most commonly, we use it to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide our consultancy and advisory services.</li>
              <li>Manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>Administer and protect our business and this website.</li>
              <li>Use data analytics to improve our website, services, marketing, and user relationships.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">5. Data Security</h2>
            <p className="leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. Access to your personal data is limited to 
              those employees, agents, and contractors who have a strict business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              <br /><br />
              <strong>Email:</strong> info@talentcentre.co.za<br />
              <strong>Address:</strong> Plot 104, Unit 15B, Gaborone International Commerce Park, Botswana
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
