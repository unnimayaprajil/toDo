import { useState } from "react"
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { ToastContainer, toast } from "react-toastify";
const Todo = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [editId, setEditId] = useState()
    const [editStatus, setEditStatus] = useState(false)

    const submitHandler = () => {
        if (editStatus) {
            setData(data.map((item) => {
                if (item.id === editId) {
                    return { ...item, text: value }
                }
                return item
            }))
            setEditStatus(false)
            setEditId();
            setValue('')
        } else {
            if(!value){
                console.log('error')
                toast("Value required")
            }else{
                const id = uuidv4();
                setData([...data, {
                    id: id,
                    text: value
                }])
                setValue('');
            }
            
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
            <Container fluid className="todo-container shadow rounded my-4 p-5">
                <h5>TODO</h5>
                <TodoForm value={value} setValue={setValue} editStatus={editStatus} submitHandler={submitHandler}/>
                <TodoList editHandler={editHandler} deleteHandler={deleteHandler} data={data}/>
            </Container>
            <ToastContainer/>
        </>
    )
}
export default Todo