import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * This component is not supported more
 * @deprecated
 */
export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
