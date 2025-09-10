import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const MutualFunds = () => {
  const navigate = useNavigate();

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
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">Mutual Funds</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">What are Mutual Funds?</h2>
                  <p className="text-muted-foreground">
                    Mutual funds are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management and diversification for individual investors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Professional portfolio management</li>
                    <li>• Diversification across multiple securities</li>
                    <li>• Lower minimum investment requirements</li>
                    <li>• Liquidity and flexibility</li>
                    <li>• Regulated and transparent</li>
                  </ul>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Types of Mutual Funds</h2>
                  <div className="space-y-3">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Equity Funds</h3>
                      <p className="text-sm text-muted-foreground">Invest primarily in stocks for long-term growth</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Debt Funds</h3>
                      <p className="text-sm text-muted-foreground">Focus on fixed-income securities for stability</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Hybrid Funds</h3>
                      <p className="text-sm text-muted-foreground">Balanced mix of equity and debt instruments</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Ready to Invest in Mutual Funds?</h2>
              <p className="text-muted-foreground mb-6">
                Start your investment journey with our carefully selected mutual fund portfolio. Our experts will help you choose the right funds based on your financial goals and risk tolerance.
              </p>
              <Button className="button-gradient">
                Get Started Today
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MutualFunds;