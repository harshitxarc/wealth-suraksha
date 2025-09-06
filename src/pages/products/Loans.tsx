import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const Loans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 gradient-text">Loans</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Access competitive loan products for your personal and business financing needs with attractive interest rates and flexible terms.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Personal Loans</h3>
                  <p className="text-muted-foreground">
                    Unsecured personal loans for immediate financial needs with quick approval and minimal documentation.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Business Loans</h3>
                  <p className="text-muted-foreground">
                    Working capital and term loans for business expansion, equipment purchase, and operational requirements.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Loan Products</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Personal loans up to ₹40 lakhs with competitive rates</li>
                <li>Home loans with attractive interest rates and flexible tenure</li>
                <li>Business loans for SMEs and large enterprises</li>
                <li>Loan against securities (LAS) for portfolio holders</li>
                <li>Education loans for higher studies abroad and in India</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Our Advantage</h3>
                <p className="text-muted-foreground">
                  Leveraging our relationships with leading banks and NBFCs, we negotiate the best rates and terms for our clients. 
                  Our loan advisory service includes documentation support, rate negotiation, and end-to-end processing assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Loans;