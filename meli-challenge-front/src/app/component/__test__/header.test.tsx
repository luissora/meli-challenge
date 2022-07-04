import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { renderRedux } from '../../../@redux/UtilsTest'

/** components */
import { Header } from '../Header'

describe('Comp. Header', () => {
    it('Render Header', () => {
        const component = renderRedux(
            <Header />
        )
        userEvent.click(component.getByTestId('btn-home'))
        userEvent.click(component.getByTestId('btn-search'))

        userEvent.type(component.getByRole('textbox'), 'moto')
        userEvent.type(component.getByRole('textbox'), '{enter}')

        expect(component.getByRole('textbox')).toHaveValue('moto')
        expect(component.container).toBeInTheDocument()
    })
})