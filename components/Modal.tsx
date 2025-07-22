import React from "react";
import ReactModal from "react-modal";

type Props = {
  children: React.ReactNode;
  overlayClassName?: string;
  className?: string;
};

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = React.forwardRef<ModalHandle, Props>(
  ({ children, className, overlayClassName }, ref) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleModalOpen = () => { 
      setIsOpen(true);
    };

    const handleModalClose = () => {
      setIsOpen(false);
    };

    React.useImperativeHandle(ref, () => ({
      open: handleModalOpen,
      close: handleModalClose,
    }));

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const appRoot = document.getElementById("__next") || document.body;
        ReactModal.setAppElement(appRoot);
      }
    }, []);
    

    return (
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}       
        onRequestClose={() => {
          setIsOpen(false);
        }}
        overlayClassName={[
          "bg-black/50 fixed inset-0 z-50 flex items-center justify-center",
          overlayClassName,
        ].join(" ")}
        className={[
          "bg-[#323332] py-6 px-7 mx-5 md:mx-10 outline-none max-h-[90vh] overflow-y-auto rounded-lg",
          className,
        ].join(" ")}
      >
        <div className="flex flex-col overflow-y-hidden overflow-x-hidden">
          <button onClick={handleModalClose} title="Close" className="self-end">
            <div className="relative">
              <div className="w-5 h-0.5 bg-black rounded-full rotate-45 absolute"></div>
              <div className="w-5 h-0.5 bg-black rounded-full -rotate-45 absolute"></div>
            </div>
          </button>
          {children}
        </div>
      </ReactModal>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
