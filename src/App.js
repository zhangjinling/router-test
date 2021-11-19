import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Message1 from "./pages/messages/Message1";
import Message2 from "./pages/messages/Message2";
import Message3 from "./pages/messages/Message3";
import NotFond from "./pages/NotFond";
import Users from "./pages/Users";
import MessageDefault from "./pages/messages/MessageDefault";
import AntdDemo from "./pages/AntdDemo";

function App() {
  let myObj = { title: "1111", id: 12341234 };
  return (
    <div>
      <div className="nav">
        <span>导航：</span>
        <Link to="/">home</Link>***
        <Link to="/users">users</Link>***
        <Link to="/antddemo">antddemo</Link>***
        <Link to="/messages">messages</Link>***
        <Link to="/messages/message1/11/mytitle">message1-传params</Link>***
        <Link to="/messages/message2/333?a=1&b=2">
          message2-传search-params
        </Link>
        ***
        <Link to="/messages/message3" state={myObj}>
          message3-传state
        </Link>
        ***
        <Link to="/messages/message55555">message55555（not fond）</Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/antddemo" element={<AntdDemo />}></Route>
        <Route path="/messages" element={<Messages />}>
          <Route path="message1/:id/:title" element={<Message1 />}></Route>
          <Route path="message2/:hah" element={<Message2 />}></Route>
          <Route path="message3" element={<Message3 />}></Route>
          {/* 默认路由 */}
          <Route index element={<MessageDefault />}></Route>
          {/* 找不到的路由 */}
          <Route path="*" element={<NotFond />}></Route>
        </Route>
        <Route path="*" element={<NotFond />}></Route>
      </Routes>
    </div>
  );
}

export default App;
