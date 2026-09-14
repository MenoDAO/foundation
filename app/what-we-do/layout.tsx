import type { Metadata } from "next";
import { en } from "../content/en";

export const metadata: Metadata = {
  title: "What We Do",
  description: en.work.intro,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
