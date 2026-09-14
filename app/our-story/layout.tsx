import type { Metadata } from "next";
import { en } from "../content/en";

export const metadata: Metadata = {
  title: "Our Story",
  description: en.story.body.slice(0, 155),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
