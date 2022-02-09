import React, {useContext, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components'
import {nanoid} from 'nanoid/non-secure'

import Context from './Accordion.context'
import Icon from '../Icon'

const Container = styled.section<{isDisabled: boolean; isActived: boolean}>`
  ${({theme, isDisabled, isActived}) => css`
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${theme.colors.inputBg};
    border: 2px solid
      ${isActived ? theme.colors.titleActive : theme.colors.inputBg};
    transition: border-color ease 250ms;

    ${isDisabled &&
    css`
      opacity: 0.4;
    `}
  `}
`

const Header = styled.header``

const Content = styled.div`
  padding: 0 1.375rem;
  margin-top: 0.5rem;
  display: block;

  &[aria-hidden='true'] {
    display: none;
  }
`

const AccordionTrigger = styled.div`
  ${({theme}) => css`
    display: grid;
    column-gap: 1.25rem;
    grid-template-columns: minmax(0, 1fr) 20px;
    align-items: center;
    cursor: pointer;
    padding: 1.125rem 1.375rem;
    border-radius: 1rem;

    &:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.5);
    }

    h3 {
      font-size: 1rem;
      margin: 0;
      color: ${theme.colors.titleActive};
      font-weight: ${theme.font.weights.semiBold};
      letter-spacing: 0.75px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  `}
`

const IconWrap = styled.div<{isOpen: boolean}>`
  ${({theme, isOpen}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: color ease 250ms;
    color: ${isOpen ? theme.colors.titleActive : theme.colors.label};
  `}
`

type Props = {
  title: string
  isDisabled?: boolean
  children: React.ReactNode
  isOpenByDefault?: boolean
}

const Item = ({
  title,
  isDisabled,
  isOpenByDefault,
  children,
}: Props): React.ReactElement => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const {current: id} = useRef<string>(`_${nanoid()}`)
  const {isMulti, listOpen, setListOpen} = useContext(Context)
  const isOpen = listOpen.includes(
    wrapRef.current?.getAttribute('data-id') || '',
  )

  useEffect(() => {
    wrapRef.current?.setAttribute('data-id', id)
  }, [id])

  useEffect(() => {
    if (isOpenByDefault) {
      setListOpen((prev) => [...prev, id])
    }
  }, [setListOpen, isOpenByDefault, id])

  const handleClick = () => {
    const dataId = wrapRef.current?.getAttribute('data-id') as string
    const hasInList = listOpen.includes(dataId)

    if (isMulti) {
      // toggle multi list open
      setListOpen(
        hasInList
          ? listOpen.filter((el) => el !== dataId)
          : [...listOpen, dataId],
      )
      return
    }
    setListOpen(hasInList ? [] : [dataId])
  }

  return (
    <Container ref={wrapRef} isActived={isOpen} isDisabled={!!isDisabled}>
      <Header>
        <AccordionTrigger
          id={id}
          role="tab"
          tabIndex={0}
          onClick={handleClick}
          aria-selected={isOpen}
          onKeyDown={handleClick}
        >
          <h3>{title}</h3>
          <IconWrap isOpen={isOpen}>
            <Icon name={isOpen ? 'minus' : 'plus'} />
          </IconWrap>
        </AccordionTrigger>
      </Header>
      <Content
        ref={contentRef}
        role="tabpanel"
        aria-hidden={!isOpen}
        aria-labelledby={id}
      >
        {children}
      </Content>
    </Container>
  )
}

export default Item
