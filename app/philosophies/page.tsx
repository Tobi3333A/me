import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Philosophies } from "@/components/writings";

export const metadata: Metadata = {
  title: "Philosophies",
};

export default function WritingsPage() {
  return (
    <>
      <PageHeader
        title="Philosophies"
        description="My thoughts on life & tech."
      />
      <div className="mt-10 sm:mt-12">
        <Philosophies showHeading={false} />
      </div>
    </>
  );
}
