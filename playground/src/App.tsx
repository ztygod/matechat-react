import { useState } from "react";
import { Chat } from "./Chat";
import { Activate } from "./Activate";

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
