import React from 'react'
import styled, { css } from 'styled-components'
import Icon from '../icon'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Separator = styled.span`
  ${({ theme }) => css`
    margin: 0 0.25rem;
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.label};
  `}
`

const Button = styled.button<{
  isCurrent: boolean
}>`
  ${({ theme, isCurrent }) => css`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${isCurrent ? theme.colors.primary : theme.colors.line};
    font-weight: ${theme.font.weights.regular};
    font-size: 1rem;
    color: ${isCurrent ? theme.colors.white : theme.colors.primary};
    background-color: ${isCurrent ? theme.colors.primary : theme.colors.white};
    cursor: pointer;
    margin: 0 0.25rem;
    border-radius: 0.25rem;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  `}
`

type PaginateParams = {
  page: number
}

export type Props = {
  amount: number
  currentPage: number
  isDisabled?: boolean
  onPaginate(params: PaginateParams): void
}

const Pagination = ({ amount, onPaginate, currentPage, isDisabled }: Props) => {
  const numberOfButtons = 5
  const hasExpand = amount > numberOfButtons
  const showFrom = (() => {
    if (!hasExpand) return 1

    // don't move if the current page is on the end of the list
    if (currentPage + 2 > amount) return amount - numberOfButtons + 1

    // don't move if the current page is on the start of the list
    if (currentPage > 2) return currentPage - 2
    return 1
  })()

  const itemsDisplayed = new Array(hasExpand ? numberOfButtons : amount)
    .fill(null)
    .map((el, index) => index + showFrom)

  const isPrevButtonDisabled = currentPage === 1 || isDisabled
  const isNextButtonDisabled = currentPage === amount || isDisabled

  const handlePaginate = (page: number) => onPaginate({ page })
  const hasLastPageButton = !itemsDisplayed.includes(amount)

  return (
    <Container role="navigation">
      {hasExpand && (
        <Button
          type="button"
          isCurrent={false}
          disabled={isPrevButtonDisabled}
          onClick={() => handlePaginate(currentPage - 1)}
        >
          <Icon name="arrowLeft" size={12} />
        </Button>
      )}
      {itemsDisplayed.map((page) => (
        <Button
          key={page}
          type="button"
          disabled={isDisabled}
          isCurrent={currentPage === page}
          aria-current={currentPage === page}
          onClick={() => handlePaginate(page)}
        >
          {page}
        </Button>
      ))}
      {hasLastPageButton && (
        <>
          <Separator>...</Separator>
          <Button
            type="button"
            disabled={isDisabled}
            isCurrent={false}
            onClick={() => handlePaginate(amount)}
          >
            {amount}
          </Button>
        </>
      )}
      {hasExpand && (
        <Button
          type="button"
          isCurrent={false}
          disabled={isNextButtonDisabled}
          onClick={() => handlePaginate(currentPage + 1)}
        >
          <Icon name="arrowRight" size={12} />
        </Button>
      )}
    </Container>
  )
}

export default Pagination
