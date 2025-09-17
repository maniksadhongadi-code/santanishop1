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

// Mock data for customer orders
const orders = [
  {
    customerEmail: 'customer1@example.com',
    customerPhone: '1234567890',
    product: 'Adobe Creative Cloud',
    status: 'Purchased',
    date: '2024-07-28',
  },
  {
    customerEmail: 'customer2@example.com',
    customerPhone: '0987654321',
    product: 'ChatGPT Plus',
    status: 'Purchased',
    date: '2024-07-27',
  },
  {
    customerEmail: 'customer3@example.com',
    customerPhone: '1122334455',
    product: 'Adobe Creative Cloud',
    status: 'Cancelled',
    date: '2024-07-26',
  },
  {
    customerEmail: 'customer4@example.com',
    customerPhone: '5566778899',
    product: 'ChatGPT Plus',
    status: 'Purchased',
    date: '2024-07-25',
  },
];

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
              {orders.map((order, index) => (
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
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
