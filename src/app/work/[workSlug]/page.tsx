import { notFound } from 'next/navigation';
import WorkBanner from "@/app/components/work/banner";
import WorkMenu from "@/app/components/work/workMenu";
import { generateMetaTags } from '@/app/components/generateMetaTags';

export const metadata = generateMetaTags({
  metaTitle: "Ted | Work | Sparkt",
  metaDescription: "Test Description",
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




// This function will run at build time to generate the static paths
export async function generateStaticParams() {
  const getWorkList = await Promise.resolve(['ted', 'phillips-education']);
  return getWorkList.map(work => ({
    workSlug: work
  }));
}

// This component will receive the `workSlug` as a parameter
export default function WorkDetail({ params }: { params: { workSlug: string } }) {
  const { workSlug } = params;

  // You can fetch additional data here based on `workSlug` if needed
  // For this example, we'll just use static data

  if (!['ted', 'phillips-education'].includes(workSlug)) {
    notFound(); // This will trigger a 404 page if the slug is not found
  }

  return (
    <div className="section bg-primary">
      <WorkBanner
        title={workSlug}
        subText="Lorem ipsum lorem ipsum"
        videoUrl="https://youtu.be/reavbJxQ9Lw?si=2-vB-nqDisvabRTv"
        imageUrl="/work/banners/star-plus-ted.jpg"
      />
      <WorkMenu />
    </div>
  );
}
