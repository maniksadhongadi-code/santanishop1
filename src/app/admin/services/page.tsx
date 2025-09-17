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

const services = [
  {
    name: 'Adobe Creative Cloud',
    duration: '1 Year',
    price: '₹2,999',
    status: 'Active',
  },
  {
    name: 'ChatGPT Plus',
    duration: '6 Months',
    price: '₹2,499',
    status: 'Active',
  },
];

export default function AdminServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground mb-8">
          Manage Services
        </h2>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Name</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.name}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell>{service.price}</TableCell>
                  <TableCell>
                    <Badge variant={service.status === 'Active' ? 'default' : 'destructive'}>
                      {service.status}
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
