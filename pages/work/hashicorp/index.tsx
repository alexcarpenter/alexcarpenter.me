import Page from '@/components/Page';
import Emoji from '@/components/Emoji';
import List from '@/components/List';
import Entry from '@/components/Entry';
import Section from '@/components/Section';
import Meta from '@/components/Meta';
import Note from '@/components/Note';

export default function HashiCorp() {
  return (
    <Page
      title="HashiCorp"
      description="Web Engineer helping build and maintain public-facing HashiCorp websites and web applications with Next.js."
    >
      <Section>
        <a
          href="https://hashicorp.com"
          className="inline-flex sm:float-right mb-4"
        >
          <span className="sr-only">HashiCorp</span>
          <svg
            aria-hidden={true}
            width="120"
            height="100%"
            viewBox="0 0 317 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107.692 64.421V47.4h-14.97v17.02h-7.623V24.06h7.622v16.602h14.971V24.06h7.622v40.36h-7.622zm35.567-.001h-6.053l-.548-1.996a16.137 16.137 0 01-8.789 2.607c-5.397 0-7.699-3.697-7.699-8.79 0-5.998 2.607-8.3 8.606-8.3h7.089v-3.095c0-3.27-.907-4.421-5.633-4.421a41.255 41.255 0 00-8.179.877l-.907-5.634a38.496 38.496 0 0110.122-1.395c9.269 0 11.998 3.27 11.998 10.672l-.007 19.476zm-7.394-11.151h-5.45c-2.424 0-3.087.663-3.087 2.912 0 2.058.663 2.973 2.972 2.973a11.629 11.629 0 005.572-1.525l-.007-4.36zm21.701 11.754a34.776 34.776 0 01-10.183-1.7l1.029-5.633a33.038 33.038 0 008.788 1.273c3.271 0 3.758-.762 3.758-2.973 0-1.814-.366-2.729-5.152-3.88-7.211-1.76-8.058-3.575-8.058-9.269 0-5.938 2.607-8.545 11.03-8.545 2.98.003 5.949.348 8.85 1.03l-.762 5.876a51.98 51.98 0 00-8.118-.846c-3.209 0-3.758.763-3.758 2.546 0 2.363.183 2.546 4.185 3.575 8.263 2.188 9.055 3.278 9.055 9.307 0 5.725-1.761 9.239-10.664 9.239zm32.663-.602V43.84c0-1.578-.663-2.363-2.363-2.363-1.814 0-5.031 1.09-7.699 2.485v20.459h-7.394V22.847l7.394-1.029v15.33a26.045 26.045 0 0110.786-2.852c4.909 0 6.662 3.453 6.662 8.728v21.397h-7.386zm12.844-33.692v-8.545h7.394v8.545h-7.394zm0 33.692V34.906h7.394v29.515h-7.394zM215.62 35.15c0-7.394 4.299-11.693 14.361-11.693 3.697 0 7.38.447 10.969 1.334l-.839 6.601a59.517 59.517 0 00-9.909-1.029c-5.275 0-6.967 1.822-6.967 6.098v15.512c0 4.3 1.7 6.098 6.967 6.098a59.506 59.506 0 009.909-1.029l.846 6.609a45.672 45.672 0 01-10.968 1.334c-10.062 0-14.361-4.3-14.361-11.693l-.008-18.142zm40.499 29.873c-10.123 0-12.844-5.572-12.844-11.632v-7.455c0-6.06 2.728-11.632 12.844-11.632 10.115 0 12.844 5.572 12.844 11.632v7.455c-.023 6.06-2.744 11.632-12.844 11.632zm0-24.392c-3.941 0-5.45 1.76-5.45 5.092v7.912c0 3.331 1.524 5.092 5.45 5.092 3.925 0 5.45-1.76 5.45-5.092v-7.943c-.015-3.33-1.532-5.092-5.45-5.092v.03zm32.457.457a57.835 57.835 0 00-7.821 4.3v19.056h-7.394V34.906h6.243l.488 3.27a33.064 33.064 0 017.76-3.88l.724 6.792zm28.035 13.515c0 6.548-2.911 10.42-9.756 10.42a40.76 40.76 0 01-7.882-.853v12.196l-7.394 1.029V34.906h5.877l.762 2.485a15.535 15.535 0 019.33-3.087c5.938 0 9.086 3.514 9.086 10.245l-.023 10.054zm-17.631 3.331c2.152.474 4.346.73 6.548.763 2.668 0 3.697-1.274 3.697-3.941V44.35c0-2.424-.907-3.758-3.636-3.758a10.46 10.46 0 00-6.609 2.668v14.673zM29.134 7L0 23.808v40.361l10.946 6.32V30.127l18.188-10.504V7z"
              fill="currentColor"
            ></path>
            <path
              d="M40.758 7v32.144H29.133V27.147l-10.945 6.319V74.65l10.946 6.335V48.932h11.624v11.914l10.946-6.312V13.32L40.758 7z"
              fill="currentColor"
            ></path>
            <path
              d="M40.758 81L69.89 64.192V23.831l-10.946-6.32v40.362L40.758 68.377V81z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <Meta>
          <Meta.Item title="Start date" description="July 2021" />
          <Meta.Item title="Position" description="Web Engineer II" />
          <Meta.Item
            title="Tools"
            description="Next.js, CSS Modules, TypeScript, DatoCMS"
          />
        </Meta>

        <div className="mt-12">
          <Note label="On-Deck" variant="violet">
            Building a new internationalized Next.js site for{' '}
            <a href="https://www.hashicorp.com/blog/announcing-hashitalks-2021-call-for-proposals">
              HashiTalks
            </a>{' '}
            backed by DatoCMS.
          </Note>
        </div>
      </Section>

      <Section heading="Updates" headingGap="lg">
        <List>
          <List.Item>
            <Entry
              date="Oct 28, 2021"
              title="Industry pages"
              link="https://hashicorp.com/industries/financial-services"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Oct 19, 2021"
              title="HCP Packer page"
              link="https://cloud.hashicorp.com/products/packer"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Oct 14, 2021"
              title="Waypoint homepage"
              link="https://waypointproject.io"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Sep 30, 2021"
              title="Zero trust security with HashiCorp and Microsoft Azure page"
              link="https://hashicorp.com/solutions/zero-trust-security-microsoft-azure"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Sep 30, 2021"
              title="Boundary homepage updates"
              link="https://boundaryproject.io/"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Sep 8, 2021"
              title="HashiCorp about pages"
              link="https://hashicorp.com/about"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Aug 11, 2021"
              title="State of the Cloud page"
              link="https://hashicorp.com/state-of-the-cloud"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Jul 29, 2021"
              title="Consul on the HashiCorp Cloud Platform"
              link="https://cloud.hashicorp.com/try-hcp-consul"
            />
          </List.Item>

          <List.Item>
            <Entry
              date="Jul 26, 2021"
              title={
                <>
                  <Emoji label="Tada">🎉</Emoji> Joined HashiCorp as a Web
                  Engineer II on the core&nbsp;team.
                </>
              }
            />
          </List.Item>
        </List>
      </Section>
    </Page>
  );
}
