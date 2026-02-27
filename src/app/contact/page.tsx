import type { Metadata } from "next";
import { getContent } from "@/lib/content";

const content = getContent();
const contact = content.pages.contact;

export const metadata: Metadata = {
  title: contact.seo.title,
  description: contact.seo.description,
};

export default function ContactPage() {
  const phoneHref = `tel:${content.business.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl font-extrabold sm:text-4xl">{contact.headline}</h1>
          <p className="mt-3 text-white/80 max-w-2xl">{contact.description}</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-lg">Get In Touch</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href={phoneHref} className="text-accent hover:underline">
                        {content.business.phone}
                      </a>
                    </div>
                  </div>
                  {content.business.email && (
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href={`mailto:${content.business.email}`}
                          className="text-accent hover:underline"
                        >
                          {content.business.email}
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-zinc-600">{content.business.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🕐</span>
                    <div>
                      <p className="text-sm font-medium">Hours</p>
                      {content.business.hours.map((h, i) => (
                        <p key={i} className="text-zinc-600">{h}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Call CTA */}
              <div className="rounded-lg bg-primary p-6 text-white text-center">
                <h3 className="font-semibold text-lg">Need Immediate Help?</h3>
                <p className="mt-1 text-sm text-white/80">
                  Call us now for fast, reliable service.
                </p>
                <a
                  href={phoneHref}
                  className="mt-3 inline-block rounded-md bg-accent px-6 py-2 text-sm font-semibold text-white shadow hover:bg-accent-light transition-colors"
                >
                  Call {content.business.phone}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-lg">Send Us a Message</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      {contact.serviceArea && (
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold">{contact.serviceArea.headline}</h2>
            <p className="mt-3 text-zinc-600 max-w-2xl">
              {contact.serviceArea.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {contact.serviceArea.towns.map((town) => (
                <span
                  key={town}
                  className="rounded-full bg-white border px-4 py-1.5 text-sm text-zinc-700"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
