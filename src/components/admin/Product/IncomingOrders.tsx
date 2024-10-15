import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow, Chip, Paper, Stack } from '@mui/material';

type Order = {
  orderNo: string;
  customerName: string;
  products: { name: string; quantity: number; price: number }[];
  notes: string[];
  status: 'Coming Order' | 'In Progress' | 'Waiting To Pick Up' | 'Done';
};

const incomingOrdersData: Order[] = [
  {
    orderNo: '88213',
    customerName: 'Azka D.A',
    products: [
      { name: 'Nasi Kuning', quantity: 1, price: 6000 },
      { name: 'Kopi', quantity: 2, price: 6000 },
    ],
    notes: ['jangan pakai sambal', 'Kapal api dan good day'],
    status: 'Coming Order',
  },
];

const IncomingOrders: React.FC = () => {
  const [incomingOrders, setIncomingOrders] = useState(incomingOrdersData);
  const [selectedTab, setSelectedTab] = useState<'Coming Order' | 'In Progress' | 'Waiting To Pick Up' | 'Done'>('Coming Order');
  const navigate = useNavigate();

  const handleConfirm = (orderNo: string) => {
    setIncomingOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.orderNo === orderNo) {
          if (order.status === 'Coming Order') {
            setSelectedTab('In Progress');
            return { ...order, status: 'In Progress' };
          }
          if (order.status === 'In Progress') {
            setSelectedTab('Waiting To Pick Up');
            return { ...order, status: 'Waiting To Pick Up' };
          }
          if (order.status === 'Waiting To Pick Up') {
            setSelectedTab('Done');
            return { ...order, status: 'Done' };
          }
        }
        return order;
      })
    );
  };

  const handleDoneClick = (orderNo: string) => {
    setIncomingOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.orderNo === orderNo && order.status === 'Done') {
          navigate('/pedagang/qrscanplaceholder');
        }
        return order;
      })
    );
  };

  return (
    <Box sx={{ bgcolor: '#0e1726', p: 2, borderRadius: 2, color: 'white', width: '100%' }}>
      <Typography variant="h4" sx={{ pb: 2, textAlign: 'center' }}>
        Incoming Orders
      </Typography>

      {/* Tabs for Status */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mb: 4, justifyContent: 'center' }}>
        {['Coming Order', 'In Progress', 'Waiting To Pick Up', 'Done'].map((tab) => (
          <Chip
            key={tab}
            label={tab}
            clickable
            color={selectedTab === tab ? 'primary' : 'default'}
            onClick={() => setSelectedTab(tab as Order['status'])}
            sx={{ color: 'white' }}
          />
        ))}
      </Stack>

      <Paper sx={{ bgcolor: '#1a2230', borderRadius: 2, p: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>No. Order</TableCell>
              <TableCell sx={{ color: 'white' }}>Customer</TableCell>
              <TableCell sx={{ color: 'white' }}>Products</TableCell>
              <TableCell sx={{ color: 'white' }}>Subtotal</TableCell>
              <TableCell sx={{ color: 'white' }}>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomingOrders
              .filter((order) => order.status === selectedTab)
              .map((order) => {
                const subtotal = order.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
                return (
                  <TableRow key={order.orderNo} sx={{ '&:hover': { bgcolor: '#2b3442' } }}>
                    <TableCell sx={{ color: 'white' }}>{order.orderNo}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{order.customerName}</TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      {order.products.map((product, index) => (
                        <Box key={index}>
                          {product.name} x{product.quantity}
                        </Box>
                      ))}
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>Rp.{subtotal.toLocaleString('id-ID')}</TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      {order.notes.map((note, index) => (
                        <Box key={index}>{note}</Box>
                      ))}
                    </TableCell>
                  </TableRow>
                );
              })}

            {/* Total Row */}
            {incomingOrders.filter((order) => order.status === selectedTab).length > 0 && (
              <TableRow>
                <TableCell colSpan={3} sx={{ color: 'white', fontWeight: 'bold', textAlign: 'right' }}>
                  Total:
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  Rp.
                  {incomingOrders
                    .filter((order) => order.status === selectedTab)
                    .reduce(
                      (acc, order) =>
                        acc + order.products.reduce((sum, product) => sum + product.price * product.quantity, 0),
                      0
                    )
                    .toLocaleString('id-ID')}
                </TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* Buttons at the bottom for mobile view */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
        {incomingOrders
          .filter((order) => order.status === selectedTab)
          .map((order) => (
            <Box key={order.orderNo} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              {order.status !== 'Done' ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleConfirm(order.orderNo)}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                    bgcolor: '#1976d2', // Mengatur warna latar belakang tombol
                    color: 'white', // Mengatur warna teks tombol
                    width: '100%', // Tombol mengisi lebar penuh
                  }}
                >
                  Confirm
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleDoneClick(order.orderNo)}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                    bgcolor: '#4caf50', // Mengatur warna latar belakang tombol
                    color: 'white', // Mengatur warna teks tombol
                    width: '100%', // Tombol mengisi lebar penuh
                  }}
                >
                  Done
                </Button>
              )}
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default IncomingOrders;
