import { useEffect, useState } from 'react';

function Notification({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    visible && (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
        {message}
      </div>
    )
  );
}

export default Notification;