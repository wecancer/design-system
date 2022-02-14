import React from 'react'
import styled from 'styled-components'

import Button from '../button'
import Modal, { Props as ModalProps } from '.'

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`

export type Props = ModalProps & {
  cancelLabel: string
  confirmLabel: string
  onCancel?(): void
  onConfirm?(): void
}

const ModalConfirm = ({
  children,
  onCancel,
  onConfirm,
  cancelLabel,
  confirmLabel,
  ...props
}: Props): React.ReactElement => (
  <Modal {...props}>
    {children}
    <Footer>
      <Button secondary onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button primary onClick={onConfirm}>
        {confirmLabel}
      </Button>
    </Footer>
  </Modal>
)

export default ModalConfirm
