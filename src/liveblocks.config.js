import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.REACT_APP_LIVEBLOCKS_KEY_DEV,
});

export const {
  suspense: { RoomProvider, useRoom, useOthers, useSelf },
} = createRoomContext(client);
