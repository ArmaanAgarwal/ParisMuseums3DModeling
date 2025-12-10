import { notFound } from "next/navigation";
import { getObjectBySlug } from "@/data/client";
import { ObjectDetailContent } from "./ObjectDetailContent";

export async function generateStaticParams() {
  const { getAllObjects } = await import("@/data/client");
  const objects = getAllObjects();
  return objects.map((obj) => ({
    slug: obj.slug,
  }));
}

interface ObjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ObjectPage({ params }: ObjectPageProps) {
  const { slug } = await params;
  const object = getObjectBySlug(slug);

  if (!object) {
    notFound();
  }

  return <ObjectDetailContent object={object} />;
}
