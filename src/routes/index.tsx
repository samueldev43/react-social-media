
import {Switch, Route} from 'react-router-dom'

import {UserList} from '../pages/User/index'
import {Chat} from '../pages/ChatPage/index'

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={UserList}/>
            <Route path="/chat/:chat+" component={Chat}/>
        </Switch>
    )
}

export default Routes