import { Component, OnInit } from '@angular/core';

export interface NavigationRoute {
    routerLink: string;
    routerLinkActive: string;
    title: string;
};
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

    navigationRoutes: NavigationRoute[] = [
        {
            routerLink: '/home',
            routerLinkActive: 'active',
            title: 'Protovirtual'
        },
        {
            routerLink: '/about',
            routerLinkActive: 'active',
            title: 'Proyectos'
        },
        {
            routerLink: '/contact',
            routerLinkActive: 'active',
            title: 'XLR8'
        },
        {
            routerLink: '/contact',
            routerLinkActive: 'active',
            title: 'El Creador'
        },
        {
            routerLink: '/contact',
            routerLinkActive: 'active',
            title: 'Crítica y Pensamientos'
        }
    ]; 

    constructor() {}

    ngOnInit(): void {
        console.log('Header component init...');
    }

    /** 
     * <a class=" flex ">Protovirtual</a><!--routerLink="/home"-->
        <a class=" flex " routerLink="/about" routerLinkActive="">Proyectos</a>
        <a class=" flex " routerLink="/contact" routerLinkActive="active">XLR8</a>
        <a class=" flex" routerLink="/contact" routerLinkActive="active">El Creador</a>
        <a class=" flex " routerLink="/contact" routerLinkActive="active">Crítica y Pensamientos</a>
    */

}
