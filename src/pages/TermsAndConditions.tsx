import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 md:p-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wealth Suraksha IMF LLP is a wealth management platform dedicated to providing personalized financial solutions. By accessing this website and using our services, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.
              </p>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  1.1. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our Privacy Policy.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Offered</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    2.1. We offer a range of financial product distribution and tax consulting services. Specifically, our services include, but are not limited to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Distribution of financial products</li>
                    <li>Tax preparation and planning</li>
                    <li>Financial consulting</li>
                  </ul>
                  <p>
                    2.2. Furthermore, our services are tailored based on the information you provide. We strive to offer personalized recommendations that align with your financial goals and risk tolerance.
                  </p>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  3.1. You agree to provide accurate and complete information when using our services. Additionally, you acknowledge that all investment decisions are your responsibility. Consequently, Wealth Suraksha IMF LLP is not liable for the performance of any investments made on your behalf.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Investment Risks</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    4.1. Please note that investing in financial markets involves various risks, including the potential loss of principal. Importantly, past performance is not indicative of future results.
                  </p>
                  <p>
                    4.2. While we offer general investment advice, we do not guarantee the success of any investment strategy or recommendation.
                  </p>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    5.1. We respect your privacy and handle your personal and financial information in accordance with our Privacy Policy.
                  </p>
                  <p>
                    5.2. However, you agree that communications through our website or electronic means may not be secure, and you accept the associated risks.
                  </p>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    6.1. All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Wealth Suraksha IMF LLP and is protected by intellectual property laws.
                  </p>
                  <p>
                    6.2. Therefore, you may not reproduce, distribute, or modify any content from this website without our prior written consent.
                  </p>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  7.1. To the fullest extent permitted by law, Wealth Suraksha IMF LLP shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our website or services.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  8.1. We reserve the right to terminate or suspend your access to our website or services at any time without prior notice, for any reason.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  9.1. These terms and conditions shall be governed by and construed in accordance with the laws of India. Consequently, any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  10.1. Wealth Suraksha IMF LLP reserves the right to update or modify these terms and conditions at any time without prior notice. Therefore, we encourage you to review these terms periodically for any changes.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  11.1. If you have any questions about these terms and conditions, please contact us through email: 
                  <a href="mailto:info@wealthsuraksha.com" className="text-primary hover:underline ml-1">
                    info@wealthsuraksha.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;