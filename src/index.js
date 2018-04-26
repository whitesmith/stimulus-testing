console.time("stimulus");
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
// document.querySelector('[data-js="click"]').click()
console.timeEnd("stimulus");