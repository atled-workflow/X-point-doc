window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "openapi.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    supportedSubmitMethods: [],
    defaultModelsExpandDepth: -1
  });

  //</editor-fold>

  // supportedSubmitMethodsは空にするとSwagger UI画面上に「Try it out」が表示されなくなる。
  // defaultModelsExpandDepthは-1にするとSchemasが非表示になる。
};
