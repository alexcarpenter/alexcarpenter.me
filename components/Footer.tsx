import social from '@/data/social';
import BulletList from '@/components/BulletList';

export default function Footer() {
  return (
    <footer className="border-t pt-12 mt-12">
      <h2 className="sr-only">Connect</h2>
      <BulletList cols={['grid-cols-2', 'md:grid-cols-3']}>
        {social.map((item, index) => (
          <BulletList.Item key={index}>
            <a
              {...item}
              className="underline hover:no-underline focus:no-underline"
            />
          </BulletList.Item>
        ))}
      </BulletList>
    </footer>
  );
}
