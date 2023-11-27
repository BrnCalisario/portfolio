import { PropsWithChildren } from "react"

function RedSpan(props: PropsWithChildren) {
    return (
        <span className="text-red">
            {props.children}
        </span>
    )
}

export default RedSpan