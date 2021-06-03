import Image from 'next/image';
import List from '@/components/List';

export default function Experience() {
  return (
    <List>
      <List.Item>
        <div className="flex flex-col sm:flex-row">
          <div className="w-28 flex-shrink-0">
            <Image
              src={`/images/experience/nationbuilder.png`}
              alt="Picture of Alex Carpenter"
              width={48}
              height={48}
              className="rounded-md w-full block"
            />
          </div>
          <div className="flex-1">
            <h2>NationBuilder</h2>
            <p className="text-white text-opacity-75">
              2018&mdash;Present{' '}
              <span role="separator" aria-orientation="vertical">
                &#183;
              </span>{' '}
              UI Engineer
            </p>

            <ul className="mt-2">
              {/* <li>
                <span
                  role="img"
                  aria-hidden="true"
                  className="text-white text-opacity-75"
                >
                  &#8594;
                </span>{' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, atque?
              </li> */}
            </ul>
          </div>
        </div>
      </List.Item>
      <List.Item>
        <div className="flex flex-col sm:flex-row">
          <div className="w-28 flex-shrink-0">
            <Image
              src={`/images/experience/mighty-in-the-midwest.png`}
              alt="Picture of Alex Carpenter"
              width={48}
              height={48}
              className="rounded-md w-full block"
            />
          </div>
          <div className="flex-1">
            <h2>Mighty in the Midwest</h2>
            <p className="text-white text-opacity-75">
              2015&mdash;2018{' '}
              <span role="separator" aria-orientation="vertical">
                &#183;
              </span>{' '}
              Senior Developer
            </p>
          </div>
        </div>
      </List.Item>
      <List.Item>
        <div className="flex flex-col sm:flex-row">
          <div className="w-28 flex-shrink-0">
            <Image
              src={`/images/experience/masuga-design.jpeg`}
              alt="Picture of Alex Carpenter"
              width={48}
              height={48}
              className="rounded-md w-full block"
            />
          </div>
          <div className="flex-1">
            <h2>Masuga Design</h2>
            <p className="text-white text-opacity-75">
              2012&mdash;2015{' '}
              <span role="separator" aria-orientation="vertical">
                &#183;
              </span>{' '}
              Front-end Developer
            </p>
          </div>
        </div>
      </List.Item>
    </List>
  );
}
