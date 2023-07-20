import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Principal'
    },
    {
        routeLink: 'products',
        icon: 'fas fa-user-graduate',
        label: 'ALUMNOS',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Registro Alumnos'
            },
            {
                routeLink: 'products/level1.2',
                label: 'Buscar Alumnos',
            },
            {
                routeLink: 'products/level1.2',
                label: 'Buscar Notas',
            }
        ]
    },
    {
        routeLink: 'coupens',
        icon: 'fas fa-chalkboard-teacher',
        label: 'DOCENTES',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'Registro Docentes'
            },
            {
                routeLink: 'assigned-classes',
                label: 'Clases Asignadas'
            },
            {
              routeLink: 'search-classes',
              label: 'Buscar Clases'
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fas fa-file-export',
        label: 'REPORTES',
        items: [
            {
                routeLink: 'reporte/informe-academico',
                label: 'Informe Académico Anual'
            },
            {
                routeLink: 'settings/customize',
                label: 'Alumnos por clase'
            }
        ]
    },
    {
      routeLink: 'settings',
      icon: 'fa fa-database',
      label: 'MANTENIMIENTO',
      items: [
          {
              routeLink: 'settings/profile',
              label: 'Mantenimiento Cronograma'
          },
          {
              routeLink: 'settings/customize',
              label: 'Mantenimiento Nota'
          },
          {
              routeLink: 'settings/customize',
              label: 'Mantenimiento Area'
          },
          {
              routeLink: 'settings/customize',
              label: 'Mantenimiento Competencia'
          },
          {
              routeLink: 'settings/customize',
              label: 'Mantenimiento Capacidades'
          }
      ]
  },
];
