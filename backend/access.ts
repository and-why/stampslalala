// at its simplest, access control is either a yes or no depending on users' session
import { ListAccessArgs } from './types';
import { permissionsList } from './schemas/fields';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ]),
);

export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: ListAccessArgs) {
    return session?.data.name.includes('andy');
  },
};

export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    // 1. do they have the permission of CanManProd
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. if not do they own it>
    return { user: { id: session.itiemId } };
  },
};
