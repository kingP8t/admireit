import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights on AI, automation, and digital transformation from the AdmireIT team.",
};

export default function BlogPage() {
  return <BlogContent />;
}
