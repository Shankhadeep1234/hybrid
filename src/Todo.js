import React from 'react'
import propTypes from 'prop-types'


const Todo = ({ todo }) => {
    return (
        <div>
            {todo}
        </div>
    )
}

Todo.propTypes = {
    todo: propTypes.object
}

export default Todo