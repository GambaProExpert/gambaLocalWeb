import { Injectable } from '@angular/core';

export interface NodeService {
  name: string;
  color: string;
}

export interface LabNode {
  id: string;
  label: string;
  cpu: string;
  ram: string;
  role: string;
  accent: string;
  services: NodeService[];
}

export interface Service {
  id: string;          
  name: string;
  tagline: string;
  shortDesc: string;
  category: string;
  categoryColor: string;
  node: string;
  nodeAccent: string;
  tags: string[];
  website: string;
  logoUrl: string;
  loremTitle: string;
  videoUrl?: string; 
}

@Injectable({ providedIn: 'root' })
export class HomelabDataService {

  readonly nodes: LabNode[] = [
    {
      id: 'node01',
      label: 'gamba',
      cpu: 'Intel Core i3-7100',
      ram: '16 GB DDR4',
      role: 'Red & Seguridad',
      accent: '#e8a040',
      services: [
        { name: 'Pi-hole',   color: '#c0392b' },
        { name: 'Tailscale', color: '#7c6cf8' },
        { name: 'Wazuh',     color: '#1a6b7a' },
        { name: 'Nginx PM',  color: '#2d8a6b' },
        { name: 'n8n',       color: '#e85d25' },
      ]
    },
    {
      id: 'node02',
      label: 'pve3',
      cpu: 'Intel Core i5-3330',
      ram: '12 GB DDR3',
      role: 'Almacenamiento y Media',
      accent: '#c8844a',
      services: [
        { name: 'TrueNAS', color: '#0077b6' },
        { name: 'Immich',  color: '#4250af' },
        { name: 'Jellyfin', color: '#00a4dc' },
      ]
    },
    {
      id: 'node03',
      label: 'gamba2',
      cpu: 'Intel Core i5-3440',
      ram: '8 GB DDR3',
      role: 'Servidor de Juegos',
      accent: '#a0622e',
      services: [
        { name: 'AMP Server', color: '#e85d25' },
      ]
    }
  ];

