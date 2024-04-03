import { createContext, useEffect, useState } from "react";

export const notificationContext = createContext({
  notification: {
    title: "",
    message: "",
    status: "",
  },
  onNotification: (title, message, status) => {},
  onReset: () => {},
});

export default function NotificationProvider(props) {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    status: null,
  });

  useEffect(() => {
    if (
      notification.status &&
      (notification.status === "error" || notification.status === "success")
    ) {
      const timer = setTimeout(() => {
        setNotification({
          title: "",
          message: "",
          status: null,
        });
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification.status]);

  function handleNotification(title, message, status) {
    setNotification({ title, message, status });
  }

  function resetNotification() {
    setNotification({
      title: "",
      message: "",
      status: null,
    });
  }

  return (
    <notificationContext.Provider
      value={{
        notification,
        onNotification: handleNotification,
        onReset: resetNotification,
      }}
    >
      {props.children}
    </notificationContext.Provider>
  );
}
