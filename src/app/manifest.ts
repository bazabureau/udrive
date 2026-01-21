import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "uDrive Rent-a-Car",
        short_name: "uDrive",
        description: "Premium car rental in Baku",
        start_url: "/az",
        display: "standalone",
        background_color: "#F7F9FB",
        theme_color: "#14F195",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icon-192.png", // Assuming these will be added later or exist
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
