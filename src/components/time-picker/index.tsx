import React, { useState, useEffect, useRef } from 'react'
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
    width: 200px;
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

    ${isFocused &&
    css`
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 0.125rem solid ${theme.colors.primary};
      box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusPrimary};
    `}

    & > div[data-icon-name] {
      cursor: pointer;
    }
  `}
`

const OptionsTime = styled.div<{ isOpen?: boolean }>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    z-index: 35;
    top: 50px;
    display: ${isOpen ? 'flex' : 'none'};
    justify-content: space-between;
    width: 200px;
    height: 200px;
    padding: 5px;
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

const Cell = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 34;
    width: 100%;
    overflow: hidden;

    &:hover {
      overflow-y: scroll;
    }

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 20px;
    }

    & > ul {
      width: 100%;
      list-style: none;
    }

    & > ul > li {
      width: 85px;
      margin: 10px 5px;
      padding: 5px;
      text-align: center;
      border-radius: 0.3rem;
      background-color: ${theme.colors.offWhite};
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.focusPrimary};
      }
    }
  `}
`
const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: none;
    font-family: ${theme.font.family};
    font-size: 0.9rem;
    background-color: transparent;
  `}
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  border: none;
  outline: 0;
  background-color: transparent;
  padding-left: 80px;
  cursor: pointer;
`

type OnChangeParams = {
  value: string
}

type Props = {
  id?: string
  value: string
  label?: string
  onChange(params: OnChangeParams): void
}

const TimePicker = ({ value, onChange, id, label, ...props }: Props) => {
  const innerRef = useRef<HTMLInputElement>(null)

  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const [selectedHour, setSelectedHour] = useState('00')
  const hours = new Array(24)
    .fill(null)
    .map((item, index) => `${index}`.padStart(2, '0'))

  const [selectedMinute, setSelectedMinute] = useState('00')
  const minutes = new Array(60)
    .fill(null)
    .map((item, index) => `${index}`.padStart(2, '0'))

  useEffect(() => {
    const [hour, minute] = value.split(':')
    setSelectedHour(hour)
    setSelectedMinute(minute)
  }, [value])

  const handleChange = (hour: string, minute: string) => {
    onChange({ value: `${hour}:${minute}` })
  }

  return (
    <Container {...props}>
      <InputTimePicker id={id} isFocused={isInputFocused}>
        {label && (
          <Label
            hasError={false}
            onClick={() => {
              setIsInputFocused(true)
              innerRef.current?.focus()
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
            id="hour"
            onFocus={() => {
              setIsInputFocused(true)
              setIsOptionsOpen(true)
            }}
            placeholder={selectedHour}
            type="number"
            ref={innerRef}
            value={selectedHour}
            onChange={(event) => {
              setIsOptionsOpen(true)
              const newHour =
                +event.currentTarget.value > 23 ||
                +event.currentTarget.value < 0 ||
                +event.currentTarget.value.length > 2
                  ? '00'
                  : event.currentTarget.value
              setSelectedHour(newHour)
              handleChange(newHour, selectedMinute)
            }}
          />
          :
          <Input
            id="minute"
            onFocus={() => {
              setIsInputFocused(true)
              setIsOptionsOpen(true)
            }}
            placeholder={selectedMinute}
            type="number"
            value={selectedMinute}
            onChange={(event) => {
              setIsOptionsOpen(true)
              const newMinute =
                +event.currentTarget.value > 59 ||
                +event.currentTarget.value < 0 ||
                +event.currentTarget.value.length > 2
                  ? '00'
                  : event.currentTarget.value
              setSelectedMinute(newMinute)
              handleChange(selectedHour, newMinute)
            }}
          />
        </div>
        <ButtonIcon
          onClick={() => {
            setIsInputFocused(true)
            innerRef.current?.focus()
          }}
        >
          <Icon name="clock" />
        </ButtonIcon>
      </InputTimePicker>
      <OptionsTime
        isOpen={isOptionsOpen}
        onMouseLeave={() => {
          setIsInputFocused(false)
          setIsOptionsOpen(false)
        }}
      >
        <Cell>
          <ul>
            {hours.map((item) => (
              <li key={item}>
                <Button
                  type="button"
                  value={item}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleChange(item, selectedMinute)
                  }}
                  id={`hour-${item}`}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell>
          <ul>
            {minutes.map((item) => (
              <li key={item}>
                <Button
                  type="button"
                  value={item}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleChange(selectedHour, item)
                  }}
                  id={`minute-${item}`}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </Cell>
      </OptionsTime>
    </Container>
  )
}

export default TimePicker
