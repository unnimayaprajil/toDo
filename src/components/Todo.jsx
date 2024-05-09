import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [editId, setEditId] = useState()
    const [editStatus, setEditStatus] = useState(false)

    const submitHandler = () => {
        if (editStatus) {
          setData(data.map((item)=>{
            if(item.id === editId){
                return {...item,text:value}
            }
            return item
          }))
          setEditStatus(false)
          setEditId();
          setValue('')
        } else {
            const id = uuidv4();
            setData([...data, {
                id: id,
                text: value
            }])
            setValue('');
        }
    }
    const deleteHandler = (id) => {

        setData(data.filter((item) => item.id != id))

    }
    const editHandler = (id) => {
        setEditStatus(true);
        setEditId(id)
        const editItem = data.find((item) => item.id == id)
        console.log("editItem", editItem.text)
        setValue(editItem.text)
    }
    return (
        <>
            <h5>TODO</h5>
            <input type="text" placeholder="type here" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={submitHandler}>{editStatus?"Edit":'Add'}</button>

            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        const { id, text } = item
                        return (
                            <tr key={index}>
                                <td>{text}</td>
                                <td><button onClick={() => editHandler(id)}>Edit</button></td>
                                <td><button onClick={() => deleteHandler(id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Todo