import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import Icon from '../icon'
import { Label as InputLabel } from '../form/input/input'

const Container = styled.div`
  position: relative;
`

const Label = styled(InputLabel)<{
  hasError: boolean
  isFocused: boolean
  hasValue: boolean
}>`
  ${({ theme, isFocused, hasValue, hasError }) => css`
    z-index: 30;
    padding-bottom: 0;

    ${(() => {
      if (isFocused || hasValue) {
        return css`
          color: ${theme.colors.label};
          font-size: 0.875rem;
          transform: translateY(calc(-100% - 10px));
          border-radius: 3px 3px 0 0;

          ${(() => {
            if (hasError) {
              return css`
                background: linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(20, 20, 255, 0) 50%,
                  ${theme.colors.bgError} 50%,
                  ${theme.colors.bgError} 100%
                );
              `
            }
            return css`
              background: ${theme.colors.white};
            `
          })()}
        `
      }
      if (hasError) {
        return css`
          color: ${theme.colors.darkError};
          background: ${theme.colors.bgError};
        `
      }
      return css`
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(20, 20, 255, 0) 50%,
          ${theme.colors.white} 50%,
          ${theme.colors.white} 100%
        );
      `
    })()}
  `}
`

const InputTimePicker = styled.div<{ isFocused?: boolean }>`
  ${({ theme, isFocused }) => css`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: 1rem;
    border: 0.125rem solid ${theme.colors.placeholder};
    outline: none;
    transition: all 250ms ease;
    outline: none;

    ${isFocused &&
    css`
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 0.125rem solid ${theme.colors.primary};
      box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusPrimary};
    `}
  `}
`

const OptionsTime = styled.div`
  ${({ theme }) => css`
    width: 140px;
    height: 200px;
    position: absolute;
    overflow: hidden;
    z-index: 35;
    top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    padding: 0.625rem 0;
    justify-content: space-between;
    border-radius: 1rem;
    background-color: ${theme.colors.inputBg};
  `}
`

const Input = styled.input`
  width: 40%;
  height: 100%;
  border: none;
  text-align: center;
  background-color: transparent;

  &:focus {
    box-shadow: none;
    outline: 0;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const OptionCol = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.label};
      border-radius: 20px;
    }
  `}
`

const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 32px;
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: 0.9rem;
    border: none;
    background-color: transparent;

    &:hover {
      background-color: ${theme.colors.line};
    }
  `}
`

type OnChangeParams = {
  value: string
}

type Props = {
  value: string
  label?: string
  onChange(params: OnChangeParams): void
}

const TimePicker = ({ value, onChange, label }: Props) => {
  const hourInputRef = useRef<HTMLInputElement>(null)
  const minuteInputRef = useRef<HTMLInputElement>(null)

  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const hours = new Array(24)
    .fill(null)
    .map((item, index) => `${index}`.padStart(2, '0'))

  const minutes = new Array(60)
    .fill(null)
    .map((item, index) => `${index}`.padStart(2, '0'))

  const [selectedHour, selectedMinute] = value.split(':')

  const handleChange = (hour: string, minute: string) =>
    onChange({ value: `${hour}:${minute}` })

  const handleFocused = (isFocused: boolean) => {
    setIsInputFocused(isFocused)

    if (!isFocused) {
      setTimeout(() => setIsOptionsOpen(isFocused), 200)
      return
    }

    setIsOptionsOpen(isFocused)
  }

  return (
    <Container>
      <InputTimePicker
        role="button"
        tabIndex={-1}
        onKeyDown={() => null}
        onClick={(e) => {
          if (
            e.target !== hourInputRef.current &&
            e.target !== minuteInputRef.current
          ) {
            hourInputRef.current?.focus()
            handleFocused(true)
          }
        }}
        isFocused={isInputFocused}
      >
        {label && (
          <Label
            hasError={false}
            onClick={() => {
              handleFocused(true)
              hourInputRef.current?.focus()
            }}
            hasGapLeft={false}
            isFocused={isInputFocused}
            hasValue={!!value}
          >
            {label}
          </Label>
        )}
        <div>
          <Input
            onFocus={() => handleFocused(true)}
            onBlur={() => handleFocused(false)}
            placeholder={selectedHour}
            type="number"
            ref={hourInputRef}
            value={selectedHour}
            onChange={(event) => {
              handleFocused(true)
              const val = +event.currentTarget.value
              const newHour = val > 23 || val < 0 ? '00' : val
              handleChange(`${newHour}`, selectedMinute)
            }}
          />
          :
          <Input
            ref={minuteInputRef}
            onFocus={() => handleFocused(true)}
            onBlur={() => handleFocused(false)}
            placeholder={selectedMinute}
            type="number"
            value={selectedMinute}
            onChange={(event) => {
              handleFocused(true)
              const val = +event.currentTarget.value
              const newMinute = val > 59 || val < 0 ? '00' : val
              handleChange(selectedHour, `${newMinute}`)
            }}
          />
        </div>
        <Icon name="clock" />
      </InputTimePicker>

      {isOptionsOpen && (
        <OptionsTime role="listbox">
          <OptionCol>
            {hours.map((item) => (
              <Button
                key={item}
                type="button"
                value={item}
                onClick={(e) => {
                  e.stopPropagation()
                  handleChange(item, selectedMinute)
                }}
              >
                {item}
              </Button>
            ))}
          </OptionCol>
          <OptionCol>
            {minutes.map((item) => (
              <Button
                key={item}
                type="button"
                value={item}
                onClick={(e) => {
                  e.stopPropagation()
                  handleChange(selectedHour, item)
                }}
              >
                {item}
              </Button>
            ))}
          </OptionCol>
        </OptionsTime>
      )}
    </Container>
  )
}

export default TimePicker
