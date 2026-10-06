import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error plain JS module
import App from "../App.js";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divakar S — Full Stack Developer & Cybersecurity Enthusiast" },
      { name: "description", content: "Portfolio of Divakar S: React, Node.js, Express, MySQL, MongoDB and network intrusion detection projects." },
      { property: "og:title", content: "Divakar S — Full Stack Developer" },
      { property: "og:description", content: "Full stack web apps and cybersecurity projects by Divakar S." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
