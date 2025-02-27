import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">About Sage Universe</h1>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be at the forefront of technological innovation, creating solutions
              that empower and inspire the next generation of developers and
              technologists.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We strive to develop cutting-edge software solutions that solve
              real-world problems while fostering a community of innovation and
              collaboration.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Our Values</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries and exploring new technologies
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Collaboration</h3>
                <p className="text-muted-foreground">
                  Working together to achieve greater results
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  Maintaining high standards in everything we do
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Community</h3>
                <p className="text-muted-foreground">
                  Building and supporting the developer community
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
