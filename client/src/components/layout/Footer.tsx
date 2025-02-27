import { Link } from "wouter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sage Universe</h3>
            <p className="text-sm text-muted-foreground">
              Building the future through innovation and technology
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Projects", "Team", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sageuniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/company/sageuniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/sageuniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest news and updates
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Sage Universe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
