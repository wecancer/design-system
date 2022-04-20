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
  error?: boolean
  onCancel?(): void
  onConfirm?(): void
  cancelLabel?: string
  confirmLabel?: string
  isConfirmLoading?: boolean
}

const ModalConfirm = ({
  error,
  children,
  onCancel,
  onConfirm,
  cancelLabel,
  confirmLabel,
  isConfirmLoading,
  ...props
}: Props): React.ReactElement => {
  const t = useTranslation()
  return (
    <Modal {...props}>
      {children}
      <Footer>
        <Button onClick={onCancel}>{cancelLabel || t('Cancel')}</Button>
        <Button
          error={error}
          primary={!error}
          onClick={onConfirm}
          isLoading={isConfirmLoading}
        >
          {confirmLabel || t('Confirm')}
        </Button>
      </Footer>
    </Modal>
  )
}

export default ModalConfirm
