import { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.scss";
import ColorBox from "./components/Color-box/index.jsx";
import PostList from "./components/postList";
import TodoForm from "./components/todoFrom";
import TodoList from "./components/todoList/index.jsx";
import Pagination from "./components/pagination";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock/clock";
import BetterClock from "./components/betterClock/BetterClock";
import MagicBox from "./components/macgicBox";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Học react hook là trò trẻ con 1" },
    { id: 2, title: "Học react hook là trò trẻ con 2" },
    { id: 3, title: "Học react hook là trò trẻ con 3" },
    { id: 4, title: "Học react hook là trò trẻ con 4" },
    { id: 5, title: "Học react hook là trò trẻ con 5" },
    { id: 6, title: "Học react hook là trò trẻ con 6" },
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const queryString1 = queryString.stringify(filter);
        const postListURL = `http://js-post-api.herokuapp.com/api/posts?${queryString1}`;
        const response = await fetch(postListURL);
        const postListJSON = await response.json();
        const { data, pagination } = postListJSON;
        setPagination(pagination);
        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch from URL: ", error.message);
      }
    }
    fetchPostList();
  }, [filter]);

  function handlePageChange(newPage) {
    const newFilter = {
      ...filter,
      _page: newPage,
    };
    setFilter(newFilter);
  }

  function handleOnTodoClick(todo) {
    const index = todoList.findIndex((e) => e.id === todo.id);
    if (index < 0) {
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(newValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...newValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFilterChange(formValues) {
    console.log("New filters: ", formValues);
    setFilter({
      ...filter,
      _page: 1,
      title_like: formValues.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1>Học React HOOK!</h1>
      {showClock && <Clock />}
      <MagicBox />
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <PostFilterForm onSubmit={handleFilterChange} />
      <BetterClock />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <PostList posts={postList} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} handleTodoList={handleOnTodoClick} />
      <ColorBox />
    </div>
  );
}

export default App;
