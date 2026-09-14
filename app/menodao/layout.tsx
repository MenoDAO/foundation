import type { Metadata } from "next";
import { en } from "../content/en";

export const metadata: Metadata = {
  title: "MenoDAO",
  description: en.menodao.subhead,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
