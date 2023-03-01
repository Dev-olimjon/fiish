"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_handlebars_1 = require("express-handlebars");
const service_1 = __importDefault(require("./service/service"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './pages');
app.get('/', (req, res) => {
    res.render('home');
});
app.post('/', (req, res) => {
    service_1.default.getaccounts(req.body)
        .then(ref => {
        res.redirect('/' + req.body.name);
    })
        .catch(err => {
        console.log(err);
    });
});
app.get('/:name', (req, res) => {
    res.render('exit', { name: req.params.name });
});
app.listen(process.env.PORT || 9090, () => {
    console.log('server has been started on port 9090');
});
