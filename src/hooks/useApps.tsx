import React, { createContext, useCallback, useContext, useState } from "react";
import { Application } from "../@types/Application";
import api from "../services/api";
import { storeUrl } from "../utils/backend";

interface IAppContext {
  applications: Application[];
  getApplications: () => void;
}

const AppContext = createContext<IAppContext | null>(null);

const AppProvider: React.FC = ({ children }) => { 
    const [applications, setApplications] = useState<Application[]>([]);
    
    const getApplications = useCallback(async () => {
        api.get<Application[]>(storeUrl).then((response) => {
          setApplications(response.data);
        });
    }, []);
    
    return (
      <AppContext.Provider value={{ applications, getApplications }}>
        {children}
      </AppContext.Provider>
    );
};

const useApps = (): IAppContext => { 
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useApps must be used within an AppProvider");
    }

    return context;
}

export { AppProvider, useApps };