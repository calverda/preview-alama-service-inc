import type { Metadata } from "next";
import Link from "next/link";
import { getContent, getService, getAllServiceSlugs } from "@/lib/content";
import { notFound } from "next/navigation";

const content = getContent();

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.seo.title,
    description: svc.seo.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const phoneHref = `tel:${content.business.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-zinc-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 text-sm text-zinc-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <Link href="/#services" className="hover:text-primary">Services</Link>
          {" / "}
          <span className="text-zinc-900 font-medium">{svc.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl font-extrabold sm:text-4xl">{svc.headline}</h1>
          <a
            href={phoneHref}
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow hover:bg-accent-light transition-colors"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-zinc max-w-none">
            {svc.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed">{para}</p>
            ))}
          </div>

          {/* Features */}
          {svc.features && svc.features.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold">What We Offer</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {svc.features.map((f, i) => (
                  <div key={i} className="rounded-lg border bg-zinc-50 p-4">
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold">{svc.cta.headline}</h2>
          <a
            href={svc.cta.buttonHref ?? phoneHref}
            className="mt-4 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white shadow hover:bg-accent-light transition-colors"
          >
            {svc.cta.buttonText}
          </a>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-bold">Other Services</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.pages.services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-50 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
