import React, { FunctionComponent } from 'react'

export function UserChild  (props: { parentData: string }){
    return (
        <div>
            the data is {props.parentData}
        </div>
    )
}