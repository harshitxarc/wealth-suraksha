import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const FixedDeposits = () => {
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Corporate Fixed Deposits</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Secure your investments with high-rated corporate fixed deposits offering attractive returns with capital protection.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Higher Returns</h3>
                  <p className="text-muted-foreground">
                    Earn competitive interest rates higher than traditional bank FDs with similar safety levels.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Flexible Tenures</h3>
                  <p className="text-muted-foreground">
                    Choose from multiple tenure options ranging from 1 year to 5 years based on your liquidity needs.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Higher interest rates compared to bank FDs</li>
                <li>Capital protection with AAA/AA+ rated companies</li>
                <li>Flexible investment amounts starting from ₹25,000</li>
                <li>Option for monthly, quarterly, or annual interest payouts</li>
                <li>No lock-in period with premature withdrawal facility</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Safety & Security</h3>
                <p className="text-muted-foreground">
                  We partner only with highly-rated corporations with strong financial fundamentals and proven track records. 
                  All recommended FDs come from companies with credit ratings of AA+ or above, ensuring your capital safety while maximizing returns.
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

export default FixedDeposits;