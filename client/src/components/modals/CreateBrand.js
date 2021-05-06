import React, {useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";


const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    createBrand({ name: value }).then((res) => {
      setValue("");
      onHide();
    });
  };


  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавление Бренда
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Control
                value={value}
                placeholder={"Название Бренда"}
                onChange={e=>setValue(e.target.value)}
            />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
