import styled, { css } from 'styled-components'
import map from './svg'

export type IconsTypes = keyof typeof map

export const iconsMap = map

export type Props = {
  name: IconsTypes
  size?: number | string
  className?: string
}

const Wrapper = styled.div<{ iconSize: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ iconSize }) => css`
    svg {
      width: ${iconSize};
      height: ${iconSize};
    }
  `}
`

const Icon = ({ name, size = 16, ...props }: Props) => {
  const Component = map[name]
  const iconSize = typeof size === 'string' ? size : `${size / 16}rem`
  return (
    <Wrapper data-icon-name={name} iconSize={iconSize} {...props}>
      <Component />
    </Wrapper>
  )
}

export default Icon
