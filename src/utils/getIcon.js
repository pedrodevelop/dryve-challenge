function getIcon(icon) {
  switch (icon) {
    case 'bank':
      return '/assets/DrawerIcons/Bank.svg';
    case 'chart':
      return '/assets/DrawerIcons/Chart.svg';
    case 'user':
      return '/assets/DrawerIcons/User.svg';
    case 'rocket':
      return '/assets/DrawerIcons/Rocket.svg';
    case 'vehicle':
      return '/assets/DrawerIcons/Vehicles.svg';
    case 'calendar':
      return '/assets/DrawerIcons/Calendar.svg';
    case 'tags':
      return '/assets/DrawerIcons/Tags.svg';
    default:
      return '/assets/DrawerIcons/Dashboard.svg';
  }
}

export default getIcon;
