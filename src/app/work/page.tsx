import Link from "next/link";

import { generateMetaTags } from "../components/generateMetaTags";

export const metadata = generateMetaTags({
  metaTitle: "Sparkt | Work",
  metaDescription: "sparkt Work",
  pageUrl: "https://sparkt.in",
  ogImage: "https://sparkt.in/og.png",
  keywords: [
    "digital agency",
    "creative agency",
    "SMO",
    "SEO",
    "SEM",
    "programmatic media buying",
    "analytics",
    "website design",
    "website development",
  ],
});


const Work = () => {
  return (
    <>
      <section className="section bg-secondary">
        <div className="container fit d-flex align-items-center justify-content-center text-center">
          <div>
            <h1 className="mb-4" > Work Listing Page</h1>
           
              <p className="mb-2" >
                <Link href="/work/ted" className="btn btn-sm btn-primary mb-3">Ted</Link>
              </p>
              <p className="mb-0" >
                <Link href="/work/phillips-education" className="btn btn-sm btn-primary">Phillips Education </Link>
              </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
