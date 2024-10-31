import { useState } from "react";
import { Meta } from "@storybook/react";
import { StyledButton } from '../components/StyledButton'
import {action} from '@storybook/addon-actions'

export default {
    title: 'StyledButton (3) - 동적으로 action 을 호출한다',
    component: StyledButton,
} as Meta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props) => {
    const [count, setCount] = useState(0)
    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count)
        setCount((c) => c + 1)
    }

    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
}