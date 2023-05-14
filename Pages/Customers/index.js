import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Pelanggan</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Foto",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Nama Depan",
            dataIndex: "firstName",
          },
          {
            title: "Nama Belakang",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "No Handphone",
            dataIndex: "phone",
          },

          {
            title: "Alamat",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;
