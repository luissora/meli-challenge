import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import path from 'path'

const server = () => swaggerUI.serve


const setup = () => {
    return swaggerUI.setup(swaggerJsDoc({
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'MeLi Challenge',
                version: '1.0.0'
            },
            servers: [
                {
                    url: 'http://localhost:3000/api/'
                }
            ]
        },
        apis: [ 
            `${path.join(__dirname, '../../../routes/*.ts')}`,
            `${path.join(__dirname, '../../../routes/*.js')}`
        ]
    }))
}

export default {
    server,
    setup
}

