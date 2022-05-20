import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
`

const InputTimePicker = styled.div<{ isFocused?: boolean }>`
  ${({ theme, isFocused }) => css`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
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
  `}
`

const OptionsTime = styled.div<{ isOpen?: boolean }>`
  ${({ theme, isOpen }) => css`
    position: relative;
    z-index: 35;
    top: 35px;
    display: ${isOpen ? 'flex' : 'none'};
    justify-content: space-between;
    width: 150px;
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
    box-shadow: 0 0 0 0;
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
    width: 50%;
    overflow: hidden;

    &:hover {
      overflow-y: scroll;
    }

    &::-webkit-scrollbar {
      width: 5px;
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
      width: 90%;
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

type OnChangeParams = {
  value: string
  event: React.ChangeEvent<HTMLInputElement> | null
}

type Props = {
  id?: string
  value: string
  onChange(params: OnChangeParams): void
}

const TimePicker = ({ value, onChange, id, ...props }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const [selectedHour, setSelectedHour] = useState('00')
  const hours = new Array(23)
    .fill(null)
    .map((item, index) => `${index + 1}`.padStart(2, '0'))

  const [selectedMinute, setSelectedMinute] = useState('00')
  const minutes = new Array(59)
    .fill(null)
    .map((item, index) => `${index + 1}`.padStart(2, '0'))

  useEffect(() => {
    const [hour, minute] = value.split(':')
    setSelectedHour(hour)
    setSelectedMinute(minute)
  }, [value])

  return (
    <Container
      {...props}
      onMouseEnter={() => {
        setIsInputFocused(true)
        setIsOptionsOpen(true)
      }}
    >
      <InputTimePicker id={id} isFocused={isInputFocused}>
        <Input
          onFocus={() => setIsOptionsOpen(true)}
          type="number"
          min="0"
          max="23"
          placeholder="00"
          value={parseInt(selectedHour) > 23 ? '23' : selectedHour}
          onChange={(event) =>
            setSelectedHour(
              parseInt(event.currentTarget.value) > 23
                ? '23'
                : event.currentTarget.value,
            )
          }
        />
        :
        <Input
          onFocus={() => setIsOptionsOpen(true)}
          type="number"
          min="0"
          max="59"
          placeholder="00"
          value={selectedMinute}
          onChange={(event) =>
            setSelectedMinute(
              parseInt(event.currentTarget.value) > 59
                ? '00'
                : event.currentTarget.value,
            )
          }
        />
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
                  value={item}
                  onClick={() => setSelectedHour(item)}
                  id={item}
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
                  value={item}
                  onClick={() => setSelectedMinute(item)}
                  id={item}
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
