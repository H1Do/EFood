import { FC, cloneElement, useState } from 'react';

import { CrossButton } from '../crossButton';
import './modal.scss';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, content, children }) => {
  const [open, setOpen] = useState(false);

  const childWithClickHandler = cloneElement(children as React.ReactElement, {
    onClick: () => { setOpen(true); },
  });

  return (
    <div>
      {childWithClickHandler}
      {open && (
        <div className="modal__overlay" onClick={() => { setOpen(false); }}>
          <div className="modal" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal__header">
              <span className="modal__title">{title}</span>
              <CrossButton onClick={() => { setOpen(false); }} />
            </div>
            <div className="modal__content">{content}</div>
          </div>
        </div>
      )}
    </div>
  );
};
