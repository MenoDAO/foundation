import type { Metadata } from "next";
import { en } from "../content/en";

export const metadata: Metadata = {
  title: "Our Impact",
  description: en.impact.subhead,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
