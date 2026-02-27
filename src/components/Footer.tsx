import Link from "next/link";
import { getContent } from "@/lib/content";

const content = getContent();

export function Footer() {
  const phone = content.business.phone;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold">{content.business.name}</h3>
            <p className="mt-2 text-sm text-white/70">
              {content.business.address}
            </p>
            {content.business.hours.map((h, i) => (
              <p key={i} className="text-sm text-white/70">{h}</p>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-2 space-y-1">
              {content.pages.services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/" className="text-sm text-white/70 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <div className="mt-2 space-y-2">
              <a href={phoneHref} className="block text-sm text-white/70 hover:text-white">
                {phone}
              </a>
              {content.business.email && (
                <a
                  href={`mailto:${content.business.email}`}
                  className="block text-sm text-white/70 hover:text-white"
                >
                  {content.business.email}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {content.business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
