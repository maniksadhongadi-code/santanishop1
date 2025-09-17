import { cn } from '@/lib/utils';

type WhatsAppFabProps = {
  phoneNumber: string;
  className?: string;
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={cn('h-8 w-8', className)}
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .5c58.3 0 111.3 22.5 151.2 62.4 39.9 39.9 62.3 92.8 62.3 151.2 0 118.7-97.1 213.9-215.9 213.9h-.1c-37.4 0-73.4-9.8-105.9-28.7l-7.9-4.7-71.2 18.6 19-69.8-5.3-8.2c-20.1-31.4-32.2-68.2-32.2-107.4V253c0-118.7 95.9-215.2 212.7-215.2zM223.9 439.6c-7.2 0-14.3-.5-21.3-1.7l-1.8-.3-15.6 4.1 4.2-15.2-.3-1.8c-17.3-29.3-26.2-62.2-26.2-96.4 0-101.9 83.1-185 185-185 50.9 0 98.2 19.8 132.6 54.2 34.4 34.4 53.5 81.7 53.5 132.6 0 101.9-83.1 185-185 185zm101.7-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.4-2.5-5.1-4.2-10.6-6.9z" />
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
