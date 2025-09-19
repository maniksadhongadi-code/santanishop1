import { Cog } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <Cog className="w-16 h-16 text-primary animate-spin mb-6" />
      <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl mb-4">
        Under Maintenance
      </h1>
      <p className="max-w-xl mx-auto text-lg text-muted-foreground">
        Website under maintenance. Please come back tomorrow at 07:00 a.m. that is 20/09/2025.
      </p>
    </div>
  );
}
