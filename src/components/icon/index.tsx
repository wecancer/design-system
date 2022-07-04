import React from 'react'
import map from './svg'

export type IconsTypes = keyof typeof map

export const iconsMap = map

export type Props = {
  name: IconsTypes
  size?: number | string
  className?: string
  title?: string
}

const iconCss: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Icon = ({ name, title, className, size = 16 }: Props) => {
  const Component = map[name]
  const iconSize = typeof size === 'string' ? size : `${size}px`
  return (
    <div
      style={iconCss}
      title={title}
      data-icon-name={name}
      className={className}
    >
      <Component size={iconSize} />
    </div>
  )
}

export default Icon
