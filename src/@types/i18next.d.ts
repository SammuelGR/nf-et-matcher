import type Resources from './resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    enableSelector: true;
    resources: Resources;
  }
}
