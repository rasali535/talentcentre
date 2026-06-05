import React from 'react';

export const metadata = {
  title: 'Terms of Service | Talent Centre',
  description: 'Terms and conditions for using the Talent Centre Consultancy website and services.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-800 mb-6">
          Terms of Service
        </h1>
        <p className="text-steel-500 mb-12">Last Updated: June 5, 2026</p>

        <div className="prose prose-lg prose-steel max-w-none space-y-8 text-charcoal-700">
          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the Talent Centre website and our professional services, you accept and agree to be 
              bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do 
              not use our services or access our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">2. Description of Services</h2>
            <p className="leading-relaxed">
              Talent Centre provides professional business consultancy, talent advisory, organizational development, 
              and empowerment programs. We reserve the right to modify, suspend, or discontinue any aspect of our 
              services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">3. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, 
              digital downloads, data compilations, and software, is the property of Talent Centre or its content 
              suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">4. User Obligations</h2>
            <p className="leading-relaxed mb-4">As a user of our website, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that violates any applicable local, national, or international law.</li>
              <li>Attempt to gain unauthorized access to any part of the website or its related systems or networks.</li>
              <li>Interfere with the proper working of the website, including employing automated scripts or bots.</li>
              <li>Submit false or misleading information through our contact forms or AI assistant.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall Talent Centre, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
              inability to access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-charcoal-800 mb-4">6. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns regarding these Terms of Service, please contact us at:
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
