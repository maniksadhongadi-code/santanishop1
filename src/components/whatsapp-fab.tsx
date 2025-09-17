import { cn } from '@/lib/utils';

type WhatsAppFabProps = {
  phoneNumber: string;
  className?: string;
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('h-8 w-8', className)}
    fill="currentColor"
  >
    <path
      d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.3.1-.1.1-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.1.8 2.3 1 2.4.1.2 1.5 2.3 3.7 3.2.5.2.9.4 1.2.5.5.2 1 .1 1.3-.1.4-.2 1.2-1 1.4-1.9.2-.9.2-1.7.1-1.8-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
    />
  </svg>
);

export function WhatsAppFab({ phoneNumber, className }: WhatsAppFabProps) {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-auto h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group p-4',
        className
      )}
    >
      <WhatsAppIcon className="text-white" />
      <span className="text-white font-medium ml-2 text-base transition-all duration-300 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3">
        Reach us here
      </span>
    </a>
  );
}
