import React from 'react'

import ButtonIcon from '../../button/icon'
import { ColorsTemplate } from '../../../styles/theme'
import { IconsTypes } from '../../icon'

import GenericDropdown, { AxisX } from '../generic'
import ListContainer, { MenuItem } from '../generic/simple-options-container'

export type Props = {
  axisX?: AxisX
  icon?: IconsTypes
  items: MenuItem[]
  iconColor?: ColorsTemplate
}

const DropdownIcon = ({
  items,
  icon = 'moreVert',
  axisX = 'left',
  iconColor = 'text',
}: Props) => {
  return (
    <GenericDropdown
      axisX={axisX}
      trigger={({ handleToggle }) => (
        <ButtonIcon flat icon={icon} color={iconColor} onClick={handleToggle} />
      )}
    >
      {(actions) => (
        <ListContainer axisX={axisX} actions={actions} hasArrow items={items} />
      )}
    </GenericDropdown>
  )
}

export default DropdownIcon