  readonly services: Service[] = [
    {
      id: 'pi-hole',
      name: 'Pi-hole',
      tagline: 'Agujero negro para anuncios',
      shortDesc: 'Bloqueador DNS a nivel de red que protege todos los dispositivos sin instalar nada en ellos.',
      category: 'Red',
      categoryColor: '#c0392b',
      node: 'NODE-01',
      nodeAccent: '#e8a040',
      tags: ['DNS', 'Ad-block', 'Privacidad'],
      website: 'https://pi-hole.net',
      logoUrl: 'https://pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png',
      loremTitle: 'Cómo Pi-hole protege tu red'
    },
    {
      id: 'tailscale',
      name: 'Tailscale',
      tagline: 'La red de casa en cualquier lado, hasta en la red de tu madre',
      shortDesc: 'VPN mesh basada en WireGuard para acceso remoto seguro a toda la infraestructura.',
      category: 'Red',
      categoryColor: '#7c6cf8',
      node: 'NODE-01',
      nodeAccent: '#e8a040',
      tags: ['VPN', 'WireGuard', 'Remoto'],
      website: 'https://tailscale.com',
      logoUrl: 'https://tailscale.gallerycdn.vsassets.io/extensions/tailscale/vscode-tailscale/1.1.0/1759776117386/Microsoft.VisualStudio.Services.Icons.Default',
      loremTitle: 'Configurando acceso remoto con Tailscale'
    },
    {
      id: 'wazuh',
      name: 'Wazuh',
      tagline: 'Vigilancia de seguridad en tiempo real (No creo que mi madre me hackee pero bueno)',
      shortDesc: 'Plataforma SIEM open-source con detección de intrusiones, análisis de logs y alertas.',
      category: 'Seguridad',
      categoryColor: '#1a6b7a',
      node: 'NODE-01',
      nodeAccent: '#e8a040',
      tags: ['SIEM', 'IDS', 'Logs'],
      website: 'https://wazuh.com',
      logoUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/wazuh.webp',
      loremTitle: 'Monitorizando tu homelab con Wazuh',
      videoUrl: 'https://www.youtube.com/watch?v=vdFT5zGiqNw&t=143s'
    },
    {
      id: 'nginx-proxy-manager',
      name: 'Nginx Proxy Manager',
      tagline: 'DNS en la red privada, para no forzar la memoria',
      shortDesc: 'Gestión gráfica de proxy inverso con certificados SSL automáticos via Let\'s Encrypt.',
      category: 'Red',
      categoryColor: '#2d8a6b',
      node: 'NODE-01',
      nodeAccent: '#e8a040',
      tags: ['Proxy', 'SSL', 'Ingress'],
      website: 'https://nginxproxymanager.com',
      logoUrl: 'https://nginxproxymanager.com/icon.png',
      loremTitle: 'Exponiendo servicios con Nginx Proxy Manager'
    },
    {
      id: 'n8n',
      name: 'n8n',
      tagline: 'Automatización, pero no te hace el café',
      shortDesc: 'Motor de workflows self-hosted que conecta más de 400 servicios y APIs con lógica visual.',
      category: 'Automatización',
      categoryColor: '#e85d25',
      node: 'NODE-01',
      nodeAccent: '#e8a040',
      tags: ['Workflows', 'No-code', 'API'],
      website: 'https://n8n.io',
      logoUrl: 'https://n8n.io/favicon.ico',
      loremTitle: 'Automatizando tareas con n8n'
    },
    {
      id: 'truenas',
      name: 'TrueNAS',
      tagline: 'Almacenamiento empresarial en casa',
      shortDesc: 'NAS basado en ZFS con snapshots, integridad de datos, SMB/NFS y backups automáticos.',
      category: 'Almacenamiento',
      categoryColor: '#0077b6',
      node: 'NODE-02',
      nodeAccent: '#c8844a',
      tags: ['NAS', 'ZFS', 'RAID'],
      website: 'https://www.truenas.com',
      logoUrl: 'https://avatars.githubusercontent.com/u/53482242?s=280&v=4',
      loremTitle: 'Gestionando almacenamiento con TrueNAS'
    },
    {
      id: 'immich',
      name: 'Immich',
      tagline: 'Google Photos, pero tuyo sabes, for fri',
      shortDesc: 'Plataforma de fotos con reconocimiento facial por IA, búsqueda semántica y apps móviles.',
      category: 'Media',
      categoryColor: '#4250af',
      node: 'NODE-02',
      nodeAccent: '#c8844a',
      tags: ['Fotos', 'IA', 'Backup'],
      website: 'https://immich.app',
      logoUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/immich.png',
      loremTitle: 'Tu biblioteca fotográfica con Immich'
    },
    {
      id: 'jellyfin',
      name: 'Jellyfin',
      tagline: 'Tu propio Netflix',
      shortDesc: 'Servidor multimedia open-source con streaming, transcodificación y clientes para todo.',
      category: 'Media',
      categoryColor: '#00a4dc',
      node: 'NODE-02',
      nodeAccent: '#c8844a',
      tags: ['Streaming', 'Películas', 'Series'],
      website: 'https://jellyfin.org',
      logoUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/jellyfin.webp',
      loremTitle: 'Streaming personal con Jellyfin'
    },
    {
      id: 'amp',
      name: 'AMP Server',
      tagline: 'Panel de control para servidores de juegos',
      shortDesc: 'Gestión centralizada de servidores de videojuegos: Minecraft, Valheim, ARK y más.',
      category: 'Gaming',
      categoryColor: '#e85d25',
      node: 'NODE-03',
      nodeAccent: '#a0622e',
      tags: ['Gaming', 'Servidores', 'Gestión'],
      website: 'https://cubecoders.com/AMP',
      logoUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/amp.png',
      loremTitle: 'Servidores de juegos con AMP'
    }
  ];

  getServiceById(id: string): Service | undefined {
    return this.services.find(s => s.id === id);
  }

  getNodeAccent(nodeLabel: string): string {
    return this.nodes.find(n => n.label.includes(nodeLabel.replace('NODE-', '').replace('0', '')))?.accent ?? '#e8a040';
  }
}
