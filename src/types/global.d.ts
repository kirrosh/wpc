/**
 * Тут делаем заглушки для тех модулей, у которых пока нет тайпингсов или для псевдо-модулей вебпака.
 */

declare module '*.ttf';
declare module '*.woff';
declare module '*.eot';

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}