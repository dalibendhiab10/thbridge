import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  title = '9antra.tn - The Bridge',
  description = '9antra.tn, also known as The Bridge, is an online learning platform and career development organization based in Tunisia. It offers various educational resources and services focused on technology, software development, and professional skills acquisition.',
  keywords = 'Online learning platform Tunisia, Career development courses Tunisia, Technology education programs, Software development training, Professional skills acquisition, Online degrees Tunisia, IT education courses, Career growth opportunities, Tunisian online education, Tech skills training, E-learning platforms Tunisia, Professional certification courses, Digital skills development, Online career advancement, Tunisian online learning platforms, Tech career development, Tunisian e-learning opportunities, Online professional training, Skills enhancement courses, Tunisian online education platforms',
  url = 'https://9antra.tn/',
  image = '/cover.png', 
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="9antra.tn" />
      <link rel="icon" href="/fav.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@9antra.tn" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
      
      {/* Robots Tag */}
      <meta name="robots" content="index, follow" />
      
      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" href="/fav.ico" />
      
      {/* Theme Color for Mobile */}
      <meta name="theme-color" content="#e62b1e" />
      
      {/* Additional Favicons */}
      <link rel="icon" sizes="32x32" href="/fav.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/fav.ico" />

    </Helmet>
  );
}