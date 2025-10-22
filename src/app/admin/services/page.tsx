import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    name: 'Adobe Creative Cloud',
    duration: '1 Year',
    price: '₹2,499',
    status: 'Active',
  },
];

export default function AdminServices() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground">
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
    </div>
  );
}
