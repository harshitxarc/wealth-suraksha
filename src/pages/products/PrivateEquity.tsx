import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const PrivateEquity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 gradient-text">Private Equity</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">What is Private Equity?</h2>
                  <p className="text-muted-foreground">
                    Private equity involves investments in companies that are not publicly traded on stock exchanges. These investments typically involve buying, improving, and eventually selling companies for significant returns.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Investment Strategies</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Buyouts of established companies</li>
                    <li>• Growth capital for expanding businesses</li>
                    <li>• Venture capital for startups</li>
                    <li>• Distressed investments</li>
                    <li>• Special situations</li>
                  </ul>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Investment Process</h2>
                  <div className="space-y-3">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Due Diligence</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive analysis of target companies</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Value Creation</h3>
                      <p className="text-sm text-muted-foreground">Operational improvements and strategic guidance</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Exit Strategy</h3>
                      <p className="text-sm text-muted-foreground">IPO, strategic sale, or secondary buyout</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Access Private Equity Opportunities</h2>
              <p className="text-muted-foreground mb-6">
                Gain exposure to exclusive private equity investments with potentially higher returns than traditional public markets. Our team identifies and evaluates premium opportunities.
              </p>
              <Button className="button-gradient">
                Explore Private Equity
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivateEquity;