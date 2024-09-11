import express,{Request, Response} from "express";
import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get('/', function (request:Request, response: Response) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            response.render("index", data);
        });
});

app.get("/detalhar/:name", async function (request: Request, response: Response) {
    const name = request.params.name;

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const data = await res.json();

    response.render("detalhar", data);
});

app.get("/habilidade/:ability", function () {

});


app.listen(3000, function () {
    console.log("Server is running");
})