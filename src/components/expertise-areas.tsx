import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

interface ExpertiseAreasProps {
  title: string;
  description?: string;
  areas?: string[];
}

export const ExpertiseAreas: React.FC<ExpertiseAreasProps> = ({
  title,
  description,
  areas
}) => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 xl:px-[15%] px-5 py-10 xl:py-20 gap-10 bg-blue-100/30 items-center">
      {/* Text Section */}
      <div className="space-y-4">
        <p className="text-3xl xl:text-5xl text-primary font-semibold text-center xl:text-left">
          {title}
        </p>
       {description && (
          <p className=" text-base xl:text-lg text-center">
            {description}
          </p>
        )}
      </div>

      {/* Areas Section */}
      <div className="grid grid-cols-2 gap-4">
        {areas?.map((area, index) => (
          <Button
            key={index}
            variant="outline"
            className="text-center hover:text-white border-secondary py-3 px-5 text-wrap"
          >
            {area}
          </Button>
        ))}
      </div>
    </section>
  );
};
