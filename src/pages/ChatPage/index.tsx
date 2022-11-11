import React, { useState, useCallback, FormEvent } from "react";
import { useRouteMatch } from "react-router-dom";

import { ContainerChat, ContainerVal } from "./style";

import api from "../../services/api";

import { Profile } from "../../components/Profile";
import { ChatM } from "../../components/ComponentChat";

interface ChatParams {
  chat: string;
}

export const Chat: React.FC = () => {
  const [val, setVal] = useState("");

  const { params } = useRouteMatch<ChatParams>();

  const add = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (val) {
        api.post(`usersChat`, {
          name: "Person",
          messages: val,
          userId: Number(params.chat),
        });
      }
      setVal("");
    },
    [val, params.chat]
  );

  return (
    <>
      <Profile />

      <ContainerChat>
        <ChatM />

        {val !== "" && <p className="typing">Typing...</p>}
      </ContainerChat>

      <ContainerVal>
        <form onSubmit={add}>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            type="text"
            placeholder="Type your message..."
          />
        </form>
      </ContainerVal>
    </>
  );
};
