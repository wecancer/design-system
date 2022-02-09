import Loading from '.'
import {render} from '../../testing'

describe('<Loading />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Loading />
        <Loading size="2.5rem" />
        <Loading title="custom title" />
        <Loading type="dots" />
        <Loading type="solid" />
        <Loading color="primary" />
        <Loading color="white" />
        <Loading color="error" />
        <Loading color="success" />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
