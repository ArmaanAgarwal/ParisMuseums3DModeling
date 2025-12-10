import { notFound } from "next/navigation";
import { getExhibit, getObjectsByExhibit } from "@/data/client";
import { ExhibitDetailContent } from "./ExhibitDetailContent";

interface ExhibitPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExhibitPage({ params }: ExhibitPageProps) {
  const { id } = await params;
  const exhibit = getExhibit(id);

  if (!exhibit) {
    notFound();
  }

  const objects = getObjectsByExhibit(id);

  return <ExhibitDetailContent exhibit={exhibit} objects={objects} />;
}

