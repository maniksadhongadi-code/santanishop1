export function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 border-t mt-auto">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sanatani Shop. All rights reserved.
        <p className="mt-2">
            For any issue/question about a subscription, please contact us on WhatsApp.
        </p>
      </div>
    </footer>
  );
}
