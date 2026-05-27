import { createFileRoute } from "@tanstack/react-router";
import LocationsPage from "@/pages/Locations";

export const Route = createFileRoute("/locations")({
  head: () => ({ meta: [{ title: "Locations — LMF" }] }),
  component: LocationsPage,
});
