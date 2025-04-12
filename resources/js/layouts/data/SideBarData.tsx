import React from 'react';
import abyip from '../../../assets/abyip.png';
import attachment from '../../../assets/attachment.png';
import calendar from '../../../assets/calendar.png';
import dashboard from '../../../assets/dashboard.png';
import events from '../../../assets/events.png';
import kkOfficers from '../../../assets/kkofficers.png';
import program from '../../../assets/program.png';
import projects from '../../../assets/projects.png';
import reports from '../../../assets/report.png';
import settings from '../../../assets/settings.png';
import skOfficers from '../../../assets/skofficers.png';
import TermsOfService from '../../../assets/terms-of-service.png';

const dashboardIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={dashboard} alt="Dashboard Icon" {...props} />
));
const skOfficialIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={skOfficers} alt="Dashboard Icon" {...props} />
));
const kkOfficialIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={kkOfficers} alt="Dashboard Icon" {...props} />
));
const abyipIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={abyip} alt="Dashboard Icon" {...props} />
));
const calendarIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={calendar} alt="Dashboard Icon" {...props} />
));
const eventsIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={events} alt="Dashboard Icon" {...props} />
));
const projectsIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={projects} alt="Dashboard Icon" {...props} />
));
const programsIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={program} alt="Dashboard Icon" {...props} />
));
const attachmentsIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={attachment} alt="Dashboard Icon" {...props} />
));
const reportsIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={reports} alt="Dashboard Icon" {...props} />
));
const settingsIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={settings} alt="Dashboard Icon" {...props} />
));
const termsofserviceIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>((props, ref) => (
    <img ref={ref} src={TermsOfService} alt="Dashboard Icon" {...props} />
));

export const SideBarItem = [
    { title: 'Dashboard', href: route('dashboard.dashboard'), icon: dashboardIcon },
    { title: 'SK Officials', href: route('dashboard.skofficials'), icon: skOfficialIcon },
    { title: 'KK Officers', href: route('dashboard.kkofficers'), icon: kkOfficialIcon },
    { title: 'ABYIP', href: route('dashboard.abyip'), icon: abyipIcon },
    { title: 'Calendar', href: route('dashboard.calendar'), icon: calendarIcon },
    { title: 'Events', href: route('dashboard.events'), icon: eventsIcon },
    { title: 'Projects', href: route('dashboard.projects'), icon: projectsIcon },
    { title: 'Programs', href: route('dashboard.programs'), icon: programsIcon },
    { title: 'Attachments', href: route('dashboard.attachments'), icon: attachmentsIcon },
    { title: 'Reports', href: route('dashboard.reports'), icon: reportsIcon },
    { title: 'Settings', href: route('dashboard.settings'), icon: settingsIcon },
    { title: 'Terms of Service', href: route('dashboard.termsofservice'), icon: termsofserviceIcon },
];

// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
// icon: CustomDashboardIcon,
