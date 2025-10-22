'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, Timestamp, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Order = {
  id: string;
  customerEmail: string;
  customerPhone: string;
  product: string;
  date: Timestamp;
  status: 'Purchased' | 'Cancelled';
};

function OrdersTable({ orders, loading }: { orders: Order[], loading: boolean }) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                Loading orders...
              </TableCell>
            </TableRow>
          ) : orders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                No orders in this category.
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.customerEmail}</TableCell>
                <TableCell>{order.customerPhone}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{new Date(order.date.seconds * 1000).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={order.status === 'Purchased' ? 'default' : 'destructive'}>
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default function AdminDashboard() {
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);
  const [otherOrders, setOtherOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'orders');
        
        // Active orders
        const activeQuery = query(ordersCollection, where('status', '==', 'Purchased'), orderBy('date', 'desc'));
        const activeSnapshot = await getDocs(activeQuery);
        const activeList = activeSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Order[];
        setActiveOrders(activeList);
        
        // Pending/Cancelled orders
        const otherQuery = query(ordersCollection, where('status', '!=', 'Purchased'), orderBy('date', 'desc'));
        const otherSnapshot = await getDocs(otherQuery);
        const otherList = otherSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Order[];
        setOtherOrders(otherList);

      } catch (error) {
        console.error("Error fetching orders: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground">
        Customer Orders
      </h2>
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Customers</TabsTrigger>
          <TabsTrigger value="pending">Pending & Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-6">
          <OrdersTable orders={activeOrders} loading={loading} />
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
          <OrdersTable orders={otherOrders} loading={loading} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
