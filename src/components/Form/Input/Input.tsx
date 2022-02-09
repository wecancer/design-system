import React from 'react'
import styled, {css} from 'styled-components'

import Icon, {IconsTypes} from '../../Icon'

const Wrapper = styled.div`
  ${({theme}) => css`
    position: relative;
    font-family: ${theme.font.familyRedesign};
  `}
`

const Input = styled.input<{hasGapLeft: boolean; hasGapRight: boolean}>`
  ${({theme, hasGapLeft, hasGapRight}) => css`
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: border-box;
    font-family: ${theme.font.familyRedesign};
    border: 0.125rem solid ${theme.colors.placeholder};
    background-color: ${theme.colors.offWhite};
    border-radius: 1rem;
    outline: none;

    ${hasGapLeft
      ? css`
          padding-left: 2.5rem;
        `
      : css`
          padding-left: 1rem;
        `}

    ${hasGapRight
      ? css`
          padding-right: 2.5rem;
        `
      : css`
          padding-right: 1rem;
        `}

    &:focus {
      border-color: ${theme.colors.titleActive};
    }

    &[value]:not([value='']) + label,
    &:focus + label {
      color: ${theme.colors.label};
      font-size: 0.875rem;
      transform: translateY(calc(-100% - 0.625rem));
    }
  `}
`

const IconLeft = styled(Icon)`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
`

const ButtonRight = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  appearance: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`

const Label = styled.label<{hasGapLeft: boolean}>`
  ${({theme, hasGapLeft}) => css`
    position: absolute;
    top: 50%;
    left: 0.875rem;
    padding: 0 0.25rem;
    transition: all 250ms ease;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(20, 20, 255, 0) 50%,
      ${theme.colors.offWhite} 50%,
      ${theme.colors.offWhite} 100%
    );

    ${hasGapLeft
      ? css`
          transform: translate(1.25rem, -50%);
        `
      : css`
          transform: translateY(-50%);
        `}
  `}
`

type InputTypes = 'text' | 'password' | 'email' | 'search'

type Value = string

type OnChangeParams = {
  value: Value
  event: React.ChangeEvent<HTMLInputElement> | null
}

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'type' | 'css' | 'onChange'> & {
  id?: string
  label?: string
  value?: Value
  type: InputTypes
  onChange(params: OnChangeParams): void
  iconLeft?: IconsTypes
  iconButtonRight?: {
    type: IconsTypes
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  }
}

const InputText = React.forwardRef<HTMLInputElement, Props>(
  ({label, iconLeft, onChange, iconButtonRight, id, ...props}: Props, ref) => {
    const hasGapLeft = !!iconLeft
    const hasGapRight = !!iconButtonRight

    return (
      <Wrapper>
        <Input
          {...props}
          ref={ref}
          id={id}
          hasGapLeft={hasGapLeft}
          hasGapRight={hasGapRight}
          onChange={(event) => onChange({value: event.currentTarget.value, event})}
        />
        {label && (
          <Label htmlFor={id} hasGapLeft={hasGapLeft}>
            {label}
          </Label>
        )}
        {iconLeft && <IconLeft className="icon-left" size={14} name={iconLeft} />}
        {iconButtonRight && (
          <ButtonRight type="button" onClick={iconButtonRight.onClick}>
            <Icon className="icon-right" name={iconButtonRight.type} />
          </ButtonRight>
        )}
      </Wrapper>
    )
  },
)

export default InputText
