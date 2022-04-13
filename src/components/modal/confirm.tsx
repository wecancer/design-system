import React from 'react'
import styled from 'styled-components'

import Button from '../button'
import Modal, { Props as ModalProps } from '.'
import useTranslation from '../../locale/use-translation'

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`

export type Props = ModalProps & {
  onCancel?(): void
  onConfirm?(): void
  cancelLabel?: string
  confirmLabel?: string
  error?: boolean
}

const ModalConfirm = ({
  error,
  children,
  onCancel,
  onConfirm,
  cancelLabel,
  confirmLabel,
  ...props
}: Props): React.ReactElement => {
  const t = useTranslation()
  return (
    <Modal {...props}>
      {children}
      <Footer>
        <Button onClick={onCancel}>{cancelLabel || t('Cancel')}</Button>
        <Button onClick={onConfirm} error={error} primary={!error}>
          {confirmLabel || t('Confirm')}
        </Button>
      </Footer>
    </Modal>
  )
}

export default ModalConfirm
