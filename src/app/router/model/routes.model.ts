/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum RoutesPagesKeys {
  AUTH = 'auth',

  CHAT_ID = 'chat_id',
}

export const RoutesModel: Record<RoutesPagesKeys, string> = {
  [RoutesPagesKeys.AUTH]: '/auth',

  [RoutesPagesKeys.CHAT_ID]: '/chat/:chatId',
};
