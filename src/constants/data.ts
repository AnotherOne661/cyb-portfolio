import { url } from "inspector";

export const SKILLS = [
  { id: 'java', name: 'Java', icon: '/images/java.webp', url: 'https://java.com' },
  { id: 'python', name: 'Python', icon: '/images/python.webp', url: 'https://python.org' },
  { id: 'tailwind', name: 'Tailwind', icon: '/images/tailwind.webp', url: 'https://tailwindcss.com' },
  { id: 'mysql' , name: 'MySQL', icon: '/images/mysql.webp' , url: 'https://dev.mysql.com/doc/' },
  { id: 'php', name: 'PHP' , icon: '/images/php.webp', url: 'https://www.php.net/docs.php'},
  { id: 'html', name: 'HTML/CSS/JS Vanilla' , icon: '/images/html.webp', url: 'https://html.spec.whatwg.org/multipage/'},
  { id: 'react', name: 'ReactJS' , icon: '/images/react.webp', url: 'https://react.dev/'},
  { id: 'nextjs', name: 'NextJS' , icon: '/images/nextjs.webp', url: 'https://nextjs.org/docs'},
  { id: 'docker', name: 'Docker' , icon: '/images/docker.webp', url: 'https://docs.docker.com/'},
  { id: 'kubernetes', name: 'Kubernetes' , icon: '/images/kubernetes.webp', url: 'https://kubernetes.io/docs/home/'},
  { id: 'tanzu', name: 'Tanzu' , icon: '/images/tanzu.webp', url: 'https://tanzu.vmware.com/developer/'},
  { id: 'jenkins', name: 'Jenkins' , icon: '/images/jenkins.webp', url: 'https://www.jenkins.io/doc/'},
  { id: 'grafana', name: 'Grafana' , icon: '/images/grafana.webp', url: 'https://grafana.com/docs/'},
  { id: 'prometheus', name: 'Prometheus' , icon: '/images/prometheus.webp', url: 'https://prometheus.io/docs/'},
  { id: 'velero', name: 'Velero' , icon: '/images/velero.webp', url: 'https://velero.io/docs/'},
  { id: 'trident', name: 'Trident' , icon: '/images/trident.webp', url: 'https://netapp-trident.readthedocs.io/en/stable/'},
  { id: 'RKE2', name: "RKE2", icon: '/images/rke2.webp', url: 'https://docs.rke2.io/'},
  { id: 'vcf', name: "VCF", icon: '/images/vcf.webp', url: 'https://techdocs.broadcom.com/us/en/vmware-cis/vcf/vcf-9-0-and-later/9-1.html'},
  { id: 'ansible', name: "Ansible", icon: '/images/ansible.webp', url: 'https://docs.ansible.com/'},
  { id: 'openshift', name: "OpenShift", icon: '/images/openshift.webp', url: 'https://www.redhat.com/es/technologies/cloud-computing/openshift'},
  { id: 'OADP', name: "OADP", icon: '/images/OADP.webp', url: 'https://access.redhat.com/articles/5456281#what-is-oadp-2'},
  { id: 'GitOps', name: "GitOps", icon: '/images/gitops.webp', url: 'https://www.redhat.com/es/topics/devops/what-is-gitops'}
];

export const EXPERIENCES = [
  {
    company: "Chip7 Portugal",
    role: "IT Technician Intern",
    period: "2023 - 2024",
    image: "/images/chip7.webp",
    location: "Maia, Oporto, Portugal",
    url: "https://chip7.pt/"
  },
  {
    company: "Nuxia",
    role: "DevOps | AIOps Engineer",
    period: "2025 - 2026",
    image: "/images/nuxia.webp",
    location: "Madrid, Spain",
    url: "https://nuxia.tech/"
  }
];
export const COLLABORATORS = [
  {
    id: "Laboral Kutxa",
    name: "Laboral Kutxa",
    icon: "/images/laboralkutxa.webp",
    url: "https://www.laboralkutxa.com/",
    role: "Actividades Día 2; set up de operadores de Openshift (OADP, GitOps, etc.) y despliegue de aplicaciones mediante CI/CD. Configuración de sistemas de backup y restauración, así como prevención de desastres"
  },
  {
    id: "Bonarea",
    name: "Bonarea",
    icon: "/images/bonarea.webp",
    url: "https://www.bonarea.com/",
    role: "Actividades Día 1, Día 2; Creación de clusteres, manejo de K-API en entornos de VMWare, actualizaciones, mantenimiento, instalación de paquetería, despliegue de aplicaciones, configuración de sistemas de backup y restauración, así como prevención de desastres"
  },
  {
    id: "Gobierno de España",
    name: "Gobierno de España",
    icon: "/images/aead.webp",
    url: "https://administracion.gob.es/pag_Home/index.html",
    role: "Actividades Día 2; Instalación de paquetería, monitoreo; Grafana, Prometheus, Fluent-Bit. Y gestión de backups (Velero) y restauración de datos, así como prevención de desastres"
  },
  {
    id: "Ricoh",
    name: "Ricoh",
    icon: "/images/ricoh.webp",
    url: "https://www.ricoh.com/",
    role: "Intermediario"
  },
  {
    id: "Inditex",
    name: "Inditex",
    icon: "/images/inditex.webp",
    url: "https://www.inditex.com/itxcomweb/es/es/home",
    role: "Configuración de CSI de almacenamiento mediante VSAN"
  },
  {
    id: "Broadcom",
    name: "Broadcom",
    icon: "/images/broadcom.svg",
    url: "https://www.broadcom.com/",
    role: "Intermediario"
  },
];

export const COLLABORATORS_ANON = [
  { id: "banking" },
  { id: "retail" },
  { id: "government" },
  { id: "textile" }
];