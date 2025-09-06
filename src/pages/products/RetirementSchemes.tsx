import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const RetirementSchemes = () => {
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Retirement Schemes</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Plan your golden years with our comprehensive retirement solutions designed to provide financial independence and peace of mind.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Pension Plans</h3>
                  <p className="text-muted-foreground">
                    Systematic investment plans with guaranteed pension income for life after retirement.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Annuity Products</h3>
                  <p className="text-muted-foreground">
                    Immediate and deferred annuities providing regular income streams during retirement years.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Retirement Solutions</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>National Pension System (NPS) with tax benefits</li>
                <li>Unit Linked Pension Plans (ULIP) with market upside</li>
                <li>Traditional pension plans with guaranteed returns</li>
                <li>Employee Provident Fund (EPF) optimization</li>
                <li>Senior citizen savings schemes and deposits</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Retirement Planning Strategy</h3>
                <p className="text-muted-foreground">
                  We help you calculate your retirement corpus requirement and design a systematic investment approach 
                  to achieve your goals. Our retirement planning considers inflation, lifestyle expectations, and healthcare costs to ensure adequate financial security.
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

export default RetirementSchemes;