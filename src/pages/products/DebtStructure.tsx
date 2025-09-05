import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DebtStructure = () => {
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Debt Structure Products</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Our debt structure products offer stable returns and capital preservation for conservative investors seeking predictable income streams.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Fixed Income Securities</h3>
                  <p className="text-muted-foreground">
                    Diversified portfolio of government and corporate bonds providing steady income with lower risk profile.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Structured Products</h3>
                  <p className="text-muted-foreground">
                    Customized debt instruments designed to meet specific risk and return objectives of institutional investors.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Capital protection with predictable returns</li>
                <li>Regular income through interest payments</li>
                <li>Professional credit analysis and selection</li>
                <li>Diversification across sectors and maturities</li>
                <li>Active duration and credit risk management</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Investment Highlights</h3>
                <p className="text-muted-foreground">
                  Our debt structure products are ideal for investors seeking stable returns with lower volatility compared to equity investments. 
                  We focus on high-quality issuers and maintain disciplined risk management practices.
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

export default DebtStructure;