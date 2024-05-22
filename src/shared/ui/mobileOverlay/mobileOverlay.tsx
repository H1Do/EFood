import { FC, useEffect, useRef } from 'react';
import { CrossButton } from './../crossButton';
import './mobile-overlay.scss';

interface MobileOverlayProps {
  setDialog: (dialog: HTMLDialogElement) => void;
  children: React.ReactNode;
}

export const MobileOverlay: FC<MobileOverlayProps> = ({
  setDialog,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      setDialog(dialogRef.current);
    }
  }, [dialogRef.current]);

  return (
    <dialog className="mobile-overlay visible-mobile" ref={dialogRef}>
      <form method="dialog" className="mobile-overlay__close-button-wrapper">
        <CrossButton
          className="mobile-overlay__close-button"
          buttonType="submit"
        >
          <span className="visually-hidden">Close navigation menu</span>
        </CrossButton>
      </form>
      {children}
    </dialog>
  );
};
