import { createFileRoute } from "@tanstack/react-router";
import Pricing from "@/pages/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — LMF" },
      { name: "description", content: "LMF membership rate card — monthly, quarterly, half-yearly and yearly plans with access to both HRBR and Kammanahalli branches." },
    ],
  }),
  component: Pricing,
});
