import {
  WS_CONNECTION_PRIVATE_START,
  WS_CONNECTION_PRIVATE_SUCCESS,
  WS_CONNECTION_PRIVATE_ERROR,
  WS_CONNECTION_PRIVATE_CLOSED,
  WS_GET_MESSAGE_PRIVATE,
  WS_SEND_MESSAGE_PRIVATE,
} from '../constants/ws-private';

export const wsPrivateActions = {
  wsInit: WS_CONNECTION_PRIVATE_START,
  onOpen: WS_CONNECTION_PRIVATE_SUCCESS,
  onError: WS_CONNECTION_PRIVATE_ERROR,
  onClose: WS_CONNECTION_PRIVATE_CLOSED,
  onMessage: WS_GET_MESSAGE_PRIVATE,
  wsSendMessage: WS_SEND_MESSAGE_PRIVATE,
};

interface IWsConnectionPrivateStart {
	readonly type: typeof WS_CONNECTION_PRIVATE_START;
}
interface IWsConnectionPrivateSuccess {
	readonly type: typeof WS_CONNECTION_PRIVATE_SUCCESS, payload: any;
}
interface IWsConnectionPrivateError {
	readonly type: typeof WS_CONNECTION_PRIVATE_ERROR; payload: any;
}
interface IWsConnectionPrivateClosed {
	readonly type: typeof WS_CONNECTION_PRIVATE_CLOSED;
}
interface IWsGetMessagePrivate {
	readonly type: typeof WS_GET_MESSAGE_PRIVATE; readonly payload: any;
}
interface IWsSendMessagePrivate {
	readonly type: typeof WS_SEND_MESSAGE_PRIVATE;
}
export type TWsPrivateAction = IWsConnectionPrivateStart | IWsConnectionPrivateSuccess | IWsConnectionPrivateError | IWsConnectionPrivateClosed | IWsGetMessagePrivate | IWsSendMessagePrivate;