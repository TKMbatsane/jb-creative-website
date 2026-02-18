// app/components/StructuredData.tsx
'use client';

import Script from 'next/script';

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "JB Creative Cinema",
        "image": "https://yourwebsite.com/images/logo.jpeg",
        "@id": "https://yourwebsite.com",
        "url": "https://yourwebsite.com",
        "telephone": "+27 76 130 2496",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cnr 40 & D725 South Campus Building, 12 Riverside",
            "addressLocality": "Mbombela",
            "addressRegion": "Mpumalanga",
            "postalCode": "1200",
            "addressCountry": "ZA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.4669,  // approximate coordinates for UMP Center
            "longitude": 30.9862
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/yourpage",
            "https://www.instagram.com/yourpage",
            "https://www.linkedin.com/in/yourpage"
        ]
    };

    return (
        <Script type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}
