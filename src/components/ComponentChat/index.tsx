import {useEffect, useState } from 'react'


import {BiTrash} from 'react-icons/bi'

import { useRouteMatch } from 'react-router'
import api from '../../services/api'
import profileImg from '../../assets/user.png'


import { ContainerMessages } from './style'

interface ChatParams {
    chat: string
}

interface Chatt {
    name: string,
    messages: string,
    userId: number,
    id: number
}


export const ChatM: React.FC = () => {
    const [chat, setChat] = useState<Chatt[]>([])
    const { params } = useRouteMatch<ChatParams>()


    useEffect(() => {
        api.get<Chatt[]>('/usersChat').then(response => {
            const chatM = response.data.filter(user => user.userId === Number(params.chat))
            setChat(chatM)
        })
    }, [params.chat, chat])


    return(
      <>
        {chat.map( each => (
        <ContainerMessages key={each.id}>
            <img src={profileImg} alt="Profile" />
            <div>
                <strong>{each.name}</strong>
                <p>{each.messages}</p>
            </div>

            <button onClick={() => api.delete(`usersChat/${each.id}`)}>
                <BiTrash size={20}/>
            </button>
        </ContainerMessages>
        ))}
        </>
    )
}