
import { useState } from "react";
import { Navbar, Button, Link, Text, Modal, Input, Checkbox, Row } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import { AcmeLogo } from "../components/AcmeLogo";
import ClientsList from '../components/clients/List'
import clients from '../db/clients'
import ClientFormModal from '../components/ClientFormModal'

const Expediente = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  const [newClient, setNewClient] = useState({
    id: clients.length + 1,
    name: "",
    location: "Chihuahua, Chih.",
    phone: "",
    status: "active",
    status_text: "Al corriente",
    years_old: "",
    last_date: `${day}/${month}/${year}`,
    treatment: "",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU",
    budget: "",
  });
  
  const updateNewClient = (key: string, value: any) => {
    setNewClient({ ...newClient, [key]: value });
  }

  const handleAddClient = (newClientData, update = false) => {
    if (update) {
      const objWithIdIndex = clients.findIndex((obj) => obj.id === newClientData.id);
      clients.splice(objWithIdIndex, 1);
    }
    setVisible(false);
    clients.push(newClientData);
    setNewClient({
      id: clients.length + 1,
      name: "",
      location: "Chihuahua, Chih.",
      phone: "",
      status: "active",
      status_text: "Al corriente",
      years_old: "",
      last_date: `${day}/${month}/${year}`,
      treatment: "",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU",
      budget: "",
    });
  };
    
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Expedientes
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="#">Citas</Navbar.Link>
          <Navbar.Link isActive href="#">
            Pacientes
          </Navbar.Link>
          <Navbar.Link href="#">Laboratorio</Navbar.Link>
          <Navbar.Link href="#">Finanzas</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link> */}
          <Navbar.Item>
            <Button auto flat as={Link} onPress={handler}>
              Nuevo
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <ClientsList
        clients={clients}
        saveAction={handleAddClient}
      />
      <ClientFormModal
        client={newClient}
        visible={visible}
        setVisible={setVisible}
        saveAction={() => handleAddClient(newClient)}
        onChangeInput={updateNewClient}
      />
    </Layout>
  );
}

export default Expediente
