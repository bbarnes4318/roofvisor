import type { Metadata } from "next";
import PropertiesLanding from "./PropertiesLanding";

export const metadata: Metadata = {
  title: "VelocityRE.pro | One Listing Guaranteed",
  description:
    "Get 50 predictive seller opportunities every month, a protected local market, and one listing guaranteed under written program terms.",
};

export default function PropertiesPage() {
  return <PropertiesLanding />;
}
