import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://semgoku.pl'

  const cities = [
    'rzeszow', 'warszawa', 'krakow',
    'lodz', 'wroclaw', 'poznan', 'gdansk', 'szczecin',
    'bydgoszcz', 'lublin', 'bialystok', 'katowice',
    'kielce', 'olsztyn', 'zielona-gora', 'opole',
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/miasta`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...cities.map((city) => ({
      url: `${baseUrl}/miasta/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/dziekuje`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
