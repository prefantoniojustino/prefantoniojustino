const candidateList = [
    {
        "image": "./assets/images/prefeito-02.png",
        "name": "ANTONIO JUSTINO",
        "num": [4,0]
    },
    {
        "image": "./assets/images/VEREADORES/DAMÁSIO.png",
        "name": "DAMASIO BERTO",
        "num": [4,0,0,0,0]
    },
    {
        "image": "./assets/images/VEREADORES/DENILSON.png",
        "name": "DENILSON ALVES",
        "num": [4,0,1,2,3]
    },
    {
        "image": "./assets/images/VEREADORES/EDIVALDO.png",
        "name": "EDIVALDO ROCHA",
        "num": [5,5,9,9,9]
    },
    {
        "image": "./assets/images/VEREADORES/GRACILENE.png",
        "name": "GRACILENE",
        "num": [4,0,7,8,9]
    },
    {
        "image": "./assets/images/VEREADORES/LIZ-VITORIA.png",
        "name": "LIZ VITORIA",
        "num": [5,5,7,7,7]
    },
    {
        "image": "./assets/images/VEREADORES/LUIZ-ALVES.png",
        "name": "LUIZ ALVES",
        "num": [4,0,6,7,8]
    },
    {
        "image": "./assets/images/VEREADORES/NILMA.png",
        "name": "NILMA DE JOSELIO",
        "num": [4,0,5,5,5]
    },
    {
        "image": "./assets/images/VEREADORES/RHUAN.png",
        "name": "RHUAN",
        "num": [4,0,1,1,1]
    },
    {
        "image": "./assets/images/VEREADORES/ROGERIO-MOREIRA.png",
        "name": "ROGERIO MOREIRA",
        "num": [4,0,3,3,3]
    },
    {
        "image": "./assets/images/VEREADORES/ROSINHA.png",
        "name": "ROSINHA BOLACHINHA",
        "num": [4,0,8,8,8]
    },
    {
        "image": "./assets/images/VEREADORES/RUZIA.png",
        "name": "RUZIA BORGES",
        "num": [4,0,4,4,4]
    },
    {
        "image": "./assets/images/VEREADORES/VAN-MACENA.png",
        "name": "VAN MACENA",
        "num": [4,0,2,2,2]
    },
    {
        "image": "./assets/images/VEREADORES/VERIENE-VILARIM.png",
        "name": "VERIENE VILARIM",
        "num": [5,5,6,6,6]
    }
];

const candidates = document.getElementById("candidates");

const loadCandidate = () => {
    candidateList.map((item) => {
        const numFinal = item.num.map(item => `<span>${item}</span>`).toString();

        return candidates.innerHTML += `
        <div class="card-saint">
            <div class="data-candidate">
                <div class="photo">
                    <img src="${item.image}" alt="Foto do Candidato">
                </div>
                <div class="data">
                    <div class="d-flex flex-column gap-2">
                        <div class="data-title">
                            ${item.name} <small> candidato</small>
                        </div>
                        <div class="data-number">
                           ${numFinal.replaceAll(',', '')}
                        </div>
                        <div class="data-confirm">
                            <button class="btn btn-success">CONFIRMAR</button>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <div class="data-cnpj">
                            <small>Coligação A FORÇA DO TRABALHO (PSB - PSD) <br> CNPJ:
                                56.627.450/0001-63</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `});
}

loadCandidate();