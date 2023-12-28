import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import CreatePages from "./CreatePages";

function Todo() {
    const Home = () => <div>Home</div>;
    const [action,setAction] = useState([]);

    const addAction = (newAction) => {
        setAction([...actions,newAction]);
    };

    const deleteAction = (id) => {
        setActions(actions.filter)
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">List</Link>
                        </li>
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<ListPage actions={actions} deleteAction={deleteAction} />}>메인</Route>
                    <Route path='/create' element={CreatePages}>생성</Route>
                </Routes>
            </div>
        </Router>
    )
}
export default Todo;