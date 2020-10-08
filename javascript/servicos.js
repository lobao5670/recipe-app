function get(url, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback.apply(this,[xhttp.responseText]);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

/**
 * JSON:
 *  "categories" [
 *      {
 *          "idCategory": identificador da categoria,
 *          "strCategory": nome da categoria,
 *          "strCategoryThumb": url para uma imagem da categoria,
 *          "strCategoryDescription": descricao da categoria
 *      },...
 *  ]
 */
function listarCategoriasDetalhadas(callbackFunction) {
    get("https://www.themealdb.com/api/json/v1/1/categories.php", callbackFunction);
}

/**
 * JSON:
 * "meals": [
 *      {
 *          "strCategory": nome da categoria,
 *      },...
 * ]
 */
function listarCategorias(callbackFunction) {
    get("https://www.themealdb.com/api/json/v1/1/list.php?c=list", callbackFunction);
}

/**
 * JSON:
 * "meals": [
 *      {
 *          "strArea": nome da area,
 *      },...
 * ]
 */
function listarAreas(callbackFunction) {
    get("https://www.themealdb.com/api/json/v1/1/list.php?a=list", callbackFunction);
}

/**
 * JSON:
 *  "meals" [
 *      {
 *          "idIngredient": identificador do ingrediente,
 *          "strIngredient": nome do ingrediente,
 *          "strDescription": descricao do ingrediente,
 *          "strType": tipo do ingrediente (maior parte sao nulls),
 *      },...
 *  ]
 */
function listarIngredientes(callbackFunction) {
    get("https://www.themealdb.com/api/json/v1/1/list.php?i=list", callbackFunction);
}

/**
 * Parametro:
 *      letter: primeira letra da receita
 * JSON:
 * "meals": [
        {
            "idMeal": identificador da receita,
            "strMeal": nome da receita,
            "strDrinkAlternate": ?,
            "strCategory": categoria da receita,
            "strArea": area da receita,
            "strInstructions": instrucoes da receita,
            "strMealThumb": url para uma imagem da receita,
            "strTags": tags da receita ex.: "Tart,Baking,Fruity",
            "strYoutube": url para um video do youtube,
            "strIngredient1": ingrediente 1,
            "strIngredient2": ingrediente 2,
            "strIngredient3": ,
            "strIngredient4": ,
            "strIngredient5": ,
            "strIngredient6": ,
            "strIngredient7": ,
            "strIngredient8": ,
            "strIngredient9": ,
            "strIngredient10": ,
            "strIngredient11": ,
            "strIngredient12": ,
            "strIngredient13": ,
            "strIngredient14": ,
            "strIngredient15": ,
            "strIngredient16": ,
            "strIngredient17": ,
            "strIngredient18": ,
            "strIngredient19": ,
            "strIngredient20": ,
            "strMeasure1": medida do ingrediente 1,
            "strMeasure2": medida do ingrediente 2,
            "strMeasure3": ,
            "strMeasure4": ,
            "strMeasure5": ,
            "strMeasure6": ,
            "strMeasure7": ,
            "strMeasure8": ,
            "strMeasure9": ,
            "strMeasure10": ,
            "strMeasure11": ,
            "strMeasure12": ,
            "strMeasure13": ,
            "strMeasure14": ,
            "strMeasure15": ,
            "strMeasure16": ,
            "strMeasure17": ,
            "strMeasure18": ,
            "strMeasure19": ,
            "strMeasure20": ,
            "strSource": url da fonte da receita,
            "dateModified": ?,
        },...
 */
function listarReceitasPelaPrimeiraLetra(callbackFunction, letter) {
    get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter, callbackFunction);
}

/**
 * Parametro:
 *      name: nome da receita
 * JSON:
 *      igual o da funcao listarReceitasPelaPrimeiraLetra
 */
function procurarReceitaPeloNome(callbackFunction, name) {
    get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(name), callbackFunction);
}

/**
 * Parametro:
 *      main_ingredient: ingrediente principal
 * JSON:
 * "meals" [
 *      {
 *          "strMeal": nome da receita,
 *          "strMealThumb": url para imagem da receita,
 *          "idMeal": identificador da receita,
 *      },...
 *  ]
 */
function filtrarPorIngredientePrincipal(callbackFunction, main_ingredient) {
    get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + encodeURIComponent(main_ingredient), callbackFunction);
}

