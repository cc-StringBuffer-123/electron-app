export const menuItems = [
  {
    id: 1001,
    label: 'Macdonald.co.uk',
    path: '/macdonald',
    enabled: false
  },
  {
    id: 1201,
    label: 'UncleRay',
    path: '/uncleRay',
    enabled: false
  },
  {
    id: 1301,
    label: 'login to Join Team',
    path: '/login',
    enabled: false
  },
  {
    id: 1401,
    label: 'Logout all Teams',
    path: '/logout',
    enabled: false
  },
  {
    id: 1501,
    label: 'Request to add user',
    path: '/add-user',
    enabled: false
  },
  {
    id: 1601,
    label: 'Open Team Site',
    path: '/open',
    enabled: false
  },
  {
    id: 1701,
    label: 'Local Preferences',
    path: '/local',
    enabled: false
  },
  {
    id: 1801,
    label: 'Geo-proxy Local',
    path: '/geoProxy',
    enabled: false
  },
  {
    id: 1901,
    label: 'Local Applications',
    path: '/localApplications',
    enabled: false
  },
  {
    id: 2001,
    label: 'Logs',
    path: '/logs',
    enabled: false
  },
  {
    id: 2101,
    label: 'About StrongGate',
    path: '/about',
    enabled: false
  },
  {
    id: 2201,
    label: 'Exit',
    path: '/exit',
    enabled: false
  }
]

export enum MenuItemType {
  Macdonald = 1001,
  UncleRay = 1201,
  Login = 1301,
  Logout = 1401,
  Request = 1501,
  OpenTeamSite = 1601,
  LocalPreferences = 1701,
  GeoProxyLocal = 1801,
  LocalApplications = 1901,
  Logs = 2001,
  About = 2101,
  Exit = 2201
}

export const macdonaldItems = [
  {
    id: 1011,
    label: 'Logged-Out',
    path: '/',
    enabled: false
  },
  {
    id: 1012,
    label: 'Connected',
    path: '/',
    enabled: false
  },
  {
    id: 1013,
    label: 'Login to Join Team',
    path: '/',
    enabled: false
  },
  {
    id: 1014,
    label: 'Connect',
    path: '/',
    enabled: false
  },
  {
    id: 1015,
    label: 'Team Device Status',
    path: '/team-device-status',
    enabled: false
  },
  {
    id: 1016,
    label: 'Open Team Dashboard',
    path: '/',
    enabled: false
  },
  {
    id: 1017,
    label: 'Request to Add User',
    path: '/add-user',
    enabled: false
  },
  {
    id: 1018,
    label: 'Local Team Preferences',
    path: '/',
    enabled: false
  },
  {
    id: 1019,
    label: 'Remove cache of this Team',
    path: '/',
    enabled: false
  }
]

export enum MacdonaldType {
  LoggedOut = 1011,
  Connected = 1012,
  Login = 1013,
  Connect = 1014,
  TeamDeviceStatus = 1015,
  OpenTeamDashboard = 1016,
  RequestToAddUser = 1017,
  LocalTeamPreferences = 1801,
  RemoveCacheOfThisTeam = 1901
}
