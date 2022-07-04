import '@testing-library/jest-dom'
import { renderRedux } from '../../../@redux/UtilsTest'

/** component */
import { ErrorFallbackComponent } from '../ErrorFallbackComponent'

describe('Comp. ErrorFallbackComponent', () => {
    it('Render ErrorFallbackComponent', () => {
        const component = renderRedux(
            <ErrorFallbackComponent 
                resetErrorBoundary={() => console.log()} 
                error={{ name: 'Se produjo un error', message: 'error', stack: 'error' }} 
            />
        )
        expect(component.getByText('Se produjo un error')).toBeInTheDocument()
        expect(component.container).toBeInTheDocument()
    })

    it('Render ErrorFallbackComponent ', () => {
        const component = renderRedux(
            <ErrorFallbackComponent 
                resetErrorBoundary={() => console.log()} 
                error={{ name: 'Se produjo un error', message: 'error' }} 
            />
        )
        expect(component.getByText('Se produjo un error')).toBeInTheDocument()
        expect(component.container).toBeInTheDocument()
    })
})