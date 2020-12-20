import React from 'react'
import {Button, Card, Divider, Grid, Input, Menu} from 'semantic-ui-react'
import {randomId} from '../utils/utils'
import {Link, useLocation, useHistory} from 'react-router-dom'
import queryString from 'query-string'


function TodoPage(props) {

    let location = useLocation()

    const [input, setInput] = React.useState('')

    const [todoList, setList] = React.useState([])


    React.useEffect(() => {
        let _storage = localStorage.getItem('todoList')
        if (_storage !== null) {
            _storage = JSON.parse(_storage)
        }
        setList(_storage)
    }, [])


    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setList(prev => {
                let todo = {
                    id: randomId(),
                    content: e.target.value,
                    done: false,
                }
                const v = [todo, ...prev]
                localStorage.setItem('todoList', JSON.stringify(v))
                return v
            })
            setInput('')
        }
    }

    const handleDeletTodo = (id) => {
        setList((prev) => {
            let newList = prev.filter(todo => todo.id !== id)
            localStorage.setItem('todoList', JSON.stringify(newList))
            return newList
        })
    }

    const handleToggleStatus = (id) => {
        setList((prev) => {
            let newTodo = prev.map((todo) => {
                if (todo.id === id) {
                    return {...todo, done: !todo.done}
                } else {
                    return todo
                }
            })
            localStorage.setItem('todoList', JSON.stringify(newTodo))
            return newTodo

        })
    }

    const handleUpdateKeyPress = (e, id) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            let value = e.target.innerText
            setList(prev => {
                let newTodo = prev.map(t => {
                    if (t.id === id){
                        return {...t, content: value}
                    } else {
                        return t
                }})
                localStorage.setItem('todoList', JSON.stringify(newTodo))
                return newTodo
            })
            e.target.blur()
        }
    }


    let listMapper = {
        'all': () => [...list],
        'complete': () => [...list].filter(t => t.done === true),
        'incomplete': () => [...list].filter(t => t.done === false)
    }

    let list = [...todoList]
    let filter = queryString.parse(location.search)

    let history = useHistory()

    if ('filter' in filter) {
        let key = filter['filter']
        if (key in listMapper) {
            list = listMapper[key]()
        } else {
            history.push('todo?filter=all')
        }
    } else {
        history.push('todo?filter=all')
    }


    return (
        <Grid centered style={{marginTop: 50}}>
            <Grid.Column>
                <Input fluid={true} icon='search' value={input} onKeyPress={handleKeyPress} onChange={handleChange}/>
                <Menu borderless secondary>
                    <Menu.Item as={Link} to={'/todo?filter=all'} active={filter['filter'] === 'all'}>
                        All
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/todo?filter=complete'} active={filter['filter'] === 'complete'}>
                        complete
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/todo?filter=incomplete'} active={filter['filter'] === 'incomplete'}>
                        incomplete
                    </Menu.Item>
                </Menu>
                <Divider/>
                <Card.Group>
                    {
                        list.map((todo) => {
                            const {content, id, done} = todo
                            return (
                                <Card fluid={true} key={id}>
                                    <Card.Content>
                                        <Card.Description style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <span contentEditable={true} onKeyPress={(e) =>handleUpdateKeyPress(e, id)} suppressContentEditableWarning>
                                                {content}
                                            </span>
                                            <div>
                                                <Button basic size={'tiny'} color='grey'
                                                        onClick={() => handleDeletTodo(id)}>
                                                    delete
                                                </Button>
                                                <Button basic size={'tiny'} color={done ? 'grey' : 'green'}
                                                        onClick={() => handleToggleStatus(id)}>
                                                    {done ? 'undo' : 'done'}
                                                </Button>
                                            </div>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>)
                        })
                    }
                </Card.Group>
            </Grid.Column>
        </Grid>
    )
}

export default TodoPage