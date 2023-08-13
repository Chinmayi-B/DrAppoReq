
import { ChatHandler, chat_names } from './ChatHandler.js';

onload = function () {

    const chatlist = document.getElementById('chat-list');
    const add = document.getElementById('generate-step');
    const deleteMsg = document.getElementById('delete-step');
    const text = document.getElementById('temptext');

    const templates = document.getElementsByTagName('template')[0];
    const chat_item = templates.content.querySelector("li");

    const chatHandler = new ChatHandler(chat_item, chatlist);
    let chats = [];

    add.onclick = function () {
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            text.innerHTML = "New message from "+chat_names[idOfMsg] +"<br>"  +text.innerHTML;
    };

    deleteMsg.onclick = function () {
        if(chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
	    chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
            
        } else{
            	text.innerHTML = "Nothing to delete"+ "<br>" + text.innerHTML;
            }
    };
};