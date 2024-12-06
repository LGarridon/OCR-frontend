const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    transpileDependencies: true,
    devServer: {
      port: 3000, // Cambia 3000 por el puerto deseado
    },
  }
)
