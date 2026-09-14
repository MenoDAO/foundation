import type { Metadata } from "next";
import { en } from "../content/en";

export const metadata: Metadata = {
  title: "Get Involved",
  description: en.involved.subhead,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
