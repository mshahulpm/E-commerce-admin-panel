// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: "id_" + index,
  avatarUrl: mockImgAvatar(index + 1),
  name: 'user_' + index,
  company: 'company_' + index,
  isVerified: index % 2 === 0,
  status: ['active', 'banned'][index % 2],
  role: [
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ][index % 10]
}));

export default users;
