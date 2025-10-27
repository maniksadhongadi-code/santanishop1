import { Logo } from "@/components/icons/logo";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col gap-4 items-start">
                <Link href="/">
                  <Logo className="h-16 w-16" />
                </Link>
                 <p className="text-sm text-muted-foreground max-w-xs">
                    Your one-stop shop for premium digital subscriptions.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4">Navigation</h4>
                <ul className="space-y-2">
                    <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                    <li><Link href="/#products" className="text-muted-foreground hover:text-primary">Products</Link></li>
                    <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4">Useful Links</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Policy</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                 <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary"><Globe /></a>
                </div>
            </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Sanatani Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
