import { IconProps } from './design-icons/2User';
import { icons } from './icons';

export type IconSymbolName = keyof typeof icons;

export function IconSymbol(props: IconProps) {
  const IconComponent = icons[props.name];
  if (!IconComponent) {
    console.warn(`Icon "${props.name}" not found.`);
    return null;
  }

  return <IconComponent {...props} />;
};