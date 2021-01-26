import data from '@/data/disc-golf';
import Section from '@/components/Section';
import Disc from './Disc';

export default function InTheBag() {
  const keys = Object.keys(data);
  const resources = keys.map((k) => data[k]);
  return (
    <>
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
