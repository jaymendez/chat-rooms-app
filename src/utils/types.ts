export interface IChannel {
  id: string;
  name: string;
  members: string[] | [];
}

export type TChannels = IChannel[];
