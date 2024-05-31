export class Armazenador {
  private constructor() {}

  static salvar(chave: string, valor: any): void {
    const valorComoString = JSON.stringify(valor);
    localStorage.setItem(chave, valorComoString);
  }

  static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
    const valor = localStorage.getItem(chave);

    //se o localstorage estiver vazio, early fail / retorna nulo
    if (valor === null) {
      return null
    } 

    //se houver uma função na variável reviver, passa como parâmetro do parse
    if (reviver) {
      return JSON.parse(valor, reviver) as T
    }

    //senão, apenas faz parse do valor
    return JSON.parse(valor) as T;
  }
}