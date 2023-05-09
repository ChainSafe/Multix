import { ProxyType } from '../model';

export const getProxyTypeFromRaw = (proxyType: { [index: string]: any }) => {
  return (<any>ProxyType)[proxyType.__kind];
};
