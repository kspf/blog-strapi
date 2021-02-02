/*
 * @Descripttion: 
 * @version: 
 * @Author: 马琳峰
 * @Date: 2021-02-02 14:27:16
 * @LastEditors: 马琳峰
 * @LastEditTime: 2021-02-02 15:36:48
 */
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '113.31.124.36'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'lvshan520@Dfsj90_+f'),
      },
      options: {},
    },
  },
});