import type { Metadata } from "next";
import { getContent } from "@/lib/content";

const content = getContent();
const about = content.pages.about;

export const metadata: Metadata = {
  title: about.seo.title,
  description: about.seo.description,
};

export default function AboutPage() {
  const phoneHref = `tel:${content.business.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl font-extrabold sm:text-4xl">{about.headline}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-600 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      {about.whyChooseUs && about.whyChooseUs.length > 0 && (
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold">
              Why Choose {content.business.name}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.whyChooseUs.map((item, i) => (
                <div key={i} className="rounded-lg bg-white border p-6 text-center shadow-sm">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold">Ready to Work Together?</h2>
          <p className="mt-2 text-white/80">
            Contact us today for a free consultation.
          </p>
          <a
            href={phoneHref}
            className="mt-4 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white shadow hover:bg-accent-light transition-colors"
          >
            Call {content.business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
