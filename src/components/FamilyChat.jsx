import React, { useEffect } from 'react';
import Talk from 'talkjs';

const Chat = ({ userId, familyId }) => {
  useEffect(() => {
    Talk.ready.then(() => {
      const me = new Talk.User({
        id: userId,
        name: "John Doe", // Replace with dynamic user name
        email: "john.doe@example.com", // Replace with dynamic email
        photoUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with dynamic profile pic
        welcomeMessage: "Hello!",
      });

      window.talkSession = new Talk.Session({
        appId: "your_talkjs_app_id",
        me: me,
      });

      const conversation = window.talkSession.getOrCreateConversation(familyId);
      conversation.setParticipant(me);

      const chatbox = window.talkSession.createChatbox(conversation);
      chatbox.mount(document.getElementById("talkjs-container"));
    });
  }, [userId, familyId]);

  return <div id="talkjs-container" style={{ height: "500px" }}></div>;
};

export default Chat;
