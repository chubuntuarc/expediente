import { useState } from "react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "../StyleBadge";
import { IconButton } from "../IconButton";
import { EyeIcon } from "../EyeIcon";
import { EditIcon } from "../EditIcon";
import { DeleteIcon } from "../DeleteIcon";
import ClientFormModal from "../ClientFormModal";

interface Client {
  id: number;
  name: string;
  location: string;
  phone: string;
  status: string;
  status_text: string;
  years_old: string;
  last_date: string;
  treatment: string;
  avatar: string;
  budget: string;
}
interface List {
  clients: any;
  saveAction: any;
}

const ClientsList = ({
  clients,
  saveAction,
}: List) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [updatedClient, setUpdatedClient] = useState({});
  const columns = [
    { name: "Nombre", uid: "name" },
    { name: "Tratamiento", uid: "treatment" },
    { name: "Ultima cita", uid: "last_date" },
    { name: "Estado", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const handleEditClient = (client: Client) => {
    setUpdatedClient(client);
    setVisibleModal(true);
  };
  
  const updateClient = (key: string, value: any) => {
    setUpdatedClient({ ...updatedClient, [key]: value });
  };
  
  const handleSaveAction = () => {
    saveAction(updatedClient, true);
    setVisibleModal(false)
  }

  const renderCell = (user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.phone}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user.status}>{user.status_text}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Detalle">
                <IconButton onClick={() => handleEditClient(user)}>
                  <EyeIcon
                    size={20}
                    fill="#979797"
                    height={null}
                    width={null}
                  />
                </IconButton>
              </Tooltip>
            </Col>
            {/* <Col css={{ d: "flex" }}>
              <Tooltip content="Editar">
                <IconButton onClick={() => handleEditClient(user)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col> */}
            {/* <Col css={{ d: "flex" }}>
              <Tooltip
                content="Eliminar"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col> */}
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <>
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={[...clients].reverse()}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <ClientFormModal
        client={updatedClient}
        visible={visibleModal}
        setVisible={setVisibleModal}
        saveAction={handleSaveAction}
        onChangeInput={updateClient}
      />
    </>
  );
};

export default ClientsList;
