import { createFileRoute } from "@tanstack/react-router";
import Programs from "@/pages/Programs";

export const Route = createFileRoute("/programs")({
  head: () => ({ meta: [{ title: "Programs — LMF" }] }),
  component: Programs,
});
