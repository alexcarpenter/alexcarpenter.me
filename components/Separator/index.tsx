import { useSeparator } from '@react-aria/separator';

export default function Separator(props) {
  let { separatorProps } = useSeparator(props);
  return <span {...separatorProps} children={props.children || '•'} />;
}
