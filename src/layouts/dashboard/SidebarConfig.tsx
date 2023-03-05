// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name: string) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'category',
    path: '/dashboard/category',
    icon: getIcon('ic:round-category')
  },
  {
    title: 'order',
    path: '/dashboard/orders',
    icon: getIcon('eva:shopping-cart-fill')
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'asset',
    path: '/dashboard/assets',
    icon: getIcon('akar-icons:image')
  },
  {
    title: 'marketing',
    path: '/dashboard/marketing',
    icon: getIcon('material-symbols:campaign-rounded')
  },
  {
    title: 'settings',
    path: '/dashboard/settings',
    icon: getIcon('icon-park-solid:setting-two')
  },


];

export default sidebarConfig;
