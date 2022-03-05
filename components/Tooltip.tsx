import type { AriaTooltipProps } from '@react-types/tooltip';
import type { TooltipTriggerState } from '@react-stately/tooltip';
import { useTooltip } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import { cx } from '@/lib/utils';

const Tooltip: React.FC<AriaTooltipProps & { state: TooltipTriggerState }> = ({
  state,
  ...props
}) => {
  let { tooltipProps } = useTooltip(props, state);

  return (
    <span
      className={cx(
        'absolute left-1/2 -translate-x-1/2 -translate-y-3 bottom-full text-sm whitespace-nowrap p-2 rounded-md border z-10',
        'bg-white border-gray-200',
        'dark:bg-gray-800 dark:border-gray-700',
      )}
      {...mergeProps(props, tooltipProps)}
    >
      <span
        className={cx(
          'block w-3 h-3 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 border border-r-0 border-t-0 -z-10',
          'bg-white border-gray-200',
          'dark:bg-gray-800 dark:border-gray-700',
        )}
      />
      {props.children}
    </span>
  );
};

export default Tooltip;
