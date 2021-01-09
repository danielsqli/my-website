import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import styles from '../styles/links.module.css';

interface ModalProps {
    show: string;
    showString: string;
    name: string;
    description: string;
    setShow: (show: string) => void;
}

const ProjectModal = (props: ModalProps) => {
    return (
        <Modal 
            show={props.show === props.showString} 
            onHide={() => props.setShow("")} 
            className={styles.aboutModal}
            dialogClassName="modal-90w"
        >
            <Modal.Header closeButton>
                <Modal.Title>About {props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.description}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShow("")}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectModal;
