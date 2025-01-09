import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      title: "Site & Reach Group",
      duration: "60-Minute Consulting Sessions",
      description: "Dive into the detailed topics of Branding & Strategy and Website Builds. Perfect for creating a standout digital presence.",
      features: [
        "Comprehensive brand strategy development",
        "Website design and optimization",
        "Digital presence analysis",
        "Custom action plan creation"
      ],
      buttons: [
        {
          text: "Schedule Branding & Strategy Session",
          url: "https://api.leadconnectorhq.com/widget/booking/6iVhUwcCFFzLyYhQ6vgC"
        },
        {
          text: "Schedule Website Build Session",
          url: "https://api.leadconnectorhq.com/widget/booking/KVsRG5NHq2da8TmeJQQR"
        }
      ]
    },
    {
      title: "Brand Boost Essentials",
      duration: "45-Minute Consulting Sessions",
      description: "Focused sessions covering Automation, Digital Advertising, Social Media Management, and Funnel Builds.",
      features: [
        "Automation & API integration",
        "Digital advertising strategy",
        "Social media growth tactics",
        "Sales funnel optimization"
      ],
      buttons: [
        {
          text: "Schedule Automation & API Session",
          url: "https://api.leadconnectorhq.com/widget/booking/6RIo398EQ5iSLQNIqD8n"
        },
        {
          text: "Schedule Social Media Session",
          url: "https://api.leadconnectorhq.com/widget/booking/GU752UAzxv0UkdyoejDU"
        },
        {
          text: "Schedule Funnel & Pipeline Session",
          url: "https://api.leadconnectorhq.com/widget/booking/XsiEXJ0pAJmfD7yFhB2Y"
        },
        {
          text: "Schedule Digital Advertising Session",
          url: "https://api.leadconnectorhq.com/widget/booking/gOm0KC2dKU7aKWs5LViU"
        }
      ]
    },
    {
      title: "Quick Impact Session",
      duration: "30-Minute Consulting Sessions",
      description: "Get organized fast with Calendar & Schedule Builds, Form & Survey Builds, and Business Consulting.",
      features: [
        "Calendar and scheduling setup",
        "Form and survey creation",
        "Quick business optimization tips",
        "Immediate action items"
      ],
      buttons: [
        {
          text: "Schedule Business Coaching Session",
          url: "https://api.leadconnectorhq.com/widget/booking/mRw6YVO1i13Lzovbia59"
        },
        {
          text: "Schedule Calendar Build Session",
          url: "https://api.leadconnectorhq.com/widget/booking/1KJh9siSa7PviL4Pa005"
        },
        {
          text: "Schedule Form & Survey Session",
          url: "https://api.leadconnectorhq.com/widget/booking/DkNHK6BQyPcNSeHwnlDi"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Welcome to KPT Social
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored Solutions for Your Business Needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore All Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;