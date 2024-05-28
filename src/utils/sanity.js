import { useSanityClient } from "@sanity/astro";
import groq from "groq";
export async function getPosts() {
    return await useSanityClient().fetch(groq `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`);
}
export async function getPost(slug) {
    return await useSanityClient().fetch(groq `*[_type == "post" && slug.current == $slug][0]`, {
        slug,
    });
}
