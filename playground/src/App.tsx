import { useState } from "react";
import { Activate } from "./Activate";
import { Chat } from "./Chat";

export function App() {
  const [activated, setActivated] = useState<boolean>(false);

  return (
    <>
      {activated ? (
        <Chat />
      ) : (
        <Activate onActivate={() => setActivated(true)} />
      )}
    </>
  );
}
