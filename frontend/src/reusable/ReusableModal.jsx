import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

function ReusableModal({
  isOpen,
  onOpenChange,
  title,
  body,
  footerCloseTitle,
  footerSubmitTite,
  onclickSubmit,
  classNameOnclose,
  classNameSubmit,
}) {
  return (
    <>
      <Modal
        backdrop="transparent"
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeIn",
              },
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {body ? body : null}
              </ModalBody>
              <ModalFooter>
                <button className={classNameSubmit} onClick={onclickSubmit}>
                  {footerSubmitTite}
                </button>
                <button className={classNameOnclose} onClick={onClose}>
                  {footerCloseTitle}
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReusableModal;
