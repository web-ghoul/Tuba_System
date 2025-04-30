import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { ClaimItem } from "../types"; // Adjust based on your types

interface ClaimTableProps {
  items: ClaimItem[];
}

const ClaimTable: React.FC<ClaimTableProps> = ({ items }) => {
  return (
    <Box className="mt-4">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-gray-600">Item</TableCell>
              <TableCell className="font-bold text-gray-600" align="right">
                Price
              </TableCell>
              <TableCell className="font-bold text-gray-600" align="right">
                VAT(15%)
              </TableCell>
              <TableCell className="font-bold text-gray-600" align="right">
                Total With VAT
              </TableCell>
              <TableCell className="font-bold text-gray-600" align="right">
                Justification
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.claim}</TableCell>
                <TableCell align="right">{item.price_base}</TableCell>
                <TableCell align="right">{item.tax_vat}</TableCell>
                <TableCell align="right">{item.price_taxed}</TableCell>
                <TableCell align="right">{item.justification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClaimTable;
