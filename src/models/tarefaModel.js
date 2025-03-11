import prisma from '../../prisma/client.js';

class TarefaModel {
  getAll = async () => {
    return await prisma.tarefa.findMany();
  };

  create = (descricao) => {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      descricao,
      concluida: false,
    };
    this.tarefas.push(novaTarefa);
    return novaTarefa;
  };
  update = (id, concluida) => {
    const tarefa = this.tarefas.find((t) => t.id === Number(id));
    if (tarefa) {
      tarefa.concluida = concluida !== undefined ? concluida : tarefa.concluida;
      return tarefa;
    }
    return null;
  };
  delete = (id) => {
    const index = this.tarefas.findIndex((t) => t.id === Number(id));
    if (index !== -1) {
      this.tarefas.splice(index, 1);
      return true;
    }
    return false;
  };
}
export default new TarefaModel();