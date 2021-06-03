import { ACTION_TYPES } from "./enumActions";

export interface IReservation {
  id: number;
  roomId: number;
  reservedBy: string;
  from: string;
  to: string;
  notes: string;
}
export interface IRoom {
  id: number;
  reservations: IReservation[];
}   
export interface IAction {
    type:ACTION_TYPES;
    payload:IReservation
}
