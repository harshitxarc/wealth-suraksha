import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const Debentures = () => {
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
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">Debentures</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Invest in secured and unsecured debentures from reputable companies offering competitive returns with varying risk profiles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Secured Debentures</h3>
                  <p className="text-muted-foreground">
                    Asset-backed debentures providing additional security through collateral or charge on company assets.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Convertible Debentures</h3>
                  <p className="text-muted-foreground">
                    Hybrid instruments offering fixed income with option to convert into equity shares at predetermined terms.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Types of Debentures</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Secured debentures with asset backing</li>
                <li>Unsecured debentures based on company creditworthiness</li>
                <li>Convertible debentures with equity upside potential</li>
                <li>Non-convertible debentures for pure debt exposure</li>
                <li>Zero-coupon debentures issued at discount</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Risk-Return Profile</h3>
                <p className="text-muted-foreground">
                  Debentures typically offer higher yields than government bonds but carry credit risk. 
                  We conduct thorough credit analysis and recommend debentures from companies with strong financials and stable business models to optimize your risk-adjusted returns.
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

export default Debentures;