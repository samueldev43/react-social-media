
import { Container} from './style'

import UserImg from '../../assets/user.png'


import {Data} from '../../hooks/dataHook'

interface UserProps {
    data: Data[]
}

export const User: React.FC<UserProps> = ({data}) => {
    return(
        <>
            <Container>
            {data.map(user => (
                <a href={`chat/${user.id}`} key={user.username}>
                    <img src={UserImg} alt="User" />
                    <strong>{user.name}</strong>
                    <p>{user.username}</p>
                    <p>{user.address.city}</p>
                </a>
            ))}
            </Container>
        </>
    )
}