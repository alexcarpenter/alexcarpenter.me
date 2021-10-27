import social from '@/data/social';
import BulletList from '@/components/BulletList';
import ThemeSelect from '@/components/ThemeSelect';
import { cx, borderColor } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className={cx('border-t pt-12 mt-12', borderColor)}>
      <h2 className="sr-only">Connect</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="col-span-2">
          <BulletList cols={['grid-cols-2']}>
            {social.map((item, index) => (
              <BulletList.Item key={index}>
                <a
                  {...item}
                  className="underline hover:no-underline focus:no-underline"
                />
              </BulletList.Item>
            ))}
          </BulletList>
        </div>
        <div>
          <ThemeSelect />
        </div>
      </div>
    </footer>
  );
}
