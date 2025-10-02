import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrendingUp, Target, Zap } from "lucide-react";

const carouselItems = [
  {
    icon: TrendingUp,
    title: "Tingkatkan Penjualan",
    description: "Strategi efektif untuk meningkatkan omzet bisnis Anda hingga 50%",
    gradient: "gradient-primary",
  },
  {
    icon: Target,
    title: "Jangkau Target Pasar",
    description: "Perluas jangkauan bisnis Anda dengan strategi marketing yang tepat",
    gradient: "gradient-hero",
  },
  {
    icon: Zap,
    title: "Optimalkan Operasional",
    description: "Tingkatkan efisiensi bisnis dengan teknologi dan sistem yang tepat",
    gradient: "gradient-glass",
  },
];

export function HeroCarousel() {
  return (
    <Carousel className="w-full" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card className={`${item.gradient} p-8 rounded-3xl shadow-intense hover-float border-0`}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-glow flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4" />
      <CarouselNext className="hidden md:flex -right-4" />
    </Carousel>
  );
}
