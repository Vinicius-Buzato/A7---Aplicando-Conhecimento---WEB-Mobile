// src/consumo_energia/consumo_energia.service.ts

import { Injectable } from '@nestjs/common';
import { ConsumoEnergia } from './consumo_energia.model';

@Injectable()
export class ConsumoEnergiaService {
  private registros: ConsumoEnergia[] = [];

  registrarConsumo(consumo: ConsumoEnergia) {
    this.registros.push(consumo);
    return { mensagem: 'Registro adicionado com sucesso' };
  }

  obterHistorico(usuarioId: string, dataInicio: Date, dataFim: Date) {
    return this.registros.filter(
      (r) =>
        r.usuarioId === usuarioId &&
        new Date(r.dataLeitura) >= dataInicio &&
        new Date(r.dataLeitura) <= dataFim,
    );
  }

  verificarAlerta(usuarioId: string) {
    const registrosUsuario = this.registros
      .filter((r) => r.usuarioId === usuarioId)
      .sort((a, b) => new Date(a.dataLeitura).getTime() - new Date(b.dataLeitura).getTime());

    if (registrosUsuario.length < 2) return { alerta: false, mensagem: 'Insuficiente para gerar alerta' };

    const penultimo = registrosUsuario[registrosUsuario.length - 2];
    const ultimo = registrosUsuario[registrosUsuario.length - 1];

    if (ultimo.quantidadeKwh > penultimo.quantidadeKwh) {
      return {
        alerta: true,
        mensagem: 'Atenção: Consumo atual é maior que o mês anterior!',
      };
    }

    return { alerta: false, mensagem: 'Consumo dentro do esperado.' };
  }
}
