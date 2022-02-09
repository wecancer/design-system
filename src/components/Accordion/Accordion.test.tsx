import React from 'react'

import Accordion from '.'
import AccordionItem from './Item'
import Context from './Accordion.context'
import {render, fireEvent} from '../../testing'

describe('<Accordion />', () => {
  it('should have valid properties from context api', () => {
    const {queryByText} = render(
      <Context.Provider
        value={{isMulti: false, listOpen: ['1', '2'], setListOpen: () => null}}
      >
        <>anything</>
        <Context.Consumer>
          {({listOpen}) => <p data-testid="list-open">{listOpen.join(',')}</p>}
        </Context.Consumer>
      </Context.Provider>,
    )

    expect(queryByText('1,2')).toBeDefined()
  })

  it('should have muiltiple tabs open', () => {
    const {container, queryAllByRole} = render(
      <Accordion>
        <AccordionItem title="test 1">test 1</AccordionItem>
        <AccordionItem title="test 2">test 2</AccordionItem>
        <AccordionItem title="test 3">test 3</AccordionItem>
      </Accordion>,
    )

    expect(container.querySelectorAll('[role="tab"]')).toHaveLength(3)

    fireEvent.click(queryAllByRole('tab')[0] as HTMLElement)
    expect(container.querySelectorAll('[aria-hidden="false"]')).toHaveLength(1)
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(2)

    fireEvent.click(queryAllByRole('tab')[2] as HTMLElement)
    expect(container.querySelectorAll('[aria-hidden="false"]')).toHaveLength(2)
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1)
  })

  it('should have just one tab open', () => {
    const {container, queryAllByRole} = render(
      <Accordion isMulti={false}>
        <AccordionItem title="test 1">test 1</AccordionItem>
        <AccordionItem title="test 2">test 2</AccordionItem>
        <AccordionItem title="test 3">test 3</AccordionItem>
      </Accordion>,
    )

    expect(container.querySelectorAll('[role="tab"]')).toHaveLength(3)

    fireEvent.click(queryAllByRole('tab')[0] as HTMLElement)
    expect(container.querySelectorAll('[aria-hidden="false"]')).toHaveLength(1)
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(2)

    fireEvent.click(queryAllByRole('tab')[2] as HTMLElement)
    expect(container.querySelectorAll('[aria-hidden="false"]')).toHaveLength(1)
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(2)
  })

  it('should check if the aria-hidden is visible or not', () => {
    const {container, queryAllByRole} = render(
      <Accordion isMulti={false}>
        <AccordionItem title="test 1">test 1</AccordionItem>
        <AccordionItem title="test 2">test 2</AccordionItem>
        <AccordionItem title="test 3">test 3</AccordionItem>
      </Accordion>,
    )

    fireEvent.click(queryAllByRole('tab')[0] as HTMLElement)

    container
      .querySelectorAll('[aria-hidden="false"]')
      .forEach((el) => expect(el).toBeVisible())
    container
      .querySelectorAll('[aria-hidden="true"]')
      .forEach((el) => expect(el).not.toBeVisible())
  })
})
