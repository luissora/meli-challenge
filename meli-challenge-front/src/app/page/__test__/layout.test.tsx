import React from 'react'
import '@testing-library/react'
import '@testing-library/jest-dom'
import { renderRedux } from '../../../@redux/UtilsTest'
import userEvent from '@testing-library/user-event'

/** pages */
import { Layout } from '../Layout'

describe('Page Layout', () => {
    it('Render Layout', () => {
        const component = renderRedux(
            <Layout />
        )
        userEvent.click(component.getByRole('button'))
        userEvent.type(component.getByRole('textbox'), 'moto')
        userEvent.click(component.getByRole('button'))

        expect(component.container).toBeInTheDocument()
        expect(component.getByRole('textbox').getAttribute('value')).toBe('moto')
    })
})