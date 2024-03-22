const Alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 2 },
    { nome: 'Lucas', nota: 10}
]

const alunosAprovados = (array) => {
    return array.filter(aluno => aluno.nota >= 6)
}
const alunosReprovados = (array) =>{
    return array.filter(aluno => aluno.nota < 6)
}

function pularLinha() {
    console.log()
}

console.log("alunos aprovados")
console.log(alunosAprovados(Alunos))
pularLinha()
console.log("________________________________")
pularLinha()
console.log("alunos Reprovados")
console.log(alunosReprovados(Alunos))