import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <meta
        property="og:url"
        content="https://medicalstaff.com.au"
        key="ogurl"
      />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:title" content="Medical Staff" key="ogtitle" />
      <meta
        property="og:description"
        content="Medical Staff is a leading recruitment agency in Australia for Nurses, Doctors and allied health.Actively serving in Sydney, Brisbane &amp; Melbourne - Apply Now."
        key="ogdescription"
      />
      <meta
        property="og:image"
        content="https://medicalstaff.com.au/logo.jpg"
        key="ogimage"
      />
      <meta
        name="twitter:title"
        content="European Travel Destinations "
        key="twtitle"
      />

      <meta
        name="twitter:description"
        content="Medical Staff is a leading recruitment agency in Australia for Nurses, Doctors and allied health.Actively serving in Sydney, Brisbane &amp; Melbourne - Apply Now."
        key="twdescription"
      />
      <meta
        name="twitter:image"
        content="https://medicalstaff.com.au/logo.jpg"
        key="twimage"
      />

      <title>Medical Staff</title>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
