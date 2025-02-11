export async function generateStaticParams() {
  return [
    { slug: ["demo"] },
    { slug: ["demo", "page"] },
    { slug: ["example"] },
  ];
}

export default async function Pages({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return `Catch all /src/app/[...slug]/page.tsx. Slug param: ${JSON.stringify(
    slug
  )}`;
}
