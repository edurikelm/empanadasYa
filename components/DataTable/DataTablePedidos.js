import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const DataTablePedidos = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Fecha</DataTable.Title>
        <DataTable.Title numeric>Cantidad</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>21/05/2022</DataTable.Cell>
        <DataTable.Cell numeric>45</DataTable.Cell>
        <DataTable.Cell numeric>$90.000</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>28/05/2022</DataTable.Cell>
        <DataTable.Cell numeric>50</DataTable.Cell>
        <DataTable.Cell numeric>$100.000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>04/06/2022</DataTable.Cell>
        <DataTable.Cell numeric>60</DataTable.Cell>
        <DataTable.Cell numeric>$120.000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default DataTablePedidos;
