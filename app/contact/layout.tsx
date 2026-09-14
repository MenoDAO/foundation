import type { Metadata } from "next";
import { en } from "../content/en";

export const metadata: Metadata = {
  title: "Contact",
  description: en.contact.subhead,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
