import * as TabsPrimitive from "@radix-ui/react-tabs";

// Tabs Component
export const Tabs = TabsPrimitive.Root;

// TabsList Component
export const TabsList = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <TabsPrimitive.List
    className={`flex space-x-4 bg-gray-100 p-2 rounded-md shadow-inner ${className || ""}`}
    {...props}
  />
);

// TabsTrigger Component
export const TabsTrigger = ({
  className,
  value,
  ...props
}: React.HTMLProps<HTMLButtonElement> & { value: string }) => (
  <TabsPrimitive.Trigger
    className={`relative px-6 py-3 text-sm font-medium rounded-lg transition 
    hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
    data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg
    data-[state=active]:before:absolute data-[state=active]:before:inset-0 
    data-[state=active]:before:border data-[state=active]:before:border-blue-600 data-[state=active]:rounded-lg
    ${className || ""}`}
    value={value}
    {...props}
  />
);

// TabsContent Component
export const TabsContent = ({
  className,
  value,
  ...props
}: React.HTMLProps<HTMLDivElement> & { value: string }) => (
  <TabsPrimitive.Content
    className={`p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-opacity 
    duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=inactive]:hidden ${className || ""}`}
    value={value}
    {...props}
  />
);
