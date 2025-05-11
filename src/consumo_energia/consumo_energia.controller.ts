// src/consumo_energia/consumo_energia.controller.ts

import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { ConsumoEnergia } from './consumo_energia.model';

@Controller('consumo')
export class ConsumoEnergiaController {
  constructor(private readonly consumoService: ConsumoEnergiaService) {}

  @Post()
  registrarConsumo(@Body() consumo: ConsumoEnergia) {
    return this.consumoService.registrarConsumo(consumo);
  }

  @Get('historico')
  obterHistorico(
    @Query('usuarioId') usuarioId: string,
    @Query('inicio') inicio: string,
    @Query('fim') fim: string,
  ) {
    return this.consumoService.obterHistorico(usuarioId, new Date(inicio), new Date(fim));
  }

  @Get('alerta')
  verificarAlerta(@Query('usuarioId') usuarioId: string) {
    return this.consumoService.verificarAlerta(usuarioId);
  }
}
