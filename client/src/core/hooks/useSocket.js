import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from '../context/AuthContext';

let socket = null;

const initializeSocket = (user) => {
  if (!socket) {
    socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3301', {
      withCredentials: true,
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      timeout: 20000,
    });

    socket.on('connect', () => {
      console.log('🔌 Socket connected:', socket.id);
      if (user) {
        socket.emit('userOnline', {
          userId: user.id,
          username: user.username,
          email: user.email
        });
      }
    });

    socket.on('disconnect', (reason) => {
      console.log('🔌 Socket disconnected:', reason);
    });

    socket.on('connect_error', (error) => {
      console.error('🔌 Socket connection error:', error);
    });
  }
  return socket;
};

export const useSocketOnlineUsers = () => {
  const [online, setOnline] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const socketInstance = initializeSocket(user);

    // Listen for online users count
    const handleOnlineUsers = (count) => {
      console.log('👥 Online users updated:', count);
      setOnline(count);
    };

    // Listen for user joined/left events
    const handleUserJoined = (data) => {
      console.log('👋 User joined:', data);
    };

    const handleUserLeft = (data) => {
      console.log('👋 User left:', data);
    };

    socketInstance.on('onlineUsers', handleOnlineUsers);
    socketInstance.on('userJoined', handleUserJoined);
    socketInstance.on('userLeft', handleUserLeft);

    // Request current online count
    socketInstance.emit('getOnlineCount');

    // Emit user online status when user is available
    if (user && socketInstance.connected) {
      socketInstance.emit('userOnline', {
        userId: user.id,
        username: user.username,
        email: user.email
      });
    }

    return () => {
      socketInstance.off('onlineUsers', handleOnlineUsers);
      socketInstance.off('userJoined', handleUserJoined);
      socketInstance.off('userLeft', handleUserLeft);
    };
  }, [user]);

  return online;
};

export const useSocket = () => {
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = initializeSocket(user);

    const handleConnect = () => {
      setIsConnected(true);
    };

    const handleDisconnect = () => {
      setIsConnected(false);
    };

    socketInstance.on('connect', handleConnect);
    socketInstance.on('disconnect', handleDisconnect);

    setIsConnected(socketInstance.connected);

    return () => {
      socketInstance.off('connect', handleConnect);
      socketInstance.off('disconnect', handleDisconnect);
    };
  }, [user]);

  return { socket, isConnected };
};

// Cleanup function for app shutdown
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
