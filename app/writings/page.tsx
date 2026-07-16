import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Writings } from "@/components/writings";

export const metadata: Metadata = {
  title: "Writings",
};

export default function WritingsPage() {
  return (
    <>
      <PageHeader
        title="Writings"
        description="Notes on building, craft, and keeping product work simple."
      />
      <div className="mt-10 sm:mt-12">
        <Writings showHeading={false} />
      </div>
    </>
  );
}
