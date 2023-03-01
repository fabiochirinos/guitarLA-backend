module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfh73ppgp3jqehqajvg0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_nn47'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'TWak9SG8keTFUw2kVRYvcaShZTEUwbW8'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
