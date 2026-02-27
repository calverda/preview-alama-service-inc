import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";

const content = getContent();
const home = content.pages.home;

export const metadata: Metadata = {
  title: home.seo.title,
  description: home.seo.description,
};

const TRUST_ICONS: Record<string, string> = {
  shield: "🛡️",
  clock: "⏰",
  award: "🏆",
  check: "✅",
  star: "⭐",
  phone: "📞",
  tools: "🔧",
  home: "🏠",
};

export default function HomePage() {
  const phoneHref = `tel:${content.business.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            {home.hero.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {home.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={home.hero.ctaPrimary.href}
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow hover:bg-accent-light transition-colors"
            >
              {home.hero.ctaPrimary.text}
            </a>
            <Link
              href={home.hero.ctaSecondary.href}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {home.hero.ctaSecondary.text}
            </Link>
          </div>
          {home.hero.stats && home.hero.stats.length > 0 && (
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {home.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Trust Bar ── */}
      {home.trustBar && home.trustBar.length > 0 && (
        <section className="border-b bg-zinc-50">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-4 sm:gap-10 sm:px-6">
            {home.trustBar.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-zinc-600">
                <span>{TRUST_ICONS[item.icon] ?? "✓"}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Services Summary ── */}
      <section id="services" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Our Services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.servicesSummary.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{svc.icon}</span>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                  {svc.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{svc.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      {home.aboutPreview && (
        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">
                {home.aboutPreview.headline}
              </h2>
              <p className="mt-4 text-zinc-600">{home.aboutPreview.text}</p>
              <Link
                href={home.aboutPreview.link}
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Testimonials ── */}
      {home.testimonials && home.testimonials.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              What Our Customers Say
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {home.testimonials.map((t, i) => (
                <div key={i} className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="mb-2 text-accent">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                  <p className="text-sm text-zinc-600 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-semibold">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{home.cta.headline}</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            {home.cta.description}
          </p>
          <a
            href={home.cta.buttonHref ?? phoneHref}
            className="mt-6 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white shadow hover:bg-accent-light transition-colors"
          >
            {home.cta.buttonText}
          </a>
        </div>
      </section>
    </>
  );
}
