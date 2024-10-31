import {Meta} from '@storybook/react'
import {StyledButton} from '../components/StyledButton'

export default {
    title: 'StyledButton (1)',
    component: StyledButton,
} as Meta<typeof StyledButton>

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant='primary'>
            Primary
        </StyledButton>
    )
}

export const Sucess = (props) => {
    return (
        <StyledButton {...props} variant='success'>
            Success
        </StyledButton>
    )
}

export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant='transparent'>
            Transparent
        </StyledButton>
    )
}