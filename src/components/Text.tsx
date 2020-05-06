import React from 'react';

type Props = {
  children: string;
  Wrapper?: any;
}

/**
 * Automatically break lines for text
 *
 * Avoids relying on <br /> for every line break
 *
 * @example
 * <Text>
 *   {`
 *     First line
 *
 *     Another line, which will respect line break
 *  `}
 * </Text>
 * @param props
 */
export const Text: React.FunctionComponent<Props> = (props) => {
  const { children, Wrapper = 'div' } = props;

  return (
    <Wrapper style={{ whiteSpace: 'pre-line' }}>
      {children}
    </Wrapper>
  );
};

export default Text;
