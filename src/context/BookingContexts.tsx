import React, { createContext, useState, ReactNode } from "react";

interface BookingContextType {
  showToast: boolean;
  setShowToast: (value: boolean) => void;
}

// Create the context
export const BookingContext = createContext<BookingContextType | null>(null);

// Create a provider component
export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <BookingContext.Provider value={{ showToast, setShowToast }}>
      {children}
    </BookingContext.Provider>
  );
};
