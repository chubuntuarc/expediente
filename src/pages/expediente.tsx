
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import { AcmeLogo } from "../components/AcmeLogo";

const Expediente = () => {
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
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <h1>Hello world</h1>
    </Layout>
  );
}

export default Expediente