import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
`

const TimePicker = styled.div`
  ${({ theme }) => css`
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
  `}
`

const OptionsTime = styled.div<{ isOpen?: boolean }>`
  ${({ theme, isOpen }) => css`
    position: relative;
    z-index: 35;
    top: 10px;
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

    &:hover < li {
      background-color: red;
    }
  `}
`

const InputTimePicker = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const [selectedHour, setSelectedHour] = useState('00')
  const [hour, setHour] = useState([
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ])

  const [selectedMinute, setSelectedMinute] = useState('00')
  const [minute, setMinute] = useState([
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ])

  return (
    <Container>
      <TimePicker>
        <Input
          onFocus={() => setIsOptionsOpen(true)}
          type="number"
          min="0"
          max="23"
          placeholder="00"
          value={selectedHour}
          onChange={(event) => setSelectedHour(event.currentTarget.value)}
        />
        :
        <Input
          onFocus={() => setIsOptionsOpen(true)}
          type="number"
          min="0"
          max="59"
          placeholder="00"
          value={selectedMinute}
          onChange={(event) => setSelectedHour(event.currentTarget.value)}
        />
      </TimePicker>
      <OptionsTime
        isOpen={isOptionsOpen}
        onMouseLeave={() => setIsOptionsOpen(false)}
      >
        <Cell>
          <ul>
            {hour.map((item) => (
              <li>
                <Button
                  value={item}
                  onClick={() => setSelectedHour(item)}
                  key={item}
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
            {minute.map((item) => (
              <li>
                <Button
                  value={item}
                  onClick={() => setSelectedMinute(item)}
                  key={item}
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

export default InputTimePicker
