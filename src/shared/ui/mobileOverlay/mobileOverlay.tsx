import { FC } from 'react';
import { Button } from '../button';

interface MobileOverlayProps {
  children: React.ReactNode;
}

const MobileOverlay: FC<MobileOverlayProps> = ({ children }) => {
  return (
    <dialog className="mobile-overlay visible-mobile" id="mobileOverlay">
      <form method="dialog" className="mobile-overlay__close-button-wrapper">
        <Button
          className="mobile-overlay__close-button cross-button"
          isSvg={true}
          buttonType="submit"
        >
          <span className="visually-hidden">Close navigation menu</span>
        </Button>
      </form>

      {children}
    </dialog>
  );
};

export default MobileOverlay;
