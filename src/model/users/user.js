class User {
    constructor(destino, orcamento, status, objetivosViagem) {
        this.id = this.generateId();
        this.destino = destino;
        this.orcamento = orcamento;
        this.status = status;
        this.objetivosViagem = objetivosViagem;
    }
    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;