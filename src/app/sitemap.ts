import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://udrive.az";

    const languages = ["az", "en", "ru"] as const;
    const routes = ["", "/cars", "/haqqimizda", "/korporativ", "/transfer", "/contact"];

    return routes.flatMap((route) =>
        languages.map((lang) => ({
            url: `${baseUrl}/${lang}${route}`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: route === "" ? 1 : 0.8,
        }))
    );
}
