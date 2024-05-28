import imageUrlBuilder from "@sanity/image-url";
import { useSanityClient } from "@sanity/astro";
const builder = imageUrlBuilder(useSanityClient());
export function urlFor(source) {
    return builder.image(source);
}
