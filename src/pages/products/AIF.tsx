import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const AIF = () => {
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
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">Alternate Investment Fund (AIF)</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">What is AIF?</h2>
                  <p className="text-muted-foreground">
                    Alternative Investment Funds (AIFs) are privately pooled investment vehicles that invest in alternative assets like private equity, hedge funds, real estate, commodities, and other non-traditional investments.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Diversification beyond traditional assets</li>
                    <li>• Access to exclusive investment opportunities</li>
                    <li>• Professional fund management</li>
                    <li>• Potential for higher returns</li>
                    <li>• SEBI regulated framework</li>
                  </ul>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">AIF Categories</h2>
                  <div className="space-y-3">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Category I AIF</h3>
                      <p className="text-sm text-muted-foreground">Venture capital, infrastructure funds, social venture funds</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Category II AIF</h3>
                      <p className="text-sm text-muted-foreground">Private equity, debt funds, funds of funds</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Category III AIF</h3>
                      <p className="text-sm text-muted-foreground">Hedge funds employing complex trading strategies</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Discover Alternative Investments</h2>
              <p className="text-muted-foreground mb-6">
                Expand your portfolio with alternative investment opportunities that offer diversification and potential for enhanced returns beyond conventional asset classes.
              </p>
              <Button className="button-gradient">
                Explore AIF Options
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIF;