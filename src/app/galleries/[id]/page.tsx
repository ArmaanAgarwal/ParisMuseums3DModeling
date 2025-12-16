import { notFound } from "next/navigation";
import { getGallery, getObjectsByGallery } from "@/data/client";
import { GalleryDetailContent } from "./GalleryDetailContent";

interface GalleryPageProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { id } = await params;
  const gallery = getGallery(id);

  if (!gallery) {
    notFound();
  }

  const objects = getObjectsByGallery(id);

  return <GalleryDetailContent gallery={gallery} objects={objects} />;
}


