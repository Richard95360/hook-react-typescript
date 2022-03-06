import React from 'react'


interface ParentCompProps {
    UserChild1?: React.ReactNode;
}

export const UserChild1: React.FC = () =>  <h2>This component</h2>

export const ParentCompt: React.FC<ParentCompProps> = (props) => {
    const {UserChild1} = props;
    return <div>{UserChild1}</div>
}

export default UserChild1