
/**
 * title: Default usage
 * desc: WebSocket hooks used.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: webSocket hooks 使用
 */

import React, { useRef, useMemo } from 'react';
import useWebSocket  from '../../components/useWebSocket/index';
import useTitle from '../../components/useTitle';

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}
export default () => {
  const messageHistory = useRef([]);
  useTitle('webSocket');
  const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(
    'ws://localhost',
  );

  messageHistory.current = useMemo(() => messageHistory.current.concat(latestMessage), [
    latestMessage,
  ]);

  return (
    <div>
      {/* send message */}
      <button
        onClick={() => sendMessage && sendMessage(`${Date.now()}`)}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ✉️ send
      </button>
      {/* disconnect */}
      <button
        onClick={() => disconnect && disconnect()}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ❌ disconnect
      </button>
      {/* connect */}
      <button onClick={() => connect && connect()} disabled={readyState === ReadyState.Open}>
        📞 connect
      </button>
      <div style={{ marginTop: 8 }}>readyState: {readyState}</div>
      <div style={{ marginTop: 8 }}>
        <p>received message: </p>
        {messageHistory.current.map((message, index) => (
          <p key={index}>{message?.data}</p>
        ))}
      </div>
    </div>
  );
};
