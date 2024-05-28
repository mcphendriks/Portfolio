
import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import { defineConfig } from "astro/config";

const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";


export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [sanity({
    projectId,
    dataset,
    studioBasePath: "/admin",
    useCdn: false,
    apiVersion: "2023-03-20" 
  }), react() 
  ]
});