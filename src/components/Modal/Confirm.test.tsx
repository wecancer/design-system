import ModalConfirm from './Confirm'
import {render} from '../../testing'

describe('<ModalConfirm />', () => {
  beforeEach(() => {
    if (!document.getElementById('root')) {
      const root = document.createElement('div')
      root.setAttribute('id', 'root')
      document.body.appendChild(root)
    }
  })

  it('should render snapshot correctly', () => {
    const {container} = render(
      <ModalConfirm cancelLabel="Cancel" confirmLabel="Confirm">
        Something
      </ModalConfirm>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
