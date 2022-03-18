import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Icon from '../icon'

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 17.5rem;
`

type TNumber = {
  currentPage?: boolean
}

const Button = styled.button<TNumber>`
  ${({ theme, currentPage = false }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0625rem solid
      ${currentPage ? theme.colors.primary : theme.colors.line};
    font-weight: ${theme.font.weights.regular};
    font-size: 1rem;
    color: ${currentPage ? theme.colors.white : theme.colors.primary};
    background-color: ${currentPage
      ? theme.colors.primary
      : theme.colors.white};
    cursor: pointer;
    margin: 0 0.25rem;
    width: 25px;
    height: 25px;
    border-radius: 4px;
  `}
`

type PaginateParams = {
  page: number
}

export type Props = {
  currentPage: number
  amount: number
  onPaginate(params: PaginateParams): void
}

type State = {
  sliced: number[]
  countDown: number
  currentPage: number
}

const Pagination = ({ amount, onPaginate, currentPage }: Props) => {
  const bigger = amount > 5
  const pages = Array.from(Array(amount).keys())

  const [state, setState] = useState<State>(() => {
    if (bigger) {
      return {
        sliced: pages.slice(0, 5),
        countDown: pages.length,
        currentPage,
      }
    }
    return {
      sliced: pages,
      countDown: 0,
      currentPage,
    }
  })

  useEffect(() => {
    setState((prevState) => ({ ...prevState, currentPage }))
    const doNotSlice =
      (state.sliced.includes(Number(currentPage)) &&
        state.countDown < pages.length) ||
      currentPage === pages.length ||
      currentPage > pages.length
    if (doNotSlice) return
    if (currentPage >= 6) {
      setState((prevState) => ({
        ...prevState,
        sliced: pages.slice(currentPage - 5, currentPage),
      }))
    }
    setState((prevState) => {
      if (prevState.currentPage > currentPage && currentPage > 6) {
        return {
          currentPage,
          sliced: pages.slice(currentPage - 5, currentPage),
          countDown: prevState.countDown - 1,
        }
      }
      if (currentPage < 6) {
        return {
          currentPage,
          sliced: pages.slice(0, 5),
          countDown: pages.length,
        }
      }
      return prevState
    })
  }, [currentPage])

  if (bigger) {
    return (
      <Container>
        <Button
          style={{ transform: 'rotate(180deg)' }}
          onClick={() => onPaginate({ page: currentPage - 1 })}
          name="icon"
        >
          <Icon name="arrowLeft" size={13} />
        </Button>
        {(state.sliced ?? []).map((page) => (
          <Button
            currentPage={currentPage === page + 1}
            onClick={() => onPaginate({ page: page + 1 })}
            type="button"
            key={page}
          >
            {page + 1}
          </Button>
        ))}
        <Button>...</Button>
        <Button
          onClick={() => onPaginate({ page: pages.length })}
          currentPage={currentPage === pages.length}
        >
          {pages[pages.length - 1] + 1}
        </Button>
        <Button
          name="icon"
          onClick={() => onPaginate({ page: currentPage + 1 })}
        >
          <Icon name="arrowLeft" size={13} />
        </Button>
      </Container>
    )
  }
  return (
    <Container>
      {(pages ?? []).map((page) => (
        <Button
          currentPage={currentPage === page + 1}
          onClick={() => onPaginate({ page: page + 1 })}
          type="button"
          key={page}
        >
          {page + 1}
        </Button>
      ))}
    </Container>
  )
}

export default Pagination
