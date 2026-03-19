import { FutureRoutePage } from "@/components/site/future-route-page";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Municipalities | Roofing Recyclers",
  description:
    "Future municipal, landfill, and public-sector partnership routes for Roofing Recyclers.",
  path: "/municipalities",
});

export default function MunicipalitiesPage() {
  return <FutureRoutePage routeKey="municipalities" />;
}
