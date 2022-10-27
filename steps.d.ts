/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {
  "amOutsideAngularApp": "naoEstouEmAplicacaoAngular",
  "amInsideAngularApp": "estouNaAplicacaoAngular",
  "waitForElement": "aguardoPeloElemento",
  "waitForClickable": "aguardoPorClicavel",
  "waitForVisible": "aguardoPorVisivel",
  "waitForText": "aguardoPorTexto",
  "moveTo": "movoPara",
  "refresh": "atualizoAPagina",
  "haveModule": "temModulo",
  "resetModule": "resetoModulo",
  "amOnPage": "estouNaPagina",
  "click": "clico",
  "doubleClick": "clicoDuplamente",
  "see": "vejo",
  "dontSee": "naoVejo",
  "selectOption": "selecionoAOpcao",
  "fillField": "preenchoOCampo",
  "pressKey": "pressioneATecla",
  "triggerMouseEvent": "lançarEventoDoMouse",
  "attachFile": "anexaOArquivo",
  "seeInField": "vejoNoCampo",
  "dontSeeInField": "naoVejoNoCampo",
  "appendField": "adicionaCampo",
  "checkOption": "marcoOpcao",
  "uncheckOption": "desmarcoOpcao",
  "seeCheckboxIsChecked": "vejoCheckboxMarcado",
  "dontSeeCheckboxIsChecked": "naoVejoCheckboxMarcado",
  "grabTextFrom": "pegoTextoDe",
  "grabValueFrom": "pegoValorDe",
  "grabAttributeFrom": "pegoAtributoDe",
  "seeInTitle": "VejoNoTitulo",
  "dontSeeInTitle": "naoVejoNoTitulo",
  "grabTitle": "pegoOTitulo",
  "seeElement": "vejoElemento",
  "dontSeeElement": "naoVejoElemento",
  "seeInSource": "vejoNoCodigo",
  "dontSeeInSource": "naoVejoNoCodigo",
  "executeScript": "executoScript",
  "executeAsyncScript": "executoScriptAssincrono",
  "seeInCurrentUrl": "vejoNaUrl",
  "dontSeeInCurrentUrl": "naoVejoNaUrl",
  "seeCurrentUrlEquals": "vejoUrlIgualA",
  "dontSeeCurrentUrlEquals": "naoVejoUrlIgualA",
  "saveScreenshot": "salvoCapturaDeTela",
  "setCookie": "definoCookie",
  "clearCookie": "limpoCookies",
  "seeCookie": "vejoCookie",
  "dontSeeCookie": "naoVejoCookie",
  "grabCookie": "pegoCookie",
  "resizeWindow": "redimensionaJanela",
  "wait": "aguardo"
}
  }
}
