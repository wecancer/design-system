import React from 'react'
import styled, { css, useTheme } from 'styled-components'

const Container = styled.div<{ avatarSize: number }>`
  ${({ avatarSize }) => css`
    width: ${avatarSize}px;
    height: ${avatarSize}px;
    position: relative;

    figure {
      width: ${avatarSize}px;
      height: ${avatarSize}px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0;
      padding: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `}
`

const Initials = styled.div<{ avatarSize: number }>`
  ${({ theme, avatarSize }) => css`
    width: ${avatarSize}px;
    height: ${avatarSize}px;
    color: ${theme.colors.offWhite};
    font-size: ${avatarSize / 16 / 3}rem;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weights.bold};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
  `}
`

const Status = styled.div<{ pointSize: number; pointColor: string }>`
  ${({ pointSize, pointColor, theme }) => css`
    width: ${pointSize / 16}rem;
    height: ${pointSize / 16}rem;
    background-color: ${pointColor};
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    border: ${pointSize / 16 / 3}rem solid ${theme.colors.offWhite};
  `}
`

export type Props = {
  size?: number
  src?: string
  initials?: string
  status?: 'online' | 'busy' | 'away' | null
}

const Avatar = ({
  src,
  initials = '',
  status = null,
  size = 100,
}: Props): React.ReactElement => {
  const { colors } = useTheme()
  const stateMap = {
    online: colors.success,
    busy: colors.orange,
    away: colors.warning,
  }

  return (
    <Container avatarSize={size}>
      {src && (
        <figure>
          <img src={src} alt="" />
        </figure>
      )}
      {!src && <Initials avatarSize={size}>{initials.substr(0, 2)}</Initials>}
      {status && <Status pointColor={stateMap[status]} pointSize={size / 5} />}
    </Container>
  )
}

export default Avatar
