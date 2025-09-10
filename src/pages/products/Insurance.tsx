import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const Insurance = () => {
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
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">Insurance</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive insurance solutions to protect your wealth and provide financial security for you and your family.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Life Insurance</h3>
                  <p className="text-muted-foreground">
                    Term and whole life policies providing financial protection and estate planning benefits.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Health Insurance</h3>
                  <p className="text-muted-foreground">
                    Comprehensive medical coverage including critical illness and personal accident protection.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Coverage Options</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Term life insurance with flexible coverage amounts</li>
                <li>Whole life policies with cash value accumulation</li>
                <li>Health and medical insurance plans</li>
                <li>Critical illness coverage</li>
                <li>Disability and income protection insurance</li>
              </ul>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Why Choose Our Insurance Solutions</h3>
                <p className="text-muted-foreground">
                  Our insurance products are carefully selected from top-rated insurers, offering competitive premiums 
                  and comprehensive coverage. We help you choose the right protection based on your life stage, financial goals, and risk profile.
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

export default Insurance;