import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { Equipo } from '../interfaces/equipos.interface';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  private baseUrl = 'http://rafapenya.com/teams2.json';

  constructor(private http: HttpClient) {}

  getEquipos(): Observable<Equipo[]> {
    return this.http
      .get<Equipo[]>(this.baseUrl)
      .pipe(
        map((equipos) =>
          equipos.filter((equipo) => equipo.league.identify === '0001')
        )
      );
  }

  getTeamDetail(slug: string): Observable<Equipo> {
    return this.http.get<Equipo[]>(`${this.baseUrl}`).pipe(
      map((teams) => {
        const equipo = teams.find((team) => team.slug === slug);
        if (equipo) return equipo;
        throw new Error('Equipo no encontrado');
      }),
      catchError((error) => {
        console.error(
          'Ocurrió un error al obtener el detalle del equipo:',
          error
        );
        throw error;
      })
    );
  }
}
