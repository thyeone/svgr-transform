import { forwardRef } from 'react';
import * as Icons from './icons';

type IconName = keyof typeof Icons;

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;
};

function Icon(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  const { name, width = 24, height = 24, fill = 'none', ...rest } = props;
  const IconElement = Icons[name];

  return (
    <IconElement
      ref={ref}
      width={width}
      height={height}
      fill={fill}
      style={{
        flexShrink: 0,
      }}
      {...rest}
    />
  );
}

export default forwardRef(Icon);
