import Page from '@/components/Page';
import ExternalLink from '@/components/ExternalLink';

export default function Automations() {
  return (
    <Page
      meta={{
        title: 'NationBuilder Automations',
      }}
    >
      <Page.Header>
        <Page.Title decorate={false}>Automations</Page.Title>
        <Page.Description>
          Torquent quisque ligula etiam potenti leo ante felis libero vitae
          praesent risus hendrerit dis molestie tortor fringilla mattis inceptos
          quis
        </Page.Description>
        <ExternalLink href="https://nationbuilder.com/automations">
          Learn more
        </ExternalLink>
      </Page.Header>
      <Page.Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, natus!
          Consequuntur nisi atque illo quod in quibusdam, tenetur, fugiat
          tempore, velit optio libero omnis sed aperiam molestiae nihil?
          Quaerat, soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, natus!
          Consequuntur nisi atque illo quod in quibusdam, tenetur, fugiat
          tempore, velit optio libero omnis sed aperiam molestiae nihil?
          Quaerat, soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, natus!
          Consequuntur nisi atque illo quod in quibusdam, tenetur, fugiat
          tempore, velit optio libero omnis sed aperiam molestiae nihil?
          Quaerat, soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, natus!
          Consequuntur nisi atque illo quod in quibusdam, tenetur, fugiat
          tempore, velit optio libero omnis sed aperiam molestiae nihil?
          Quaerat, soluta.
        </p>
      </Page.Content>
    </Page>
  );
}
