import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  duration: string;
  description: string;
  features: string[];
  buttonText: string;
}

export function ServiceCard({ title, duration, description, features, buttonText }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="service-card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-blue-600 font-medium">{duration}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div
        className={cn(
          "space-y-3 overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button className="w-full mt-4" variant="outline">
        {buttonText}
      </Button>
    </div>
  );
}