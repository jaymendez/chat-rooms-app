export type TIconProps = {
  className?: string;
};

export interface IChannel {
  id: string;
  name: string;
  members: string[] | [];
}

export type TChannels = IChannel[];

export type TMessage = {
  createdBy: string;
  dateCreation: unknown;
  message: string;
};

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
