import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./chatList.css";

const ChatList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`/api/userchats`, {
        credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .catch((err) => {
          console.error('Fetch error:', err);
          throw err;
        }),
  });

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore ASTRABOT</Link>
      <Link to="/">Contact</Link>
     
      <span className="title">RECENT CHATS</span>

      <div className="list">
        {isLoading
          ? "Loading..."
          : isError
          ? `Something went wrong: ${error.message}`
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr/>

      <div className="upgrade">
        <img src="/logo1.png" alt="ASTRABOT Logo" />
        <div className="texts">
          <span>Upgrade to ASTRABOT</span>
          <span>Access to All features</span>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
