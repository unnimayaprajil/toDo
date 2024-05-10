import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ToastContainer } from 'react-bootstrap';
const TodoForm =({value,setValue,editStatus,submitHandler})=>{
    return(
        <>
        <InputGroup className="mb-3 todo-input "  >
        <Form.Control
            type="text"
            placeholder="Todo "
            value={value} 
            onChange={(e) => setValue(e.target.value)}
          
        />
        <Button variant="secondary" className="px-5" onClick={submitHandler} >{editStatus ? "Update" : 'Add'}
        </Button>
    </InputGroup>
    <ToastContainer/>
    </>
    )
}
export default TodoForm