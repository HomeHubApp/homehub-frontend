export default function TopHeader({ title, subtitle }) {
  return (
    <header className="flex  sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 sm:gap-0 pt-2">
      <div className="flex flex-col">
        <h1 className="text-[24px] md:text-[31px] font-bold font-['Plus_Jakarta_Sans'] leading-[120%] tracking-normal dark:text-white">
         {title}
        </h1>
        <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 mt-1">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
