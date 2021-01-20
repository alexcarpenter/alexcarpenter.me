import data from '@/data/disc-golf';
import Section from '@/components/Section';
import Disc from './Disc';
import ExternalLink from '../ExternalLink';
import Image from 'next/image';

export default function InTheBag() {
  const keys = Object.keys(data);
  const resources = keys.map((k) => data[k]);
  return (
    <>
      {/* <Section>
        <Section.Title>Bag</Section.Title>
        <h3 className="mb-2 text-xl font-bold">GRIPeq CS2 Series Bag</h3>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odit
          consectetur, adipisci nam veritatis nesciunt tenetur reprehenderit.
          Voluptatibus dolores, quis dolorem odit quibusdam praesentium
          molestias eius, quam laborum sapiente perferendis?
        </p>
        <ExternalLink href="">Purchase</ExternalLink>
      </Section> */}
      {resources.map((resource) => (
        <Section key={resource.id}>
          <Section.Title>{resource.title}</Section.Title>
          <div className="space-y-8">
            {resource.items.map((disc, index) => (
              <Disc key={index} {...disc} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
