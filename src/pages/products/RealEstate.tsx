import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RealEstate = () => {
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Real Estate</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Invest in premium real estate opportunities through our curated selection of residential and commercial properties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Commercial Real Estate</h3>
                  <p className="text-muted-foreground">
                    Prime office buildings, retail spaces, and industrial properties in key metropolitan areas.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Residential Projects</h3>
                  <p className="text-muted-foreground">
                    High-end residential developments and luxury housing projects with strong appreciation potential.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Investment Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Tangible asset ownership with intrinsic value</li>
                <li>Regular rental income generation</li>
                <li>Long-term capital appreciation potential</li>
                <li>Hedge against inflation</li>
                <li>Portfolio diversification benefits</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Our Approach</h3>
                <p className="text-muted-foreground">
                  We identify undervalued properties in high-growth markets, focusing on assets with strong fundamentals 
                  and long-term appreciation potential. Our team conducts thorough due diligence on location, developer credibility, and market dynamics.
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

export default RealEstate;