/**
 * Parametro:
 *      category: categoria
 * JSON:
 * "meals" [
 *      {
 *          "strMeal": nome da receita,
 *          "strMealThumb": url para imagem da receita,
 *          "idMeal": identificador da receita,
 *      },...
 *  ]
 */
function filtrarPorCategoria(callbackFunction, category) {
    get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + encodeURIComponent(category), callbackFunction);
}

/**
 * Parametro:
 *      area: area da receita
 * JSON:
 * "meals" [
 *      {
 *          "strMeal": nome da receita,
 *          "strMealThumb": url para imagem da receita,
 *          "idMeal": identificador da receita,
 *      },...
 *  ]
 */
function filtrarPorArea(callbackFunction, area) {
    get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + encodeURIComponent(area), callbackFunction);
}

/**
 * Parametro:
 *      id: id da receita
 * JSON:
 *      igual o da funcao listarReceitasPelaPrimeiraLetra
 */
function obterReceitaPeloId(callbackFunction, id) {
    get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id, callbackFunction);
}

/**
 * JSON:
 *      igual o da funcao listarReceitasPelaPrimeiraLetra
 */
function obterReceitaAleatoria(callbackFunction) {
    get("https://www.themealdb.com/api/json/v1/1/random.php", callbackFunction);
}

function carregarDadosTabela(dados) {
    let content = JSON.parse(dados);
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for (let receita of content.meals) {
        var len = Object.keys(receita).length;
        if (len === 3) {
            dataHtml += `
                <tr>
                    <td>
                        <img src=${receita.strMealThumb} alt="Thumbnail" width="100" height="100">
                    </td>
                    <td>${receita.strMeal}</td>
                    <td><text id="verMais" onclick="obterReceitaPeloId(carregarDadosTabela, ${receita.idMeal})">Ver Mais</text></td>
                </tr>`;
        } else {
            dataHtml += `
            <tr>
                <td>
                    <img src=${receita.strMealThumb} alt="Thumbnail" width="100" height="100">
                </td>
                <td>${receita.strMeal}</td>
                <td>${receita.strCategory}</td>
                <td>${receita.strArea}</td>
                <td>
                    <a href=${receita.strYoutube}>
                        <img src="./img/youtube.png" alt="YoutubeImage" width="50" height="30">
                    </a>
                </td>
            </tr>`;
        }
    }

    tableBody.innerHTML = dataHtml;
}

function carregarOpcoesIngredientes(dados) {
    let content = JSON.parse(dados);
    var ingredientes = document.getElementById('Ingredientes');

    if (ingredientes.length < 1) {
        let option = new Option('', '');
        ingredientes.appendChild(option);

        Array.from(content.meals).forEach(function(el){
            let option = new Option(el.strIngredient, el.strIngredient);
            ingredientes.appendChild(option);
        });
    }
}

function carregarOpcoesLugares(dados) {
    let content = JSON.parse(dados);
    var lugares = document.getElementById('Lugares');

    if (lugares.length < 1) {
        let option = new Option('', '');
        lugares.appendChild(option);

        Array.from(content.meals).forEach(function(el){
            let option = new Option(el.strArea, el.strArea);
            lugares.appendChild(option);
        });
    }
}

function carregarOpcoesCategorias(dados) {
    let content = JSON.parse(dados);
    var categorias = document.getElementById('Categorias');

    if (categorias.length < 1) {
        let option = new Option('', '');
        categorias.appendChild(option);

        Array.from(content.meals).forEach(function(el){
            let option = new Option(el.strCategory, el.strCategory);
            categorias.appendChild(option);
        });
    }
}

function selecionarIngredientes(_id) {
    var seletor = document.getElementById(_id);

    limparCampos(_id);
    filtrarPorIngredientePrincipal(carregarDadosTabela, seletor.value);

}

function selecionarLugares(_id) {
    var seletor = document.getElementById(_id);

    limparCampos(_id);
    filtrarPorArea(carregarDadosTabela, seletor.value);

}

function selecionarCategorias(_id) {
    var seletor = document.getElementById(_id);

    limparCampos(_id);
    filtrarPorCategoria(carregarDadosTabela, seletor.value);

}

function limparCampos(_id) {
    idList = ['Ingredientes','Categorias', 'Lugares']
    Array.from(idList).forEach(function(el){
        if (_id !== el) {
            seletor = document.getElementById(el);
            seletor.value = null;
        }
    });
}