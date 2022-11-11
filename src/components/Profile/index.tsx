import { useMemo } from "react"
import { useRouteMatch } from "react-router-dom"
import { useProvider } from "../../hooks/dataHook"
import { Container } from "./style"

import profileImg from '../../assets/user.png'


interface ChatParams {
    chat: string
}

export const Profile: React.FC = () => {

    const {data} = useProvider()

    const { params } = useRouteMatch<ChatParams>()


    const user = useMemo(() => {
        return data.filter(user => user.id === Number(params.chat))
    }, [data, params.chat])

    return(
    <>
       <Container>
            <img src={profileImg} alt="Profile" />
            {user.map(u => (
            <div key={u.id}>
                <strong>{u.username}</strong>
                <p>{u.address.city}</p>
            </div>
            ))}
        </Container>
    </>
    )
}