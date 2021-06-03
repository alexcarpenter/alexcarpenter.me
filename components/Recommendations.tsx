import * as React from 'react';
import Image from 'next/image';
import List from '@/components/List';
import data from '@/data/recommendations';

export default function Recommendations() {
  return (
    <>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>
            <div className="flex flex-col sm:flex-row">
              <div className="w-28 flex-shrink-0">
                <div className="mb-4">
                  <Image
                    src={`/images/recommendations/${item.thumbnail}`}
                    alt="Picture of Alex Carpenter"
                    width={48}
                    height={48}
                    className="rounded-md w-full block"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p style={{ textIndent: '-.65rem' }}>“{item.text}”</p>
                <p className="mt-4 text-white text-opacity-75">
                  &mdash; {item.name}, {item.title}, {item.company}
                </p>
              </div>
            </div>
          </List.Item>
        ))}
      </List>
    </>
  );
}
