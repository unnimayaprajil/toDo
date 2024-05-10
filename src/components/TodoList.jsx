import Table from 'react-bootstrap/Table';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const TodoList = ({editHandler,deleteHandler,data}) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Todo</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => {
                    const { id, text } = item
                    return (
                        <tr key={index}>
                            <td>{text}</td>
                            <td><MdModeEdit onClick={() => editHandler(id)} /></td>
                            <td><MdDelete onClick={() => deleteHandler(id)} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
export default TodoList