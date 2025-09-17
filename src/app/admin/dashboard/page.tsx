import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// Customer order data will be populated here once a database is connected.
const orders: any[] = [];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground mb-8">
          Admin Dashboard
        </h2>
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
              {orders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No customer orders yet.
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{order.customerEmail}</TableCell>
                    <TableCell>{order.customerPhone}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.date}</TableCell>
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
      </main>
      <Footer />
    </div>
  );
}
