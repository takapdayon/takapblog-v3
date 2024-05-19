import 'csstype';

declare module 'csstype' {
  interface Properties {
    // CSS 変数を許可
    [index: `--${string}`]: string | number;
  }
}
