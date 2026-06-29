import { Helmet } from 'react-helmet-async';
import { absoluteUrl, pageTitle, SITE } from '../seo/site';

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function PageMeta({
  title,
  description,
  path,
  image = SITE.defaultImage,
  imageAlt,
  type = 'website',
  noindex = false,
}: PageMetaProps) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = pageTitle(title);
  const alt = imageAlt ?? `${fullTitle} preview`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={alt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={alt} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
}
