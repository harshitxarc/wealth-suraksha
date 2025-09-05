import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bonds = () => {
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Bonds</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Diversify your portfolio with our carefully selected government and corporate bonds offering stable income and capital preservation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Government Bonds</h3>
                  <p className="text-muted-foreground">
                    Risk-free government securities including G-Secs, SDL, and sovereign gold bonds with guaranteed returns.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Corporate Bonds</h3>
                  <p className="text-muted-foreground">
                    High-quality corporate bonds from blue-chip companies offering attractive yields with manageable credit risk.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Bond Categories</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Government securities (G-Secs) with sovereign guarantee</li>
                <li>State development loans (SDL) with state backing</li>
                <li>PSU bonds from government enterprises</li>
                <li>Corporate bonds from AAA-rated companies</li>
                <li>Tax-free bonds for tax-efficient income</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Investment Strategy</h3>
                <p className="text-muted-foreground">
                  Our bond selection process focuses on credit quality, duration matching, and yield optimization. 
                  We help you build a diversified bond portfolio that balances safety, liquidity, and returns based on your investment horizon and risk appetite.
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

export default Bonds;