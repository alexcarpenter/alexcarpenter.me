import * as React from 'react';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import List from '@/components/List';

export default function Work() {
  return (
    <List>
      <List.Item>
        <figure className="mb-4">
          <Image
            src="/images/automations-thumbnail.jpg"
            width="828"
            height="466"
            alt="NationBuilder email automation"
            className="rounded-md"
          />
        </figure>
        <div className="flex flex-col sm:flex-row">
          <div className="w-28 flex-shrink-0">
            <time
              className="mb-2 inline-block text-white text-opacity-75"
              dateTime="2020"
            >
              2020
            </time>
          </div>
          <div className="flex-1">
            <h2>NationBuilder Email Automations</h2>
            {/* <div className='prose mt-2 text-white text-opacity-75'>
              Erat lacus convallis potenti sapien nullam dolor nunc consequat
              vulputate penatibus tellus habitasse velit consectetur tortor sed
              eget ac per netus congue ornare ipsum sagittis facilisi etiam nisi
              cum turpis
            </div> */}
          </div>
        </div>
      </List.Item>
      {/* <List.Item>
        <figure className="mb-4">
          <Image
            src="/images/conservation-legacy-thumbnail.png"
            width="828"
            height="466"
            alt="NationBuilder email automation"
            className="rounded-md"
          />
        </figure>
        <div className="flex flex-col sm:flex-row">
          <div className="w-28 flex-shrink-0">
            <time
              className="mb-2 inline-block text-white text-opacity-75"
              dateTime="2018"
            >
              2018
            </time>
          </div>
          <div className="flex-1">
            <h2>NationBuilder email automations</h2>
            <div className={'prose mt-2 text-white text-opacity-75'}>
              Erat lacus convallis potenti sapien nullam dolor nunc consequat
              vulputate penatibus tellus habitasse velit consectetur tortor sed
              eget ac per netus congue ornare ipsum sagittis facilisi etiam nisi
              cum turpis
            </div>
          </div>
        </div>
      </List.Item> */}
    </List>
  );
}
