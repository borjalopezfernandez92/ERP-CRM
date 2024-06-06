let a = {
    "localidade 1": {
        "Continente": "África",
            "País": "Angola",
                "Capital": "Luanda"
    },
    "localidade 2": {
        "Continente": "América do Norte",
            "País": "Estados Unidos",
                "Capital": "Washington DC"
    },
    "localidade 3": {
        "Continente": "América Central",
            "País": "México",
                "Capital": "Cidade do México"
    },
    "localidade 4": {
        "Continente": "América do Sul",
            "País": "Brasil",
                "Capital": "Brasília"
    },
    "localidade 5": {
        "Continente": "Europa",
            "País": "Espanha",
                "Capital": "Madri"
    },
    "localidade 6": {
        "Continente": "Europa",
            "País": "Alemanha",
                "Capital": "Berlim"
    },
    "localidade 7": {
        "Continente": "Oceania",
            "País": "Austrália",
                "Capital": "Camberra"
    },
    "localidade 8": {
        "Continente": "Ásia",
            "País": "Japão",
                "Capital": "Tóquio"
    }
}

//// 2
// 2.1 - Código para obtener el país de la localidade 8
console.log(a["localidade 8"].Continente);

// 2.2 Código que permite añadir una localidad a tu elección

a["localidade 9"] = {"Continente":"Ásia", "País:":"China", "Capital": "Pequim"};
console.log(a);

// 2.3 Modifica la localidade 4, añadiendo el número de habitantes

a["localidade 4"].Habitantes = "215,3 millones";

// 2.4 Cambia la estructura del JSON de forma que sea más directo acceder a las capitales de las localidades, dado que va a ser el dato que más vamos a consultar

let a2 = {
    "localidade 1": {
        "Capital": "Luanda",
        "Continente": "África",
            "País": "Angola",
    },
    "localidade 2": {
        "Capital": "Washington DC",
        "Continente": "América do Norte",
            "País": "Estados Unidos",
    },
    "localidade 3": {
        "Capital": "Cidade do México",
        "Continente": "América Central",
            "País": "México",
    },
    "localidade 4": {
        "Capital": "Brasília",
        "Continente": "América do Sul",
            "País": "Brasil",
    },
    "localidade 5": {
        "Capital": "Madri",
        "Continente": "Europa",
            "País": "Espanha",
    },
    "localidade 6": {
        "Capital": "Berlim",
        "Continente": "Europa",
            "País": "Alemanha",
    },
    "localidade 7": {
        "Capital": "Camberra",
        "Continente": "Oceania",
            "País": "Austrália",
    },
    "localidade 8": {
        "Capital": "Tóquio",
        "Continente": "Ásia",
            "País": "Japão",
    }
}
console.log(a2);
/* 3
A partir de la siguiente información, diseña y elabora un JSON que la contenga y permita acceder de manera lo más sencilla posible, 
a precio y calorías de cada desayuno.

*/

let g = {
    "Desayuno 1": {
        "Precio": "5.95",
            "Calorías": "650",
                "Descripción": "Dos de nuestros famosos Gofres belgas con abundante sirope.",
    },
    "Desayuno 2": {
        "Precio": "7.95",
            "Calorías": "900",
                "Descripción": "Ligeros gofres belgas cubiertos de fresas y nata montada.",
    },
    "Desayuno 3": {
        "Precio": "8.95",
            "Calorías": "900",
                "Descripción": "Ligeros gofres belgas cubiertos con frutas del bosque y nata montada.",
    },
    "Desayuno 4": {
        "Precio": "4.50",
            "Calorías": "600",
                "Descripción": "Dos gruesas rebanadas de nuestro pan francés casero.",
    },
    "Desayuno 5": {
        "Precio": "6.95",
            "Calorías": "950",
                "Descripción": "Dos huevos, bacon o salchicha, tostada y patatas fritas.",
    }
}

console.log(g);