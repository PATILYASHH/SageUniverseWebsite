import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Sage Universe
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're building innovative solutions for tomorrow's challenges
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/projects">
                View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries with cutting-edge technology solutions",
              },
              {
                title: "Expertise",
                description:
                  "Team of skilled professionals with diverse experience",
              },
              {
                title: "Quality",
                description:
                  "Commitment to delivering high-quality, robust solutions",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-card text-card-foreground"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
