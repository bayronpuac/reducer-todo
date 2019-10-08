import React, {useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer';


export const Todo = () => {
    const [{ editing, title }, dispatch] = useReducer(reducer, initialState);

    return(
    <form>
        <label>
            Todo:
            <input type="text" name="name" />
            </label>
        <input type="submit" value="Submit" />
        {!editing ? (
        <h1>
          {title}{" "}
          <i
            className="far fa-edit"
            onClick={() => dispatch({ type: "TOGGLE_EDIT" })}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: "SET_TITLE", payload: newTitleText })
            }
          >
            Update title
          </button>
        </div>
      )}
    </form>
    )
}

export default Todo;