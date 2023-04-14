import {
  Navbar,
  Button,
  Text,
  Modal,
  Input,
  Checkbox,
  Row,
} from "@nextui-org/react";

interface Client {
  client: any;
  visible: boolean;
  setVisible: any;
  saveAction: any;
  onChangeInput: any;
}

const ClientFormModal = ({client, visible, setVisible, saveAction, onChangeInput}: Client) => {
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={() => setVisible(false)}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Registrar paciente
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          value={client.name}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Nombre"
          onChange={(e) => onChangeInput("name", e.target.value)}
        />
        <Input
          value={client.location}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Domicilio"
          onChange={(e) => onChangeInput("location", e.target.value)}
        />
        <Input
          value={client.phone}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Telefono"
          onChange={(e) => onChangeInput("phone", e.target.value)}
        />
        <Input
          value={client.last_date}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Fecha"
          onChange={(e) => onChangeInput("last_date", e.target.value)}
        />
        <Input
          value={client.years_old}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Edad"
          onChange={(e) => onChangeInput("years_old", e.target.value)}
        />
        <Input
          value={client.treatment}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Tratamiento"
          onChange={(e) => onChangeInput("treatment", e.target.value)}
        />
        <Input
          value={client.budget}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Presupuesto"
          onChange={(e) => onChangeInput("budget", e.target.value)}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Registrar Abonos</Text>
          </Checkbox>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={() => setVisible(false)}>
          Cancelar
        </Button>
        <Button auto onPress={saveAction}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClientFormModal;
