import React from 'react';
import {Dialog, DialogBody, DialogFooter, Button} from "@material-tailwind/react"
function Modal(props) {
    const {open, setOpen, closeCallback} = props;
    const handleOpen = (value) => {
        setOpen(!open)
        closeCallback();
    }
    return (
    <Dialog open={open} handler={handleOpen}>
        <DialogBody divider>
          Nota de crédito asignada correctamente!
        </DialogBody>
        <DialogFooter>
        <Button className="flex flex-row bg-violet-400 px-4 py-3 rounded-xl align-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                onClick={handleOpen}>Seguir asignando
                </Button>
        </DialogFooter>
      </Dialog>
    )
}
export default Modal;
