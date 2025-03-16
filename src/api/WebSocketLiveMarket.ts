import { ITickerInfoResponse } from "../types/SymbolType";

export function connectToWebSocket(
   symbol: string,
   onData: (data: ITickerInfoResponse) => void,
   onError: (error: string) => void
): WebSocket | null {
   const url = import.meta.env.VITE_WS_URL + `/ws/live/${symbol}`;
   const socket = new WebSocket(url);

   socket.onopen = () => {
      const message = JSON.stringify({ token: import.meta.env.VITE_WEBSOCKET_PASSWORD });
      sendWebSocketMessage(socket, message);
   };
   
   socket.onmessage = (event) => {
      try {
         const response: ITickerInfoResponse = JSON.parse(event.data);
         onData(response);
      } catch (error) {
         console.error("Error:", error);
         onError(`Symbol "${symbol}" not found.`);
      }
   };

   socket.onerror = (error) => {
      console.error("Error WebSocket:", error);
      onError(`Symbol "${symbol}" not found.`);
   };

   socket.onclose = () => {
      onError(`Symbol "${symbol}" not found.`);
   };

   return socket;
}

export function closeWebSocket(socket: WebSocket | null) {
   if (socket) {
      socket.close();
   }
}

export function sendWebSocketMessage(socket: WebSocket, message: string) {
   if (socket.readyState === WebSocket.OPEN) {
      socket.send(message);
   }
}
