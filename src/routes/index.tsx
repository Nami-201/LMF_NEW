import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LMF — Leon Maestro De Fitness" },
      { name: "description", content: "Bold, futuristic premium fitness brand." },
    ],
  }),
  component: Index,
});
