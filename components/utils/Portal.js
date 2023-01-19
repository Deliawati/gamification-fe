import { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

const useUnmount = (onUnmount) => useEffect(() => onUnmount, []);

const Portal = memo(({ children }) => {
  if (typeof document !== 'object') {
    return null;
  }
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);
  useUnmount(() => document.body.removeChild(rootElement));
  return createPortal(children, rootElement);
});

export default Portal;
