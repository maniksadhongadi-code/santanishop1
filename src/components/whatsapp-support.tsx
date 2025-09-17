import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M16.75 13.96c.25.13.42.2.55.35.13.15.2.33.2.55s-.07.4-.2.55c-.13.15-.28.3-.55.38-.27.1-.55.15-.9.15-.35 0-.73-.05-1.13-.15s-.8-.25-1.2-.45c-.42-.2-.8-.45-1.15-.73s-.65-.6-.9-1c-.25-.37-.45-.8-.58-1.25s-.2-1-.2-1.55v-.1c0-.5.07-1 .2-1.5.15-.5.35-.95.63-1.35.27-.4.6-.75.95-1 .35-.24.7-.4 1.1-.5.4-.1.8-.13 1.15-.13.38 0 .7.05 1 .13s.55.2.75.35c.2.15.35.3.45.5s.15.4.15.6c0 .2-.05.4-.13.55s-.17.28-.3.4c-.1.13-.2.24-.3.3s-.2.15-.3.2c-.1 0-.2.05-.25.07s-.1.05-.15.05h-.1c-.05 0-.1 0-.15-.02s-.1-.05-.1-.07-.1-.07-.15-.1c-.05-.05-.1-.1-.15-.15s-.1-.1-.15-.15c-.15-.15-.3-.3-.4-.45s-.25-.3-.3-.4c-.07-.1-.1-.2-.1-.3v-.1c0-.05.02-.1.05-.13s.05-.05.07-.05h.15c.05 0 .1 0 .13.02s.07.03.1.05c.1.05.2.1.3.15s.2.1.25.15c.05.02.1.05.13.07s.07.05.1.07zm-5.4-6.2c-1.5 0-2.83.5-4 1.5s-2.25 2.5-2.25 4c0 1.55.5 3 1.5 4.15s2.3 1.95 3.75 2.3l-1 3 3.2-1.75c.85.2 1.7.3 2.5.3 1.5 0 2.83-.5 4-1.5s2.25-2.5 2.25-4-1-2.85-2.25-4-2.5-1.5-4-1.5z" />
  </svg>
);

export function WhatsAppSupport() {
  // TODO: Replace with your actual WhatsApp number
  const phoneNumber = '911234567890'; 
  const message = "Hello! I have a question about a subscription."; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#128C7E] rounded-full shadow-lg flex items-center gap-2 p-4 h-auto"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">Contact Support</span>
            </Button>
        </Link>
    </div>
  );
}
