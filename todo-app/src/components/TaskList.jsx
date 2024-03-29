import React from "react";
import CheckBox from "./CheckBox";

const TaskList = props => {

    const {list, setList} = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList)
    };

    const checkbox = list.map(item => (
        <CheckBox key={item.id} data={item} onChange=
        {onChangeStatus} />
    ));

    return (
        <div className="todo-list">
            {list.length ? checkbox : "no hay tareas"}
            {list.length ? (
                <p>
                    <button className="button pink" onClick=
                    {onClickRemoveItem}> Detele </button>
                </p>
            ) : null}
        </div>
    )
}

export default TaskList;