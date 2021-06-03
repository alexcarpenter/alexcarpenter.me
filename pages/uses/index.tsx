import Image from 'next/image';
import data from '@/data/uses';
import Page from '@/components/Page';
import List from '@/components/List';

export default function Uses() {
  return (
    <Page title="Uses" description="The tools I use daily to get work done.">
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>
            <div className="flex flex-col sm:flex-row">
              <div className="w-28 flex-shrink-0">
                <Image
                  src={`/images/uses/${item.thumbnail}`}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-md w-full block"
                />
              </div>
              <div className="flex-1">
                <h2>
                  <a
                    href={item.url}
                    className="underline hover:no-underline focus:no-underline"
                  >
                    {item.name}
                  </a>
                  <span>&nbsp;&#8594;</span>
                </h2>
                <p className="mt-2 text-white text-opacity-75">
                  {item.description}
                </p>
              </div>
            </div>
          </List.Item>
        ))}
      </List>
    </Page>
  );
}
