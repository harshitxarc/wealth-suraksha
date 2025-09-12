// Fix for custom window property
declare global {
  interface Window {
    __NAVBAR_HEIGHT__?: number;
  }
}
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const PMS = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: typeof window !== 'undefined' && window.__NAVBAR_HEIGHT__ ? window.__NAVBAR_HEIGHT__ : 112 }}
    >
  <TopBar />
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
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">Portfolio Management Services (PMS)</h1>
            <DecorativeDivider className="mb-6" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">What is PMS?</h2>
                  <p className="text-muted-foreground">
                    Portfolio Management Service (PMS) is a professional service where experienced portfolio managers create and manage customized investment portfolios for high-net-worth individuals and institutions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Customized investment strategies</li>
                    <li>• Direct ownership of securities</li>
                    <li>• Professional portfolio management</li>
                    <li>• Regular performance reporting</li>
                    <li>• Tax-efficient strategies</li>
                  </ul>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">PMS Categories</h2>
                  <div className="space-y-3">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Discretionary PMS</h3>
                      <p className="text-sm text-muted-foreground">Portfolio manager has full authority to make investment decisions</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Non-Discretionary PMS</h3>
                      <p className="text-sm text-muted-foreground">Investment decisions require client approval</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-medium">Advisory PMS</h3>
                      <p className="text-sm text-muted-foreground">Portfolio manager provides investment advice only</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Explore Professional Portfolio Management</h2>
              <p className="text-muted-foreground mb-6">
                Take advantage of our expertise in managing personalized investment portfolios. Our seasoned professionals will craft strategies tailored to your specific financial objectives.
              </p>
              <Button className="button-gradient">
                Learn More About PMS
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PMS;