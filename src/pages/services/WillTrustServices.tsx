// Fix for custom window property
declare global {
  interface Window {
    __NAVBAR_HEIGHT__?: number;
  }
}
import { ArrowLeft, FileText, Shield, Users, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
// ...removed import for public/assets usage...
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const WillTrustServices = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Will Preparation",
      description: "Professional will drafting to ensure your assets are distributed according to your wishes."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust Formation",
      description: "Establish trusts to protect and manage your assets for future generations."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Estate Planning",
      description: "Comprehensive estate planning to minimize taxes and maximize inheritance."
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Legal Compliance",
      description: "Ensure all documents meet legal requirements and are properly executed."
    }
  ];

  return (
    <div
      className="min-h-screen bg-background"
  style={{ paddingTop: typeof window !== 'undefined' && window.__NAVBAR_HEIGHT__ ? window.__NAVBAR_HEIGHT__ : 96 }}
    >
  <TopBar />
  <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
                  Will / Trust Formation <span className="text-gradient">Services</span>
                </h1>
                <DecorativeDivider className="mb-6" />
                <p className="text-xl text-muted-foreground mb-8">
                  Secure your legacy and protect your loved ones with professional will and trust formation services designed to ensure your wishes are honored.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/assets/will-trust-services.jpg" 
                  alt="Professional will and trust services consultation" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="glass border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Why Professional Will & Trust Services?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Proper estate planning through wills and trusts ensures your assets are protected and distributed according to your wishes while minimizing legal complications for your beneficiaries.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Legally binding and compliant documents
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Tax-efficient estate planning strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Protection of assets for future generations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Regular updates and reviews as needed
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WillTrustServices;