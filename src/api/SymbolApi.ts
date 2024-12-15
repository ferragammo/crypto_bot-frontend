import api from ".";
import { ISymbol } from "../types/SymbolType";
import { AxiosError } from "axios";

export const getSymbolData = async (symbolName: string): Promise<ISymbol | null> => {
  try {
    const response = await api.get<ISymbol>(`/data/stock/${symbolName}`);
    return response.data;
   } catch (error) {
        const axiosError = error as AxiosError;
    
        if (axiosError.response && axiosError.response.status === 500) {
          console.error(`Symbol "${symbolName}" not found.`, axiosError.response.data);
          return null;
        } else {
          console.error("Request failed:", axiosError.message);
          return null;
        }
      }
    };
