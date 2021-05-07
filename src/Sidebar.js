import React, { useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import { useEffect } from "react";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  const unsubscribe = useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          //trae todos los documentos de la collection 'rooms'
          id: doc.id, //se refiere al id de firebase
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
/*materialui.com instalar por la erminal
npm i @material-ui/core 
en la pg buscar icons
npm i @material-ui/icons
>> en el buscador de iconos de la pg coloca el nombre del icono
*/
