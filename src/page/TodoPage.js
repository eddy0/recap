import React from 'react'
import {Button, Card, Divider, Grid, Input} from 'semantic-ui-react'
import {log} from '../utils/utils'


function TodoPage(props) {
    const [input, setInput] = React.useState('')
    const [todoList, setList] = React.useState([])

    React.useEffect(() => {
        let todoList = localStorage.getItem('todoList')
        if (todoList !== null) {
            todoList = JSON.parse(todoList)
            setList(todoList)
        }
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setList(prev => {
                const v = [e.target.value, ...prev]
                localStorage.setItem('todoList', JSON.stringify(v))
                return v
            })
            setInput('')
        }
    }

    return (
        <Grid centered style={{marginTop: 50}}>
            <Grid.Column>
                <Input fluid={true} icon='search' value={input} onKeyPress={handleKeyPress} onChange={handleChange}/>
                <Divider/>
                <Card.Group>
                    {
                        todoList.map((todo, index) => {
                            return (
                                <Card fluid={true} key={index}>
                                    <Card.Content>
                                        <Card.Description style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <span contentEditable={true} suppressContentEditableWarning>
                                                {todo}
                                            </span>
                                            <Button basic size={'tiny'} color='green'>
                                                done
                                            </Button>
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