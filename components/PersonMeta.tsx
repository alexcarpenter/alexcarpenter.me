import Image from 'next/image';
import Meta from '@/components/Meta';

interface PersonMetaProps {
  meta: Array<{
    title: string;
    description: string;
  }>;
  avatar: string;
}

export default function PersonMeta({ meta, avatar }: PersonMetaProps) {
  return (
    <div className="relative clear-both">
      <div className="relative float-right w-1/3 ml-4 md:ml-8 mb-4 md:mb-8 inline-flex rounded-md overflow-hidden">
        <Image src={avatar} width={400} height={400} alt="" />
      </div>
      <Meta items={meta} />
    </div>
  );
}
